---
sidebar: auto
---
## GoLand 控制台输出中文乱码的解决方案

## 第一步 修改goland的settings

>>File-Settings-Editor-File Encodings
红色框框的改成utf-8  然后点ok

![image.png](/upload/2020/08/image-fb3b846a1e854984964252fba566ec91.png)

## 第二步 进入goland的安装目录下面修改
>>在goland.exe.vmoptions和goland64.exe.vmoptions文件末尾
添加-Dfile.encoding=UTF-8
如下图所示
![image.png](/upload/2020/08/image-329d096f1c8c4b51afb0924380f1b0cd.png)

![image.png](/upload/2020/08/image-9551a6fc123740659803ab080dd7ca8e.png)
![image.png](/upload/2020/08/image-5ec6d1db285c4f71bc0d4caf1adf54d6.png)

## 第三步 修改Goland-VM Options
>>点击Goland菜单栏的Help-Edit Custom VM Options，
在打开的文件末尾处添加参数-Dfile.encoding=UTF-8

![image.png](/upload/2020/08/image-62078b66caba4dd0b3a11a6b9199c3cd.png)


## 最后 关闭goland 重启就好了

![image.png](/upload/2020/08/image-ff3f4c13323a4f6d83d0f9da0cd16472.png)


**如果有什么问题请在下面留言**

-----《论神的自我修养》《论凡人为什么不信你》《如果丫不信你怎么让他信你》《如果丫还不信你怎么让他信你》《果断的末日》