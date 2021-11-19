---
sidebar: auto
---
## Docker时间与linux不一致

## 1.Docker时间与linux不一致，java项目获取时间也不对
::: tip
老板：这个项目需要部署一下

我：妥
。。。。一顿操作猛如虎

上传jar->创建Dockerfile->打镜像->启动

。。。。一个星期后

同事：你的代码取到的时间怎么不对

还是不慌 查一下系统时间date 进入容器再看一下docker时间，果然不一致

不慌不忙百度一下
:::

两种解决方案
1.启动时使用-v挂载本地时间
````bash
docker run -ti -d --name 容器名字 -v /etc/localtime:/etc/localtime:ro  镜像名字  /bin/bash
````
2.复制主机的localtime
````bash
docker cp /etc/localtime 容器ID:/etc/localtime
docker restart 容器ID
````
可能会报错
::: danger
Error response from daemon: Error processing tar file(exit status 1): invalid symlink "/etc/localtime" -> "../usr/share/zoneinfo/Asia/Shanghai"
::: 
成功解决
````bash
docker cp /usr/share/zoneinfo/Asia/Shanghai 容器ID:/etc/localtime
docker restart 容器ID
````
在确认一下linux和容器的时间
::: tip
我：已妥
同事：ok
。。。。。两小时后
同事：还是不对
我：眉毛一皱，不太妙
百度，Google起来
::: 

问题原因：jre是通过/etc/timezone 配置文件读取本地时间的
接着我修改了/etc/timezone配置命令如下： 
````bash
docker exec -it 容器ID bash
echo "Asia/Shanghai" > /etc/timezone
docker restart 容器ID
````
重启了下容器，然后java项目中读取的时区恢复正常了
