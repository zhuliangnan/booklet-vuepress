## Go的接口及Go中标准接口库,类型断言的使用

## 前言
>>很多面向对象的语言都有相似的接口概念，但Go语言中接口类型的独特之处在于它是满足隐式实现的,不需要像 java 那样 implements interface 写出来

### 接口的实现和使用
>>一个类型如果拥有一个接口需要的**所有方法**，那么这个类型就实现了这个接口。

摘录-菜鸟编程
````go
/* 定义接口 */
type interface_name interface {
   method_name1 [return_type]
   method_name2 [return_type]
   method_name3 [return_type]
   ...
   method_namen [return_type]}

/* 定义xxx数据结构类型 */
type struct_name xxx

/* 实现接口方法 */
func (struct_name_variable struct_name) method_name1() [return_type] {
   /* 方法实现 */}
    ...
func (struct_name_variable struct_name) method_namen() [return_type] {
   /* 方法实现*/}
````
一个案例
````go
package main

import "fmt"

type Animal interface {
	run() string
	fly() string
	eat() string
}

//定义结构体
type Dog struct {
	name string
	age  int
}

func (dog Dog) fly() string {
	fmt.Println("Dog's name is", dog.name, "He cannot fly.Because he is dog,dog cannot fly ")
	return ""
}

//实现接口
func (dog Dog) run() string {
	fmt.Println("Dog's name is", dog.name, "He can run. He is", dog.age, "岁了")
	return ""
}
func (dog Dog) eat() string {
	fmt.Println("Dog's name is", dog.name, "He can eat. He is", dog.age, "岁了")
	return ""
}

func main() {
	var animal Animal
	dog := Dog{"dog", 12}
	animal = dog
	animal.run()
	animal.eat()
	animal.fly()
}

````
结果
````go
Dog's name is dog He can run. He is 12 岁了
Dog's name is dog He can eat. He is 12 岁了
Dog's name is dog He cannot fly.Because he is dog,dog cannot fly 
````

### 接口的多态
````go
package main

import "fmt"

type Animal interface {
	fly() string
}

//定义结构体
type Dog struct {
	name string
	age  int
}

//定义结构体
type Bird struct {
	name string
	age  int
}

//一个以接口为参数的函数
func animalFly(animal Animal)  {
	animal.fly()
}

func (dog Dog) fly() string {
	fmt.Println("Dog's name is", dog.name, "He cannot fly.Because he is dog,dog cannot fly ")
	return ""
}

func (bird Bird) fly() string {
	fmt.Println("Bird's name is", bird.name, "she can fly.Because he is bird,bird can fly ")
	return ""
}

func main() {
	dog := Dog{"dog", 12}
	bird := Bird{"bird",10}
	animalFly(dog)
	animalFly(bird)
}

````
结果
````go
Dog's name is dog He cannot fly.Because he is dog,dog cannot fly 
Bird's name is bird she can fly.Because he is bird,bird can fly
````
### 接口的嵌入
>>Go语言的接口对嵌入支持的非常好，接口可以嵌入其他的接口，效果就像在接口中 直接添加被嵌入接口的方法一样。
````go
type Dog interface {
   run()
}
type Bird interface {
   fly()
}

type Animal interface {
   Dog 
   Bird 
}
````

以上两个案例并不难，大家看完也就基本明白接口的一般操作了。
### Go中标准的接口库
- **fmt.Stringer 接口**
>> 格式化打印 
````go
// Stringer is implemented by any value that has a String method,
// which defines the ``native'' format for that value.
// The String method is used to print values passed as an operand
// to any format that accepts a string or to an unformatted printer
// such as Print.
type Stringer interface {
   String() string
}
````

````go
package main

import "fmt"

type Dog struct {
	name string
	age  int
}

func (dog Dog)String()string  {
	return fmt.Sprintf("%s---%v",dog.name,dog.age)

}
func main() {
	fmt.Println(Dog{"dog",12})  // dog---12
}

````

- **sort.Interface 接口**
>>Go语言的sort.Sort函数使用了一个接口类型sort.Interface来指定通用的排序算法和可能被排序到的序列类型之间的约定

````go
package sort

type Interface interface {
	Len() int
	Less(i,j int) bool
	Swap(i, j int)
}
````

此案例来自 [go 语言中文网--linkanyway] https://studygolang.com/articles/15235?fr=sidebar
````go
package main

import (
	"fmt"
	"sort"
	"time"
)

type Track struct {
	Title  string
	Artist string
	Album  string
	Year   int
	Length time.Duration
}

type Tracks []Track

func ParseDurationTime(s string) time.Duration {
	d, err := time.ParseDuration(s)
	if err != nil {
		return ParseDurationTime("0s")
	} else {
		return d
	}
}

