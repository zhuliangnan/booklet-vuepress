---
sidebar: auto
---
## java环境安装

```bash
vim /etc/profile

export JAVA_HOME=/usr/java/jdk1.8.0_211
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib:$CLASSPATH
export JAVA_PATH=${JAVA_HOME}/bin:${JRE_HOME}/bin
export PATH=$PATH:${JAVA_PATH}


source /etc/profile 让配置文件生效

java -version 查看是否成功
```
