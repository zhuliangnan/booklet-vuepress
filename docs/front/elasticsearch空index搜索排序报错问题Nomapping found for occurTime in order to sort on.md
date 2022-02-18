---
sidebar: auto
---
##  elasticsearch空index搜索排序报错问题Nomapping found for occurTime in order to sort on.md
### 报错
::: danger
 No mapping found for [occurTime] in order to sort on
:::
### 原因分析
::: tip
 问题描述很清楚 在排序中没有找到 occurTime 类型，所以没有办法排序。
这可能是因为你只是创建了索引,一点数据没有,就开始排序.或者虽然指定了_defult_ mapping但根本没有初始化
解决办法
1.添加数据
2.忽略要排序的字段类型
3.设置默认的要排序的字段类型
::: 

### 解决

- 在命令中解决

排序代码如下：
````json
{ "sort": [ { "timestamp": { "order": "desc" } } ] }
````
修改后：
````json
{ "sort": [ { "timestamp": { "order": "desc", "ignore_unmapped": true } } ] }
````

- 代码解决
::: tip
 在排序代码中加上 unmappedType("date")  date为类型  用于设置默认的类型 
::: 
````java
SortBuilders.fieldSort("occurTime").order(SortOrder.ASC).unmappedType("date")
````

**如果有什么问题请在下方留言**

-----不管那里有多大，哪怕是一座真正的皇宫都没意义真正的家，只要有大家在一起的三室一厅就够了。

