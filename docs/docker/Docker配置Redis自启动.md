## Docker配置Redis自启动

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
