---
sidebar: auto
---
## Springboot引用外部jar包并打包成jar程序运行

## 第一步在`src`同级目录新建 lib 名字随意


## 第二步 正常加入jar包  
**eclipse**
::: tip
  在项目下的lib文件夹下右键 -> Bulid Path -> Configure Build Path -> Libraries -> Add External JARs… -> 选择下载jar包的路径 ->添加后Apply一下
::: 
## 第三步 修改pom.xml
::: tip
  pom.xml将每个外部jar包以以下形式依赖进去，groupId、artifactId、version随便写，关键是scop、systemPath要写对，scop写system,systemPath写当前项目路径下的xx/xx.jar
::: 
````xml
<dependency>
            <groupId>com.njusoft</groupId>
            <artifactId>simple</artifactId>
            <version>2.7.1</version>
            <scope>system</scope>
            <systemPath>${project.basedir}/lib_y2/simple-xml-2.7.1.jar</systemPath>
        </dependency>

        <dependency>
            <groupId>com.njusoft</groupId>
            <artifactId>uia-comm</artifactId>
            <version>0.4.0</version>
            <scope>system</scope>
            <systemPath>${project.basedir}/lib_y2/uia-comm-0.4.0.jar</systemPath>
        </dependency>
````
::: tip
  然后记得在 加上includeSystemScope；这样你在build项目的时候,第三方的jar也会被打入到项目中
::: 
````xml
 <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <!--springboot 入口-->
                    <mainClass>com.njusoft.bxy.ServiceLedgatewayBxYApplication</mainClass>
                    <includeSystemScope>true</includeSystemScope>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
````

