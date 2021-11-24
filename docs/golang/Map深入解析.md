## Map深入解析

## 前言
::: tip
 Map 哈希表是一种巧妙并且实用的数据结构。它是一个**无序**的key/value对的集合，其中所有的key都是不同的，在Go语言中，map类型可以写为**map[K]V** ，key和value之间可以是不同的数据类型。其中K对应的key必须是**支持==比较运算符的数据类型** ,必须要**申请空间**，所有的引用类型都要这么做.
::: 
补充：
````go
### 那些数据类型可以比较 即 那些数据类型可以作为map的key
基本类型---都可以比较
数组/struct---如果其元素类型可以比较，则数组/struct是可以比较的。即两个长度相同且对应位置元素都相等的数组/struct是相等的。
切片---仅可以与nil比较(这个我们上一节详细探讨过)
map---仅可以与nil比较,其中K对应的key必须是支持==比较运算符的数据类型
chan---同种类型的通道可以使用==比较，指向同一个通道的引用比较值为true；通道也可以和nil比较
````
## Map
map 是一种引用类型，初值是nil,定义时必须用make来创建，否则会报错

### Map的两种创建方法及普通操作
- 内置的make函数可以创建一个map
````go
	ages := make(map[string]int)
````
- 我们也可以用map字面值的语法创建map，同时还可以指定一些最初的key/value
````go
	ages := map[string]int{
		"alice" : 14,
		"charlie" : 23,
	}

	fmt.Println(ages) // map[alice:14 charlie:23]

````
这相当于
````go
	ages := make(map[string]int)
	ages["alice"] = 14
	ages["charlie"] = 23
	for k, v := range ages {
		fmt.Printf("k=%s v=%d\n", k, v)
	}
        
````
结果
````go
k=alice v=14
k=charlie v=23
````

Map中的元素通过key对应的下标语法访问
````go
	ages := make(map[string]int)
	ages["alice"] = 14
	ages["charlie"] = 23
	fmt.Println(ages) // map[alice:14 charlie:23]
	ages["alice"] = 29
	fmt.Println(ages) // map[alice:29 charlie:23]
````

使用内置的delete函数可以删除元素
````go
	ages := make(map[string]int)
	ages["alice"] = 14
	ages["charlie"] = 23
	fmt.Println(ages)  // map[alice:14 charlie:23]
	ages["alice"] = 29
	fmt.Println(ages)  // map[alice:29 charlie:23]

	delete(ages,"alice") 	// remove element ages["alice"]
	fmt.Println(ages) // map[charlie:23]
 
````
好了，到这里你已经基本学会map的基本操作了。下面我们来看一下map的注意点。
### Map值得注意的地方
- 还记得我们上一节对于切片谈到过，空的切片也是安全的，也可以进行所有切片的操作我们应该一视同仁，同样map也是如此
如果一个查找失败将返回 value类型对应的零值，例如，即使map中不存在“bob”下面的代码也可以正常工作，因为 ages["bob"]失败时将返回0。(注意ages我已经在上面的代码初始化过了，这里截取部分代码)

````go
	fmt.Println(ages["bob"]) // 0
	ages["bob"] = ages["bob"] + 1
	fmt.Println(ages["bob"]) // 1
````
而且 x+=y 和 x++ 等简短赋值语法也可以用在map上，所以上面的代码可以改写成
````go
	ages["bob"] += 1
	//更简单可以写成
	ages["bob"]++
	fmt.Println(ages["bob"]) // 2
````
思考： ages["bob"] = ages["bob"]++ 可不可以呢？ 可以参照 [Go 语言系列教程(二) : Go的数据类型以及变量声明](http://www.codesuger.com/archives/go%E8%AF%AD%E8%A8%80%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%E4%BA%8Cgo%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E4%BB%A5%E5%8F%8A%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E) 

- 未初始化的map可以拿来操作吗？答案是除了赋值其他操作都可以。
````go
	fmt.Println("----------未初始化的map---------")
	var names map[string]int
	fmt.Println(names == nil) // true
	fmt.Println(len(names) == 0) // true
	names["alice"] = 12 // panic: assignment to entry in nil map
	fmt.Println("----------初始化的map---------")
	sexs := make(map[string]int)
	fmt.Println(sexs == nil) // false
	fmt.Println(len(sexs) == 0) // true
````

### Map的比较
::: tip
还记得上一节我们说过切片处理和nil比较之外不能直接比较，因为其内存地址可能会变，同样想要实现map的比较我们也得借助一个循环实现
::: 
````go
func equal(x, y map[string]int) bool {
	if len(x) != len(y) {
		return false
	}
	for k, xv := range x {
		if yv, ok := y[k]; !ok || yv != xv {
			return false
		}
	}
	return true
}
````
解释： yv, ok := y[k];   ok这个位置赋值的是操作的结果 true / false
if yv, ok := y[k]; !ok || yv != xv 这种写法也是go语言允许的，先初始化在判断。

### Map的排序输出
::: tip
遍历的顺序是随机的，每一次遍历的顺序都不相同。如果要按排序遍历key/value对，我 们必须显式地对key进行排序，可以使用sort包的Strings函数对字符串slice进行排序。下面是 常见的处理方式
::: 
````go
package main

import (
	"fmt"
	"sort"
)

func main() {

	ages := map[string]int{}
	ages["charlie"] = 23
	ages["jack"] = 16
	ages["tom"] = 19
	ages["yom"] = 27
	ages["bili"] = 20
	ages["alice"] = 14
	var names []string //声明一个字符串切片，存储map的key值
	for name := range ages {
		names = append(names, name)
	}
	sort.Strings(names) //根据map的key排序
	for _, name := range names {
		fmt.Printf("%s\t%d\n", name, ages[name])
	}

}

````
结果
````go
alice	14
bili	20
charlie	23
jack	16
tom	19
yom	27
````
### Map的并发
::: tip
 Go中的map在并发读的时候没问题，但是并发写就不行了（线程不安全），会发生竞态问题。
::: 
所以有一个叫sync.Map的封装数据结构供大家使用，简单用法如下：
- 定义和存储
````go
	var scene sync.Map
	scene.Store("name", "coding3min")
	scene.Store("age", 11)
````
- 取值
````go
	v, ok := scene.Load("name")
	if ok {
		fmt.Println(v)
	}
	v, ok = scene.Load("age")
	if ok {
		fmt.Println(v)
	}

````
结果
````go
coding3min
11
````
- 删除和遍历
````go
	scene.Delete("age")

	scene.Range(func(key, value interface{}) bool {
		fmt.Println("key:",key,",value:",value)
		return true
	})

````
结果
````go
key: name ,value: coding3min
````


----科技臻于完美，则使用愈发简单，复杂的东西都会被封装在使用者看不到的地方。

生活果然比小说精彩，因为生活压根不讲合理性！




