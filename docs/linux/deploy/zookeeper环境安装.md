---
sidebar: auto
---
## zookeeper环境安装

### 下载
- [^官网地址](http://mirror.bit.edu.cn/apache/zookeeper/)
- [^很全的](https://archive.apache.org/dist/zookeeper/)

::: tip
请尽量下载的带有bin的压缩包
::: 

### 解压并重命名
```bash
[root@localhost tmp]#tar -zxvf zookeeper-3.4.10.tar.gz
[root@localhost tmp]# cp zookeeper-3.4.10 /usr/local/zookeeper -r  //复制所有文件到zookeeper 文件夹下
[root@localhost tmp]# cd /usr/local/zookeeper					   //切换到/usr/local/zookeeper目录下
##重新复制一份zoo_sample.cfg文件并命名为zoo.cfg
[root@localhost conf]# cp zoo_sample.cfg zoo.cfg	//copy一份到当前目录下，并命名为zoo.cfg
```


### 编辑配置
```bash
[root@localhost conf]# vi zoo.cfg
添加如下
dataDir=/tmp/zookeeper
dataLogDir=/tmp/zookeeper/log
```

### 最后一步配置环境变量
```bash
[root@localhost zookeeper]# vi /etc/profile			//编辑文件
[root@localhost zookeeper]# source /etc/profile    //使生效
添加如下
export ZOOKEEPER=/usr/local/zookeeper
export PATH=$PATH:$ZOOKEEPER/bin
```

### 启动
::: tip
因为配置了环境变量，所以在任意目录下都可以运行以下启动命令启动Zookeeper。
::: 
```bash
[root@localhost ~]# zkServer.sh start //启动

[root@localhost ~]# zkServer.sh status  //查看运行状态或者用ps -ef  也行

```