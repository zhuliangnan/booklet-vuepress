## 基础架构：一条SQL查询语句是如何执行的？

### MySQL的sql语句执行流程图

::: tip
MySQL 可以分为`Server`层和`存储引擎`层两部分。
:::
![img](/mysql/base/0d2070e8f84c4801adbfa03bda1f98d9.png)

::: tip
 server层: 

 包括`连接器`、`查询缓存`、`分析器`、`优化器`、`执行器等`，涵盖 MySQL 的大多数核心服务功能，以及`所有的内置函数（如日期、时间、数学和加密函数等`），所有跨存储引擎的功能都在这一层实现，比如`存储过程、触发器、视图`等。

 存储引擎层:

 负责数据的`存储和提取`。其架构模式是`插件式`的，支持 `InnoDB、MyISAM、Memor`y 等多个存储引擎。现在最常用的存储引擎是 InnoDB，它从 MySQL 5.5.5 版本开始成为了默认存储引擎。

 我们可以在 `create table` 语句中使用 `engine=memory` 来进行指定存储引擎，示例如下。
:::
   1. InnoDB支持事务，而MyISAM不支持事务 
   2. InnoDB支持行级锁，而MyISAM支持表级锁 
   3. InnoDB支持MVCC, 而MyISAM不支持 
   4. InnoDB支持外键，而MyISAM不支持

