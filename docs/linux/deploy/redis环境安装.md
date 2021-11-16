---
sidebar: auto
---
# redis环境安装

```bash
一 安装gcc：需要安装gcc 才能使用make编译
yum -y install gcc
yum -y install gcc-c++

二 编译：在redis解压所在目录下使用make编译
cd redis-4.0.8
make
make && make install

三 安装：编译好了需要安装 安装目录为/usr/local/redis-5.0.8
make PREFIX=/usr/local/redis-5.0.8 install

四：如果没有配置文件，去官网下载
http://download.redis.io/redis-stable/redis.conf

五：配置文件修改
bind 127.0.0.1改为 bind 0.0.0.0或者 # bind 127.0.0.1（注释掉即可）
protected-mode no  //关闭保护模式
appendonly yes     //aof持久化  默认开启rdb持久化
aof-use-rdb-preamble yes // 混合模式持久化
requirepass 123456   //密码 
daemonize yes //后台启动  
logfile //日志位置
maxmemory-policy allkeys-lru   //设置过期淘汰（无需修改）
...根据需要修改

cluster-enabled yes #开启cluster，去掉注释
supervised no
cluster-config-file /usr/local/redis1/etc/nodes-6379.conf #自动生成

//备注 如果加上了密码那么从属节点再配置的时候也要加上密码
masterauth 123456
// 哨兵模式的时候也要 加上验证密码
sentinel auth-pass mymaster 123456



六：进入/usr/local/redis/bin目录 启动    --raw value才能显示中文
./redis-server redis.conf
./redis-cli -a 123456 --raw  

# 以挂载启动
需要注释daemonize 或者 改成 no
#daemonize no //后台启动
如果有密码需要添加 --requirepass "123456"

docker run -p 6379:6379 --name redis  -v /usr/local/docker/redis/conf/redis.conf:/etc/redis/redis.conf -v /usr/local/docker/redis/data:/data -d redis redis-server /etc/redis/redis.conf  --requirepass "123456" --appendonly yes 

docker run -p 6379:6379 --name redis  -v /home/data/redis/redis.conf:/etc/redis/redis.conf -v /home/data/redis/data:/data -d redis redis-server /etc/redis/redis.conf  --requirepass "123456" --appendonly yes 


127.0.0.1:6379> set a 123
(error) NOAUTH Authentication required. //请输入密码
127.0.0.1:6379> auth 密码
```
