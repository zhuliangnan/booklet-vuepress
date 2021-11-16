---
sidebar: auto
---

## Go语言生成二维码

## 前言
转载 https://www.flysnow.org/2017/09/29/go-qrcode.html

生活种避免不了使用二维码的应用场景，那么我们如何使用go语言动态生成二维码呢
>>使用Go语言编程时，生成任意内容的二维码是非常方便的，因为我们有go-qrcode这个库。该库的源代码托管在github上，大家可以下载使用 https://github.com/skip2/go-qrcode。

### 简单版
````go
package main

import "github.com/skip2/go-qrcode"

func main() {

	qrcode.WriteFile("/",qrcode.Medium,256,"./blog_qrcode.png")

}

````
WriteFile函数的原型定义如上，它有几个参数，大概意思如下：

- content表示要生成二维码的内容，可以是任意字符串。
- level表示二维码的容错级别，取值有Low、Medium、High、Highest。
- size表示生成图片的width和height，像素单位。
- filename表示生成的文件名路径。
在当前目录下，生成一张256*256的二维码，扫描后可以看到内容是 /

![image.png](/upload/2020/10/image-933b3df5f6464c8e98cb19c2c5d0cf33.png)

### 生成二维码图片字节
>>有时候我们不想直接生成一个PNG文件存储，我们想对PNG图片做一些处理，比如缩放了，旋转了，或者网络传输了等，基于此，我们可以使用Encode函数，生成一个PNG 图片的字节流，这样我们就可以进行各种处理了。
````go
func Encode(content string, level RecoveryLevel, size int) ([]byte, error)
````
用法和`WriteFile`函数差不多，只不过返回的是一个[]byte字节数组，这样我们就可以对这个字节数组进行处理了。

### 自定义二维码

除了以上两种快捷方式，该库还为我们提供了对二维码的自定义方式，比如我们可以自定义二维码的前景色和背景色等。qrcode.New函数可以返回一个 `*QRCode`，我们可以对*QRCode设置，实现对二维码的自定义。

比如我们设置背景色为绿色，前景色为白色的二维码

````go
package main

import (
	"github.com/skip2/go-qrcode"
	"image/color"
	"log"
)

func main() {
	qr , err := qrcode.New("/",qrcode.Medium)
	if err != nil {
		log.Fatal(err)
	}else {
		qr.BackgroundColor = color.RGBA{50,205,50,255}
		qr.ForegroundColor = color.White
		qr.WriteFile(256,"./zidingy.png")
	}

}

````
![image.png](/upload/2020/10/image-c75e0dd3a11f4434a8b572f90dfa0738.png)


有什么问题欢迎在下面留言

----人真应该珍惜眼前的一切——哪怕是你已经看腻了的这些东西，说不准哪天就没了

