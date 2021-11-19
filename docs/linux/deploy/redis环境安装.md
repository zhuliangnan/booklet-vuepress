---
sidebar: auto
---
## redis环境安装

### 安装前置
::: warning
一 安装gcc：需要安装gcc 才能使用make编译
::: 
```bash
yum -y install gcc
yum -y install gcc-c++
```

### 解压并编译安装
::: tip
二 编译：在redis解压所在目录下使用make编译
::: 
```bash
cd redis-4.0.8
make
make && make install
```
### 安装
::: warning
三 安装：编译好了需要安装 安装目录为/usr/local/redis-5.0.8
:::
```bash
make PREFIX=/usr/local/redis-5.0.8 install
```


### 配置文件下载
::: warning
四 如果没有配置文件，去官网下载
:::
Redis配置下载地址:[http://download.redis.io/redis-stable/redis.conf](http://download.redis.io/redis-stable/redis.conf)


### 配置文件修改
::: tip
五 常规配置
::: 
```bash
bind 127.0.0.1改为 bind 0.0.0.0或者 # bind 127.0.0.1（注释掉即可）
protected-mode no  //关闭保护模式
appendonly yes     //aof持久化  默认开启rdb持久化
aof-use-rdb-preamble yes // 混合模式持久化
requirepass 123456   //密码 
daemonize yes //后台启动  
logfile //日志位置
maxmemory-policy allkeys-lru   //设置过期淘汰（无需修改）
```
::: warning
六 根据需要修改
::: 
```bash
cluster-enabled yes #开启cluster，去掉注释
supervised no
cluster-config-file /usr/local/redis1/etc/nodes-6379.conf #自动生成

//备注 如果加上了密码那么从属节点再配置的时候也要加上密码
masterauth 123456
// 哨兵模式的时候也要 加上验证密码
sentinel auth-pass mymaster 123456
```

### 启动一  一般方式
::: tip
七：进入/usr/local/redis/bin目录 启动    --raw value才能显示中文
::: 
```bash
./redis-server redis.conf
./redis-cli -a 123456 --raw  
```

### 启动二  针对于docker以挂载启动
::: warning
需要注释daemonize 或者 改成 no
如果有密码需要添加 --requirepass "123456"
::: 
```bash
docker run -p 6379:6379 --name redis  -v /usr/local/docker/redis/conf/redis.conf:/etc/redis/redis.conf -v /usr/local/docker/redis/data:/data -d redis redis-server /etc/redis/redis.conf  --requirepass "123456" --appendonly yes 

docker run -p 6379:6379 --name redis  -v /home/data/redis/redis.conf:/etc/redis/redis.conf -v /home/data/redis/data:/data -d redis redis-server /etc/redis/redis.conf  --requirepass "123456" --appendonly yes 
```
### 验证
::: tip
一般进入bin目录
./redis-cli
对于docker
docker exec -it redis(容器名字) bin/bash
redis-cli
:::
```bash
127.0.0.1:6379> set a 123
(error) NOAUTH Authentication required. //请输入密码
127.0.0.1:6379> auth 密码
```
