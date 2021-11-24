## range的使用

## 前言
::: tip
这里我们来学习一下range，在for循环中可以迭代 array、slice、map、channel、字符串及所有涉及到遍历输出的东西。

range没有什么好说，主要就是熟悉代码和提高迭代性能，大家把代码手敲下来自己运行一遍
::: 


````go
package main

import "fmt"

func main() {

	//切片迭代
	fmt.Println("----切片迭代----")
	nums := []int{1, 2, 3, 4, 5, 6}
	for k, v := range nums {
		nums[k] = 9
		fmt.Printf("key : %v  value:  %v  \n", k, v)
	}
	fmt.Println("----切片迭代过程中修改nums的值 结果----")
	for k1 , v1 := range nums{
		fmt.Printf("key : %v  value:  %v  \n", k1, v1)
	}
	//这和迭代方式非常适合用for-range语句，如果减少赋值，直接索引num[key]可以减少损耗。如下
	// for k, _:= range nums

	fmt.Println("----map迭代----")
	//map 迭代
	//注意，从 Go1开始，遍历的起始节点就是随机了。  参考 java 里面的 map
	kvs := map[string]string{
		"name": "zhu",
		"sex":  "男",
	}

	for mk, mv := range kvs {
		fmt.Printf(" mk : %v  mv : %v \n", mk, mv)
	}

	//在以前的函数中for-range语句中只获取 key 值，然后跟据 key 值获取 value 值，虽然看似减少了一次赋值，但通过 key 值查找 value 值的性能消耗可能高于赋值消耗。
	//所以能否优化取决于 map 所存储数据结构特征、结合实际情况进行。

	fmt.Println("----字符串迭代----")
	for sk, sv := range "hello world" {
		//注意这里单个字符输出的是ASCII码，
		//用 %c 代表输出字符
		fmt.Printf(" sk : %v  sv : %c  \n", sk, sv)
	}

	fmt.Println("----channel迭代----")
	//channel （如果不会可以先 mark 下，详细参考后续：go 的并发特性章节）
	ch := make(chan int, 10)
	ch <- 11
	ch <- 12

	close(ch) // 不用的时候记得关掉,不关掉又没有另一个goroutine存在会死锁哦，可以注释掉这一句体验死锁

	for x := range ch {
		fmt.Println(x)
	}

	fmt.Println("----结构体迭代----")
	people := []struct {
		string
		int
	}{
		{"zhu", 20},
		{"nan", 30},
	}

	for tk, tv := range people {
		fmt.Printf("tk : %v   tv : %v  \n", tk, tv)
	}
	//注意：由于循环开始前循环次数就已经确定了，所以循环过程中新添加的元素是没办法遍历到的。
	//由于range遍历时value是值的 **拷贝**，如果这个时候遍历声明的结构体时，修改value，原结构体不会发生任何变化！
	for _, v := range people {
		v.string = "li"
		v.int = 30
		//你这里修改的 只是拷贝的值
		fmt.Printf("打印修改拷贝的值 v : %v  \n", v)
	}
	//在这里可以看到 值没有被修改
	for _, v := range people {
		fmt.Printf(" v : %v  \n", v)
	}

}


````
结果
````go
----切片迭代----
key : 0  value:  1  
key : 1  value:  2  
key : 2  value:  3  
key : 3  value:  4  
key : 4  value:  5  
key : 5  value:  6  
----切片迭代过程中修改nums的值 结果----
key : 0  value:  9  
key : 1  value:  9  
key : 2  value:  9  
key : 3  value:  9  
key : 4  value:  9  
key : 5  value:  9  
----map迭代----
 mk : name  mv : zhu 
 mk : sex  mv : 男 
----字符串迭代----
 sk : 0  sv : h  
 sk : 1  sv : e  
 sk : 2  sv : l  
 sk : 3  sv : l  
 sk : 4  sv : o  
 sk : 5  sv :    
 sk : 6  sv : w  
 sk : 7  sv : o  
 sk : 8  sv : r  
 sk : 9  sv : l  
 sk : 10  sv : d  
----channel迭代----
11
12
----结构体迭代----
tk : 0   tv : {zhu 20}  
tk : 1   tv : {nan 30}  
打印修改拷贝的值 v : {li 30}  
打印修改拷贝的值 v : {li 30}  
 v : {zhu 20}  
 v : {nan 30}  

Process finished with exit code 0


````


----- 莫慌，供水局不会忘记你，供电局不会忘记你，燃气公司不会忘记你，就连联通公司跟卖保险的都不会忘记你，有如此多的人时刻挂念着身处远郊的你，还有啥不开心的……