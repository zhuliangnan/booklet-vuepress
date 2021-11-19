---
sidebar: auto
---
## KafKa安装教程

### 安装环境
- linux7
- jdk1.8
-  ![image.png](/upload/2020/01/image-254ce7e3cf0b4e428987344c5b03754f.png)
- zookeeper 3.5.9
- kafka 2.12-1.0.0

## Zookeeper的安装 
::: tip
大家可以使用Kafka自带的zk，也可以自己选择安装自己本地的
这里我用我自己的zk  
ZK下载地址:[http://mirror.bit.edu.cn/apache/zookeeper/](http://mirror.bit.edu.cn/apache/zookeeper/)
- 提个醒 3.4以上的版本 要安装带有bin字样的安装包 例如:apache-zookeeper-3.6.1-bin.tar.gz
- 个人习惯安装在/usr/local下面,自己自行选择,下载安装解压,改名
::: 

### zk上传命令解压改名
```bash
[root@localhost /]# rz   
[root@localhost /]# cd /usr/local
[root@localhost /]# tar -zxvf apache-zookeeper-3.5.9-bin.tar.gz 
[root@localhost /]# mv apache-zookeeper-3.5.9-bin zookeeper
```

### 编辑配置文件
::: tip
- 编辑配置文件, 将zoo_sample.cfg这个文件复制为zoo.cfg (必须是这个文件名)
::: 
```bash
[root@localhost /]# cd /usr/local/zookeeper/conf
[root@localhost conf]# cp  zoo_sample.cfg  zoo.cfg
[root@localhost conf]# vim zoo.cfg

zoo.cfg文件修改 或者添加 
.....
dataDir=/usr/local/zookeeper/data
dataLogDir=/usr/local/zookeeper/log
.....


注意：如果想配置集群的话，请在clientPort下面添加服务器的ip。如

server.1=192.168.248.128:2888:3888
server.2=192.168.248.129:2888:3888
server.3=192.168.248.130:2888:3888
```
### 创建文件夹
::: tip
- 创建我们刚刚指定的data和logs文件夹
:::
````bash
[root@localhost local]# cd /usr/local/zookeeper/
[root@localhost zookeeper]# mkdir data
[root@localhost zookeeper]# mkdir logs
````
### 对于集群配置文件
::: tip
- 如果是配置集群，还需要在前面配置过的dataDir路径下新增myid文件
1. 在data目录下创建文件，文件名为“myid”
2. 编辑该“myid”文件，并在对应的IP的机器上输入对应的编号
3. 如在192.168.248.128上，“myid”文件内容就是1。在192.168.248.129上，内容就是2。
:::
```bash
[root@localhost data]# touch myid
[root@localhost data]# vim myid

192.168.248.128的myid内容
....
1
....

192.168.248.129的myid内容
....
2
....

192.168.248.130的myid内容
....
3
....

```
### 配置环境变量
```bash
[root@localhost zookeeper-3.4.13]# export ZOOKEEPER_INSTALL=/usr/local/zookeeper/
[root@localhost zookeeper-3.4.13]# export PATH=$PATH:$ZOOKEEPER_INSTALL/bin
````

### 启动zookeeper
```bash
[root@localhost zookeeper]# cd /usr/local/zookeeper/bin/
[root@localhost bin]# ./zkServer.sh start
-- 启动客户端
[root@localhost bin]# ./zkCli.sh

如果是连接多个不同的主机节点，可以使用如下命令：
./zkCli.sh -server 192.168.248.128:2888
````
### 启动zookeeper
```bash
[root@localhost bin]# ./zkServer.sh status
````

::: tip
至此zk安装成功。
::: 

## KafKa的安装 

KafKa下载地址:[http://kafka.apache.org/downloads.html](http://kafka.apache.org/downloads.html)

### 上传解压
::: tip
- 同样我们把kafka安装在/usr/local,解压改名
:::
```bash
--- rz 上传命令
[root@localhost /]# rz   
[root@localhost /]# cd /usr/local
[root@localhost /]# tar -zxvf kafka_2.12-1.0.0.tgz  
[root@localhost /]# mv kafka_2.12-1.0.0 kafka
```

### 配置修改
::: tip
- 修改配置文件server.properties 使其可以被远程访问
:::
```bash
[root@localhost kafka]# cd /usr/local/kafka/config/
[root@localhost config]# vim server.properties

server.properties修改部分
192.168.248.128为本机的ip,可以通过ifconfig查看
····
host.name=192.168.248.128

listeners = PLAINTEXT://192.168.248.128:9092

advertised.listeners=PLAINTEXT://192.168.248.128:9092
····
````
### 启动
::: warning
- 启动之前请保证`9092`端口开放,对于安装在云服务器上面的还需要去控制平台打开安全组配置。
:::

```bash
-- 启动命令
[root@localhost /]# cd /usr/local/kafka/bin
[root@localhost bin]# ./kafka-server-start.sh ../config/server.properties

备注:这种是控制台启动，关闭控制台服务就会关闭，后台启动命令如下
nohup ./kafka-server-start.sh ../config/server.properties &
```
### 测试
```bash 
[root@localhost bin]# ./kafka-console-producer.sh --broker-list 192.168.248.128:9092 --topic test7
````
![image.png](/upload/2021/01/image-29c84e761e03470c8a1477d25d81fc39.png)

```bash
---重新开一个会话
[root@localhost bin]#  ./kafka-console-consumer.sh --zookeeper 192.168.248.128:2181 --topic test7 --from-beginning
````
![image.png](/upload/2021/01/image-a5dbd11e9d844ed9b38eaa59655fcd85.png)

接收正常

至此安装完毕

----- 世界太大，我们太小