// {{{ implementation of Sort interface
// Len is the number of elements in the collection.
func (x Tracks) Len() int {
	return len(x)
}

// Less reports whether the element with
// index i should sort before the element with index j.
func (x Tracks) Less(i, j int) bool {
	return x[i].Year < x[j].Year
}

// Swap swaps the elements with indexes i and j.
func (x Tracks) Swap(i, j int) {
	x[i], x[j] = x[j], x[i]
}

// end implementation of Sort interface }}}

var tracks = Tracks{
	{Title: "C#", Artist: "Delu", Album: "Reading", Year: 2017, Length: ParseDurationTime("3m38s")},
	{Title: "Go", Artist: "Anderson", Album: "Reading", Year: 2018, Length: ParseDurationTime("3m38s")},

	{Title: "Java Bible", Artist: "Js", Album: "Reading", Year: 2016, Length: ParseDurationTime("3m38s")}}

//main function
func main() {

	sort.Sort(tracks)

	for key, value := range tracks {
		fmt.Printf("%v:%v \n", key, value)
	}
}
````
结果
````go
0:{Java Bible Js Reading 2016 3m38s} 
1:{C# Delu Reading 2017 3m38s} 
2:{Go Anderson Reading 2018 3m38s} 
````
- **errors.error 接口**

>> 调用errors.New函数是非常稀少的，因为有一个方便的封装函数fmt.Errorf，它还会处理字符串格式化
创建一个error最简单的方法就是调用errors.New函数，它会根据传入的错误信息返回一个新 的error。整个errors包仅只有4行：
````go
package errors

// New returns an error that formats as the given text.
// Each call to New returns a distinct error value even if the text is identical.
func New(text string) error {
	return &errorString{text}
}

// errorString is a trivial implementation of error.
type errorString struct {
	s string
}

func (e *errorString) Error() string {
	return e.s
}

````
### Go中类型断言
**断言类型的语法:**  x.(T)，这里x表示一个接口的类型，T表示一个类型（也可为接口类型）。
有两种可能
- 第一种，如果断言的类型T是一个具体类型，然后类型断言检查x的动态类 型是否和T相同。如果这个检查成功了，类型断言的结果是x的动态值，当然它的类型是T。换 句话说，具体类型的类型断言从它的操作对象中获得具体的值。如果检查失败，接下来这个 操作会抛出panic。例如：
案例来自 -- the go program language
````go
	var w io.Writer
	w = os.Stdout
	f := w.(*os.File) // success f == os.Stdout
	c := w.(*byte.Buffer) //  panic: interface holds *os.File, not *bytes.Buffer
````
- 第二种，如果断言的类型T是一个接口类型，类型断言x.(T)检查x的动态类型是否满足T接口。如果这个检查成功，则检查结果的接口值的动态类型和动态值不变，但是该接口值的类型被转换为接口类型T。换句话说，对一个接口类型的类型断言改变了类型的表述方式，改变了可以获取的方法集合（通常更大），但是它保护了接口值内部的动态类型和值的部分。
如果检查失败，接下来这个操作会抛出panic，除非用两个变量来接收检查结果，如：f, ok := w.(io.ReadWriter)
````go
	var w io.Writer
	w = os.Stdout
	rw := w.(io.ReadWriter) // success:	*os.File has both Read and	Write
	w = new(ByteCounter)
	rw = w.(io.ReadWriter) // panic: *ByteCounter has no	Read method
````
Tip：如果断言的操作对象x是一个nil接口值，那么不论被断言的类型T是什么这个类型断言都会失败。


````go
package main

import (
	"fmt"
)

//===接口=====
type Tester interface {
	getName() string
}
type Tester2 interface {
	printName()
}

//===Person类型====
type Person struct {
	name string
}

func (p Person) getName() string {
	return p.name
}
func (p Person) printName() {
	fmt.Println(p.name)
}

//============
func main() {

	var t Tester
	t = Person{"xiaohua"}
	check(t)
}
func check(t Tester) {
	//第一种情况
	if f, ok1 := t.(Person); ok1 {
		fmt.Printf("%T  %s\n", f, f.getName())
	}
	//第二种情况
	if t, ok2 := t.(Tester2); ok2 { //重用变量名t（无需重新声明）
		check2(t) //若类型断言为true，则新的t被转型为Tester2接口类型，但其动态类型和动态值不变
	}
}
func check2(t Tester2) {
	t.printName()
}

````
结果
````go
main.Person  xiaohua
xiaohua
````

----电视上那些甩门而去的不锁门是因为他们基本上回不来，所以我从不看电视剧，光看台词我都能猜着谁在第几集死。




