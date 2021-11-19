---
sidebar: auto
---
## fastjson基本使用
::: tip
导包
::: 
````xml
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>1.2.39</version>
        </dependency>
````
````java
import com.alibaba.fastjson.JSON;
````
- 对象转string
````java
String strign = JSONObject.toJSONString(T);
````
- string转对象
````java
T t = JSONObject.parseObject(pojo, T.tclass);
````
- Lits转String
````java
String jsons = JSON.toJSONString(tList);
````
- String 转list
````java
List<T> list = JSONArray.parseArray(string, T.class);
````
- String转json
````java
JSONObject jsonObject = JSON.parseObject(string);
````
