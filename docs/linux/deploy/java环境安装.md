---
sidebar: auto
---
## java环境安装
::: warning
首先下载jdk到服务器,并解压，这里我的解压目录为 `/usr/java/jdk1.8.0_211`
:::
```bash
## 编辑配置文件
vim /etc/profile
```
```bash
export JAVA_HOME=/usr/java/jdk1.8.0_211
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib:$CLASSPATH
export JAVA_PATH=${JAVA_HOME}/bin:${JRE_HOME}/bin
export PATH=$PATH:${JAVA_PATH}
```
```bash
## 让配置文件生效
source /etc/profile 
```

```bash
## 查看是否成功
java -version
```

 
