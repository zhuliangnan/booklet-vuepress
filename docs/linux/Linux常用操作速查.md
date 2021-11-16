---
sidebar: auto
---
## Linux常用操作速查
## Linux 安装 Centos7 及克隆

[^安装教程1](https://blog.csdn.net/babyxue/article/details/80970526)
[^安装教程2](https://blog.csdn.net/babyxue/article/details/80970526)
[^ping不通外网解决方案](https://blog.csdn.net/lushizhuo9655/article/details/90477613)
[^机器克隆克隆](https://www.cnblogs.com/Lynette/p/9470800.html)


## Linux 常用命令 --- centos7 .x版本

## 网络服务
```bash
查看IP信息
ip a

网络连通性测试
ping [选项] 目标主机

设置网络信息
vi /etc/sysconfig/network-scripts/ifcfg-ens33

重启network网络服务
service network restart
```

## 防火墙

```bash
查看防火墙状态
systemctl status firewalld.service 

关闭防火墙
systemctl stop firewalld.service 

禁止开机启动
systemctl disable firewalld.service

1、开放端口
firewall-cmd --zone=public --add-port=5672/tcp --permanent   # 开放5672端口
firewall-cmd --zone=public --remove-port=5672/tcp --permanent  #关闭5672端口
firewall-cmd --reload   # 配置立即生效

2、查看防火墙所有开放的端口
firewall-cmd --zone=public --list-ports

3.、关闭防火墙
如果要开放的端口太多，嫌麻烦，可以关闭防火墙，安全性自行评估
systemctl stop firewalld.service

4、查看防火墙状态
firewall-cmd --state

5、查看监听的端口
netstat -lnpt

PS:centos7默认没有 netstat 命令，需要安装 net-tools 工具，yum install -y net-tools

6、检查端口被哪个进程占用

netstat -lnpt |grep 5672

7、查看进程的详细信息

ps 6832

8、中止进程

kill -9 6832
```

## 目录操作命令

```bash
查看工作目录（Print Working Directory）
pwd

切换工作目录（Change Directory）
cd [目录位置]

列表（List）显示目录内容
ls	[选项]... [目录或文件名]

创建新的目录（Make Directory）
mkdir [-p] [/路径/]目录名

统计目录及文件的空间占用情况（estimate file space usage）
du [选项]... [目录或文件名]

常用命令选项
-l ：详细信息显示
-a：显示所有子目录和文件的信息，包括隐藏文件
-A：类似于“-a”，但不显示“.”和“…”目录的信息
-R：递归显示内容
```

## 文件操作命令

```bash
新建空文件，或更新文件时间标记
touch 文件名

查看文件类型
file 文件名

复制（copy）文件或目录
cp [选项] 源文件或目录… 目标文件或目录

常用命令选项
-r：递归复制整个目录树
-p：保持源文件的属性不变
-f：强制覆盖目标同名文件或目录
-i：需要覆盖文件或目录时进行提醒

删除（Remove）文件或目录
rm [选项] 文件或目录

常用命令选项
-f：强行删除文件，不进行提醒
-i：删除文件时提醒用户确认
-r：递归删除整个目录树

移动（Move）文件或目录
mv [选项]... 源文件或目录… 目标文件或目录

如果目标位置与源位置相同，则相当于改名

显示系统命令所在目录
which <选项> command（命令名称）

常用命令选项
-a：将所有由PATH路径中可以找到的指令均列出，而不止第一个被找到的指令名称

find查找
find <路径> <选项> [表达式]

find查找的特点
从指定路径下递归向下搜索文件
支持按照各种条件方式查找
支持对查找到的文件再进一步的使用指令操作
（例如：删除、统计大小、复制等）

常用命令选项
-name 根据文件名查找
-user 根据文件拥有者查找
-group 根据文件所属组寻找文件
-perm 根据文件权限查找文件
-size 根据文件大小查找文件
-type 根据文件类型查找（f-普通文件，c-字符设备文件，b-块设备文件，l-链接文件，d-目录）
-o 表达式或
-and 表达式与
```

## 文件内容操作命令

```bash
显示出文件的全部内容
cat 

全屏方式分页显示文件内容
more

交互操作方法
按Enter键向下逐行滚动
按空格键向下翻一屏、按b键向上翻一屏
按q键退出

与more命令相同
less

查看文件开头的一部分内容（默认为10行）
head -n 文件名

查看文件结尾的少部分内容（默认为10行）
tail -n 文件名

统计文件中的单词数量（Word Count）等信息
wc [选项] 目标文件

常用命令选项
-l：统计行数
-w：统计单词个数
-c：统计字节数

查找文件里符合条件的字符串
grep [选项] <关键字> <文件…>

常用选项
-c:计算匹配关键字的行数
-i:忽略字符大小写的差别
-n:显示匹配的行及其行号
-s:不显示不存在或不匹配文本的错误信息
-h: 查询多个文件时不显示文件名
-l:查询文件时只显示匹配字符所在的文件名
–color=auto:将找到的关键字部分加上颜色显示
```

## 压缩命令

```bash
压缩（解压）文件或目录，压缩文件后缀为gz
gzip [选项] 压缩（解压缩）的文件名

常用选项
-d将压缩文件解压（decompress）
-l显示压缩文件的大小，未压缩文件的大小，压缩比（list）
-v显示文件名和压缩比（verbose）
-num用指定的数字num调整压缩的速度，-1或–fast表示最快压缩方法（低压缩比），-9或–best表示最慢压缩方法（高压缩比）。系统缺省值为6

压缩（解压）文件或目录，压缩文件后缀为bz2
bzip2 [-cdz] 文档名

常用选项
-c将压缩的过程产生的数据输出到屏幕上
-d解压缩的参数（decompress）
-z压缩的参数（compress）
-num 用指定的数字num调整压缩的速度，-1或–fast表示最快压缩方法（低压缩比），-9或–best表示最慢压缩方法（高压缩比）。系统缺省值为6

压缩、解压文件
tar [cvf]...	压缩名 文件名（压缩文件）
tar [xvf]...	文件名.tar（解压文件）

解压zip
unzip 文件名（压缩文件） /abeOtifq7)W

常用命令选项
-c：创建 .tar 格式的包文件
-x：解开.tar格式的包文件
-v：输出详细信息
-f：表示使用归档文件
-z：用Gzip压缩或解压
-j：用bzip2压缩或解压
```

## 用户和组

```bash
保存用户信息的文件：
/etc/passwd

保存密码的文件：
/etc/shadow

保存用户组的文件：
 /etc/group

 保存用户组密码的文件：
/etc/gshadow

用户配置文件：
/etc/default/useradd

新建组和用户
groupadd mysql
useradd -r -g mysql mysql
更改目录所属群组
chown -R mysql:mysql /usr/local/mysql
更改权限
chmod -R 755 /usr/local/mysql





```

## 软件包管理

```bash
RPM命令使用
rpm

-i：安装应用程序（install）
-e：卸载应用程序（erase）
-vh：显示安装进度；（verbose hash）
-U：升级软件包；（update）
-qa: 显示所有已安装软件包（query all）

YUM命令
Yum（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及SUSE、CentOS中的Shell前端软件包管理器。基於RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。

yum  install  gcc-c++
yum  remove  gcc-c++
yum  update  gcc-c++
```

## 内存管理

```bash
查看内存(其中free字段为0的话内存就被吃完了 buff/cache 字段表示可以释放的资源)
free -g

查看CUP使用情况 
top
最右侧的%id表示剩余，若很低，则表示cpu被吃完了，在top界面按shift+p对进程使用cpu排序，能看到哪些进程占用cpu较多
然后kill占用cpu多的进程

首先我们需要使用sync指令，将所有未写的系统缓冲区写到磁盘中，包含已修改的 i-node、已延迟的块 I/O 和读写映射文件。否则在释放缓存的过程中，可能会丢失未保存的文件。
#sync

接下来，我们需要将需要的参数写进/proc/sys/vm/drop_caches文件中，比如我们需要释放所有缓存，就输入下面的命令：
#echo 3 > /proc/sys/vm/drop_caches
此指令输入后会立即生效，可以查询现在的可用内存明显的变多了。

要查询当前缓存释放的参数，可以输入下面的指令：

#cat /proc/sys/vm/drop_caches
```

## 进程和端口

```bash
根据程序名称查询进程ID
ps -ef | grep xx

根据端口查看哪个进程占用了端口
netstat -nap | grep 6379
tcp6   0    0 :::6379          :::*            LISTEN      2801/docker-proxy

根据进程id查端口情况：
netstat -nap | grep pid

[root@yxt0002 data]# netstat -nap | grep 3982
tcp6       0      0 :::9999                 :::*                    LISTEN      3982/node /home/dat 
unix  3      [ ]         STREAM     CONNECTED     3686798  3982/node /home/dat  
unix  3      [ ]         STREAM     CONNECTED     3686800  3982/node /home/dat  
unix  3      [ ]         STREAM     CONNECTED     3686796  3982/node /home/dat  
unix  3      [ ]         STREAM     CONNECTED     3686802  3982/node /home/dat 

杀死进程 
kill -9 pid

查看某一端口的占用情况
lsof -i:8080

例如
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
java 3511 root 46u IPv6 31351 0t0 TCP *:webcache (LISTEN)
COMMAND：进行成名，如上说明8080被一个java进程占用
PID：进程的ID，一般杀掉进程时就是指定进程的PID
USER：进程所有者
```



# Docker

## Redis 缓存清理

```bash
1.查询所有容器

    docker ps -a

2.进入redis客户端

   docker exec -it  xxx（ID）  redis-cli
3.清除缓存
    flushall  所有数据库

    flushdb  当前库
4.清除指定key

   查询所有key：keys *

   删除指定key：del xxx（key）


```

[^没有权限输入]: auth Occ2018





## Docker 配置 Redis 自启动 

```bash
1.获取redis镜像

docker pull redis

指定版本号：

docker pull redis:4.0.9
不加版本号默认获取最新版本，也可以使用 docker search redis 查看镜像来源

2.查看本地镜像 
docker images

3.然后启动容器，做映射

①创建配置文件目录存放redis.conf，文件从官网下载。

 
②创建文件夹,新建配置文件贴入从官网下载的配置文件并修改
http://download.redis.io/redis-stable/redis.conf

mkdir /usr/local/docker

vi /usr/local/docker/redis.conf

 
③修改启动默认配置(从上至下依次)：

bind 127.0.0.1 #注释掉这部分，这是限制redis只能本地访问

protected-mode no #默认yes，开启保护模式，限制为本地访问

daemonize no#默认no，改为yes意为以守护进程方式启动，可后台运行，除非kill进程，改为yes会使配置文件方式启动redis失败

databases 16 #数据库个数（可选），我修改了这个只是查看是否生效。。

dir  ./ #输入本地redis数据库存放文件夹（可选）

appendonly yes #redis持久化（可选）

4.docker启动redis命令

docker run -p 6379:6379 --name myredis -v /usr/local/docker/redis.conf:/etc/redis/redis.conf -v /usr/local/docker/data:/data -d redis redis-server /etc/redis/redis.conf --appendonly yes

https://www.cnblogs.com/conswin/p/11547120.html

命令解释说明：

-p 6379:6379 端口映射：前表示主机部分，：后表示容器部分。

--name myredis  指定该容器名称，查看和进行操作都比较方便。

-v 挂载目录，规则与端口映射相同。

为什么需要挂载目录：个人认为docker是个沙箱隔离级别的容器，这个是它的特点及安全机制，不能随便访问外部（主机）资源目录，所以需要这个挂载目录机制。

-d redis 表示后台启动redis

redis-server /etc/redis/redis.conf  以配置文件启动redis，加载容器内的conf文件，最终找到的是挂载的目录/usr/local/docker/redis.conf


--appendonly yes  开启redis 持久化
5.查看是否运行成功

docker ps 查看运行的容器
dockers logs myredis/27ddba64faa6  (容器名称/id)
```

[^博客地址]: https://blog.csdn.net/weixin_42456466/article/details/87270959?depth_1-utm_source=distribute.pc_relevant.none-task-blog-OPENSEARCH-2&utm_source=distribute.pc_relevant.none-task-blog-OPENSEARCH-2
