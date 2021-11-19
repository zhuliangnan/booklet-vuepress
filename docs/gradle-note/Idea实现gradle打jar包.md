---
sidebar: auto
---
## Idea实现gradle打jar包

## 序言
>> 最近因为项目需要，需要给gradle打jar包，当然不像maven那么好操作，这边记录一下。

## 第一步 
>> 我们这里使用shadow插件打包，需要在build.gradle 文件里面添加如下内容
1.注意插件的位置
2.注意run.halo.app.Application需要更改为你自己的项目入口
这里附上一张项目结构图 防止小伙伴不知道自己项目路径怎么看
![image.png](/upload/2020/08/image-1ad3431784584b9ea11c0221acc3b183.png)

````
buildscript {
    repositories {
        maven {
            url "https://plugins.gradle.org/m2/"
        }
    }
    dependencies {
        classpath "com.github.jengelman.gradle.plugins:shadow:2.0.1"
    }
}

--------------这个不要复制 start---------------
plugins {
    id "org.springframework.boot" version "2.3.1.RELEASE"
    id "io.spring.dependency-management" version "1.0.9.RELEASE"
    id "checkstyle"
    id "java"
}
--------------这个不要复制 end---------------

apply plugin: "com.github.johnrengelman.shadow"


jar {
    manifest {
        attributes('Main-Class': 'run.halo.app.Application')
    }

}
````

## 第二步 
**点击右侧的 Gradle->build**
>> ![image.png](/upload/2020/08/image-2c2d51a0bb1b4670925312bd6ad69f8e.png)

**查看打包好的jar包**
>>![image.png](/upload/2020/08/image-5033b6255b0643499da071c143aa60dd.png)

**如果还有什么问题请在下方留言**

-----我觉得，促使人类进步的可能是竞争，促使科学进步的可能是懒惰，但促使娱乐业进步的，绝对是无聊。