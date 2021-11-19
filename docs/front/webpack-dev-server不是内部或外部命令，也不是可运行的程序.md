---
sidebar: auto
---
![image.png](/upload/2020/10/image-ec1e3dbca1ca4325ae5157d9c2e96e2c.png)

在终端使用管理员运行
不然你可能遇到  npm 报错 -4048

对于vscode而言你只需要勾选`以管理员身份运行此程序`

![image.png](/upload/2020/10/image-5243ff17e975405e96f2580a13861af0.png)

- 卸载webpack-dev-server 重现安装稳定版本
````bash
npm remove webpack-dev-server
npm install webpack-dev-server@2.9.1
````
- 到项目的根目录下 删除 node_modules
![image.png](/upload/2020/10/image-ddcb5591567549028ad5332976e66ff3.png)

- 然后使用 `npm install` 重新生成 
````bash
npm install
````
- 最后运行
````bash
npm run dev
````
![image.png](/upload/2020/10/image-0f290facdea84166b60e97708f389994.png)


*有什么问题请在下面留言*

----王质烂柯的故事大家都听过，但故事里貌似没讲那个让仙人坑掉百年光阴的倒霉蛋后来是怎么补的身份证……