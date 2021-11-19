## Docker基础命令

###  Docker的启动与停止

```bash
启动docker
systemctl start docker

停止docker：
systemctl stop docker

重启docker：
systemctl restart docker 

查看docker状态：
systemctl status docker
 
开机启动：
systemctl enable docker

查看所有镜像 docker images

删除镜像(会提示先停止使用中的容器) docker rmi  镜像name/镜像id

查看所有容器 docker ps -a

查看容器运行日志 docker logs 容器名称/容器id

停止容器运行 docker stop 容器name/容器id

终止容器后运行 docker start 容器name/容器id

容器重启 docker restart 容器name/容器id

删除容器 docker rm 容器name/容器id

查看远程镜像  docker search activemq

拉取镜像 docker pull [NAME]
```

### Docker容器信息

```bash
##查看docker容器版本
docker version

##查看docker容器信息
docker info

##查看docker容器帮助
docker --help
```

### 镜像操作

```bash
##列出本地images
docker images

##含中间映像层
docker images -a
```

![img](/docker/1659331-20190521104721523-485290950.png)

#### 镜像搜索

```bash
##搜索仓库MySQL镜像
docker search mysql

## --filter=stars=600：只显示 starts>=600 的镜像
docker search --filter=stars=600 mysql

## --no-trunc 显示镜像完整 DESCRIPTION 描述
docker search --no-trunc mysql

## --automated ：只列出 AUTOMATED=OK 的镜像
docker search  --automated mysql
```

![img](/docker/1659331-20190521110514156-691788920.png)

#### 镜像下载

```bash
##下载Redis官方最新镜像，相当于：docker pull redis:latest
docker pull redis

##下载仓库所有Redis镜像
docker pull -a redis

##下载私人仓库镜像
docker pull bitnami/redis
```

![img](/docker/1659331-20190521112716615-10141164.png)

#### 镜像删除

```bash
##单个镜像删除，相当于：docker rmi redis:latest
docker rmi redis

##强制删除(针对基于镜像有运行的容器进程)
docker rmi -f redis

##多个镜像删除，不同镜像间以空格间隔
docker rmi -f redis tomcat nginx

##删除本地全部镜像
docker rmi -f $(docker images -q)
```

#### 镜像构建

```bash
##（1）编写dockerfile
cd /docker/dockerfile
vim mycentos

#-------------jar包部署-----satrt--------
FROM java:8   
MAINTAINER bingo
ADD demo-0.0.1-SNAPSHOT.jar demo.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]

注解：
# from java:8   拉取一个jdk为1.8的docker image
# maintainer  作者是bingo
# demo-0.0.1-SNAPSHOT.jar 就是你上传的jar包，替换为jar包的名称
# demo.jar  是你将该jar包重新命名为什么名称，在容器中运行
# expose  该容器暴露的端口是多少，就是jar在容器中以多少端口运行
# entrypoint 容器启动之后执行的命令，java -jar demo.jar  即启动jar

构建镜像
docker build -t mydemo .     #mydemo  构建之后镜像名称
运行容器
docker run -d --name demo -p 8080:8080 mydemo
#-------------jar包部署-------end--------

##（2）构建docker镜像
docker build -f /docker/dockerfile/mycentos -t mycentos:1.1
```

### 镜像启动

```bash
   docker run -p 本机映射端口:镜像映射端口 -d  --name 启动镜像名称 -e 镜像启动参数  镜像名称:镜像版本号

  参数释义：

  -p   本机端口和容器启动端口映射
  -d   后台运行
  --name   容器名称
  -e    镜像启动参数 
```



### 容器操作

**提示：对于容器的操作可使用CONTAINER ID 或 NAMES。**

#### 容器启动

```bash
##新建并启动容器，参数：-i  以交互模式运行容器；-t  为容器重新分配一个伪输入终端；--name  为容器指定一个名称
docker run -i -t --name mycentos

##后台启动容器，参数：-d  已守护方式启动容器
docker run -d mycentos

注意：此时使用"docker ps -a"会发现容器已经退出。这是docker的机制：要使Docker容器后台运行，就必须有一个前台进程。解决方案：将你要运行的程序以前台进程的形式运行。

##启动一个或多个已经被停止的容器
docker start redis

##重启容器
docker restart redis
```

#### 容器进程

```bash
##top支持 ps 命令参数，格式：docker top [OPTIONS] CONTAINER [ps OPTIONS]
##列出redis容器中运行进程
docker top redis

##查看所有运行容器的进程信息
for i in  `docker ps |grep Up|awk '{print $1}'`;do echo \ &&docker top $i; done
```

#### 容器日志

```bash
##查看redis容器日志，默认参数
docker logs rabbitmq

##查看redis容器日志，参数：-f  跟踪日志输出；-t   显示时间戳；--tail  仅列出最新N条容器日志；
docker logs -f -t --tail=20 redis

##查看容器redis从2019年05月21日后的最新10条日志。
docker logs --since="2019-05-21" --tail=10 redis

##实时查看容器日志
docker logs -f 容器id
```

#### 容器的进入和退出

```bash
##使用run方式在创建时进入
docker run -it centos /bin/bash

##关闭容器并退出
exit

##仅退出容器，不关闭
快捷键：Ctrl + P + Q

##直接进入centos 容器启动命令的终端，不会启动新进程，多个attach连接共享容器屏幕，参数：--sig-proxy=false  确保CTRL-D或CTRL-C不会关闭容器
docker attach --sig-proxy=false centos 

##在 centos 容器中打开新的交互模式终端，可以启动新进程，参数：-i  即使没有附加也保持STDIN 打开；-t  分配一个伪终端
docker exec -i -t  centos /bin/bash

##以交互模式在容器中执行命令，结果返回到当前终端屏幕
docker exec -i -t centos ls -l /tmp

##以分离模式在容器中执行命令，程序后台运行，结果不会反馈到当前终端
docker exec -d centos  touch cache.txt 
```

#### 查看容器

```bash
##查看正在运行的容器
docker ps

##查看正在运行的容器的ID
docker ps -q

##查看正在运行+历史运行过的容器
docker ps -a

##显示运行容器总文件大小
docker ps -s
```

![img](/docker/1659331-20190521132255698-500560462.png)

![img](/docker/1659331-20190521133039811-1994116017.png)

```bash
##显示最近创建容器
docker ps -l

##显示最近创建的3个容器
docker ps -n 3

##不截断输出
docker ps --no-trunc 
```

#### 容器的停止与删除

```bash
##停止一个运行中的容器
docker stop redis

##杀掉一个运行中的容器
docker kill redis

##删除一个已停止的容器
docker rm redis

##删除一个运行中的容器
docker rm -f redis

##删除多个容器
docker rm -f $(docker ps -a -q)
docker ps -a -q | xargs docker rm
## -l 移除容器间的网络连接，连接名为 db
docker rm -l db 
## -v 删除容器，并删除容器挂载的数据卷
```

#### 生成镜像

```bash
##基于当前redis容器创建一个新的镜像；参数：-a 提交的镜像作者；-c 使用Dockerfile指令来创建镜像；-m :提交时的说明文字；-p :在commit时，将容器暂停
docker commit -a="DeepInThought" -m="my redis" [redis容器ID]  myredis:v1.1
```