```sql
CREATE TABLE `hui_user` (
    `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户表id', 
    `username` varchar(50) NOT NULL COMMENT '用户名', 
    `password` varchar(50) NOT NULL COMMENT '用户密码，MD5加密', 
    `email` varchar(50) DEFAULT NULL, `phone` varchar(20) DEFAULT NULL,
    `question` varchar(100) DEFAULT NULL COMMENT '找回密码问题', 
    `answer` varchar(100) DEFAULT NULL COMMENT '找回密码答案', 
    `role` int(4) NOT NULL COMMENT '角色0-管理员,1-普通用户', 
    `create_time` datetime NOT NULL COMMENT '创建时间', 
    `update_time` datetime NOT NULL COMMENT '最后一次更新时间',
    PRIMARY KEY (`id`), UNIQUE KEY `user_name_unique` (`username`) USING BTREE 
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
```

### 连接器
::: tip
 第一步，你会先连接到这个数据库上，这时候接待你的就是`连接器`。连接器负责跟`客户端建立连接、获取权限、维持和管理连接`。连接命令一般是这么写的

 其中mysql是指客户端工具，是用来与服务端建立连接的
::: 

```sql
mysql -h$ip -P$port -u$user -p$pwd
```

- 如果用户名或密码不对，你就会收到一个"`Access denied for user`"的错误，然后`客户端程序结束执行`。

- 如果用户名密码认证通过，连接器会到`权限表里面查出你拥有的权限`。之后，这个连接里面的权限判断逻辑，都将`依赖于此时读到的权限`。

- 这就意味着，`一个用户成功建立连接后`，即使你用管理员账号对这个用户的权限做了修改，也`不会影响已经存在连接的权限`。修改完成后，只有再新建的连接才会使用新的权限设置。

- 连接完成后，如果没有后续动作，这个连接就处于`空闲状态`，你可以在 `show processlist`[查询Mysql连接状态]命令中看到它。

  ![image-20211119110233353](/mysql/base/image-20211119110233353.png)

- 值得注意的是客户端如果太长时间没动静，连接线程是占用资源的，默认8小时才会断开,这个时间是由参数 `wait_timeout`控制的，默认值是 8 小时。,我们可以通过 `show variables like 'wait_timeout';` 来进行查看，单位s。
  ![image-20211119110419344](/mysql/base/image-20211119110419344.png)

::: tip
 长连接:

 指连接成功后，如果客户端持续有请求，则一直使用同一个连接

 短连接：

 则是指每次执行完很少的几次查询就断开连接，下次查询再重新建立一个。

 Tip：建立连接的过程通常复杂，使用中要尽量减少建立连接。

 但是`全部使用长连接`后，你可能会发现，有些时候 MySQL 占用内存涨得特别快，这是因为 MySQL 在执行过程中`临时使用的内存是管理在连接对象`里面的。

 这些资源会在`连接断开的时候才释放`。所以如果长连接累积下来，可能导致内存占用太大，被系统强行杀掉（OOM），从现象看就是 MySQL 异常重启了。

 这个适合我们有两种解决方案
::: 

1. 定期断开长连接。使用一段时间，或者程序里面判断执行过一个`占用内存的大查询`后，断开连接，之后要查询再重连
2. 通过重新初始化链接来清空。通过执行 `mysql_reset_connection` 来重新初始化连接资源。这个过程不需要重连和重新做权限验证，但是会将连接恢复到刚刚创建完时的状态。

### 查询缓存
::: tip
 MySQL 拿到一个查询请求后，会先到查询缓存看看，之前是不是执行过这条语句。

 之前执行过的语句及其结果可能会以 key-value 对的形式，被直接缓存在内存中。key 是查询的语句，value 是查询的结果

 但是大多数情况下`建议不要使用查询缓存`，因为命中率太低，MySQL 8.0 版本直接将查询缓存
::: 
查询缓存的失效非常频繁，只要有对一个表的更新，这个表上所有的查询缓存都会被清空，还没使用呢，就被一个更新全清空了，

你可以将参数 `query_cache_type` 设置成 `DEMAND`，这样对于默认的 SQL 语句都`不使用查询缓存`

对于你确定要使用查询缓存的语句，可以用 SQL_CACHE 显式指定，像下面这个语句一样：

```sql
mysql select SQL_CACHE * from T where ID = 10；
```

### 分析器
::: tip
如果`没有命中查询缓存`，就要开始真正执行语句了。首先，MySQL 需要知道你要做什么，因此需要对 SQL 语句做`解析`。
::: 
#### 词法分析
::: tip
 你输入的是由多个字符串和空格组成的一条 SQL 语句，MySQL 需要识别出里面的字符串分别是什么，代表什么。
::: 
#### 语法分析
::: tip
 语法分析器会根据语法规则，判断你输入的这个 SQL 语句是否满足 MySQL 语法。

 语句不对，就会收到“`You have an error in your SQL syntax`”的错误提醒
::: 
```sql
mysql elect * from t where ID=1;

ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'elect * from t where ID=1' at line 1
```

一般语法错误会提示第一个出现错误的位置，所以你要关注的是紧接“`use near`”的内容。

### 优化器
::: tip
 经过了分析器，MySQL 就知道你要做什么了。在开始执行之前，还要先经过优化器的处理。
::: 
- 优化器是在表里面有`多个索引`的时候，决定使用哪个索引；
- 或者在一个语句有`多表关联（join）的时候，决定各个表的连接顺序`。
::: tip
 在分析器之后，也就是知道了该语句要“干什么”之后，也会先做一次权限验证。

 叫做`precheck`。而precheck是`无法`对`运行时`涉及到的表进行权限验证的，比如使用了触发器的情况。`因此在执行器这里也要做一次执行时的权限验证。`

Tip:比如一个表里面没有这个字段，也会在优化器阶段给出报错，比如用先执行哪个条件，使用哪个索引。如果没有对应的字段就会报错的。
::: 
### 执行器
::: tip
 MySQL 通过分析器知道了你要做什么，通过优化器知道了该怎么做，于是就进入了执行器阶段，开始执行语句。
::: 
要先判断一下你对这个表 T 有没有执行查询的权限，如果没有，就会返回没有权限的错误

```sql
mysql select * from T where ID=10;

ERROR 1142 (42000): SELECT command denied to user 'b'@'localhost' for table 'T'
```
::: tip
 如果有权限，就打开表继续执行。打开表的时候，执行器就会根据表的`引擎定义`，去使用这个引擎提供的接口。

 所以到了执行的时候才会进入到数据库引擎，然后执行器也是`通过调用数据库引擎的API`来进行数据操作的。也因此数据库引擎才会是`插件形式`的。
::: 
*执行过程如下*

- 调用 InnoDB 引擎接口取这个表的第一行，判断 ID 值是不是 10，如果不是则跳过，如果是则将这行存在结果集中；
- 调用引擎接口取“下一行”，重复相同的判断逻辑，直到取到这个表的最后一行。
- 执行器将上述遍历过程中所有满足条件的行组成的记录集作为结果集返回给客户端。

你会在数据库的慢查询日志中看到一个 `rows_examined` 的字段，表示这个语句执行过程中扫描了多少行。这个值就是在执行器每次调用引擎获取数据行的时候累加的。