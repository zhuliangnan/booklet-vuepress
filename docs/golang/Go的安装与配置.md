## Go的安装与配置

## 下载Go

[^下载地址] : https://golang.google.cn/dl/
[^官网(翻墙)]: https://golang.org/dl/

下载完成后，运行.msi文件，然后按照指示进行安装

安装完毕后按Win+R，输入“cmd”打开命令提示符

```css
go version	#查看Go的版本
go env		#查看Go的环境变量
```

## 环境变量配置

**右击我的电脑 >> 属性 >> 高级系统设置 >> 高级 >> 环境变量**

- GOPATH：工作目录  这个自己选择
- GOROOT：安装目录

![image.png](/upload/2020/08/image-0cc93bbf47fb4bf4a2b3fc9d9868a43f.png)

![image.png](/upload/2020/08/image-4ac8a694c4374c15a59f88e2e13cad4d.png)

这里要注意一下：默认安装完后可能会在 **用户变量** 给你自动创建 GOPATH 工作目录，会导致你就算在 **环境变量** 设置了GOPATH

用go env查看时会不改变，所以把这个 **用户变量 ** 里面的GOPATH 给删掉防止覆盖你后来创建的。

GOROOT：安装目录 一般默认不用

**如果有什么问题请在下方留言**

-----技术宅拯救世界，八卦女毁灭时空，古人诚不欺我...

