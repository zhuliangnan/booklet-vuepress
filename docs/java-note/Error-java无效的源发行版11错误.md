---
sidebar: auto
---
## Error-java无效的源发行版11错误

### 第一步将JDK版本改为相同版本

快捷键ctrl+shift+alt+s,将JDK版本改为相同版本：

project setting>>project>>

![image.png](/upload/2020/10/image-059057ed71a34d04a99457c3ea6e7482.png)

### 第二步修改SDK版本
project setting>>modules>>dependencies>>module SDK 
![image.png](/upload/2020/10/image-bab4ff6cbb0248a185788260f6cdfa24.png)

### 第二步修改Language Level
![image.png](/upload/2020/10/image-82e3f1676297483fba77ec350d3fb94d.png)

### 如果以上还不能解决  最后修改 因该就可以了
file>>settings>>build,execution,deployment>>compiler>>java compiler 
![image.png](/upload/2020/10/image-c194617e9c134ceb88287149e71d4cd6.png)

### 还可以检查一下JRE
![image.png](/upload/2020/10/image-a440f939b97e437aa967bbeca49fe01a.png)

![image.png](/upload/2020/10/image-eeb908c019c549ae8cf1c16ccf4fb9e3.png)

----世界太大，我们太小……