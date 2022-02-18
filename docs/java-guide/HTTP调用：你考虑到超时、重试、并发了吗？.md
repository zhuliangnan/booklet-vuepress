## HTTP调用：你考虑到超时、重试、并发了吗？


**网络请求必然有`超时`的可能性，因此我们必须考虑到以下三点：**

- 首先，框架设置的`默认超时`是否合理；
- 其次，考虑到网络的不稳定，超时后的`请求重试`是一个不错的选择，但需要考虑服务端接口的`幂等性设计是否允许我们重试`；
- 最后，需要考虑框架是否会像浏览器那样`限制并发连接数`，以免在服务并发很大的情况下，HTTP 调用的`并发数限制`成为瓶颈。

接下来，我们就看看使用 `Feign (SpringCloud中远程调用)` 和 `Apache HttpClient` 进行 HTTP 接口调用时，可能会遇到的超时、重试和并发方面的坑。

### 配置连接超时和读取超时参数的学问
::: tip
 对于 HTTP 调用,底层是TCP协议，面向连接的协议，在传输数据之前需要建立连接。几乎所有的网络框架都会提供这么两个超时参数：

 - 连接超时参数 `ConnectTimeout`，让用户配置`建连阶段`的`最长等待`时间；
 - 读取超时参数 `ReadTimeout`，用来控制从 Socket 上`读取数据`的`最长等待`时间。
::: 
这两个参数的设置一般需要结合客户端和服务端的情况综合考虑

**连接超时一般来说有下面几个误区：**

- `连接超时配置得特别长，比如 60 秒.`一般来说，TCP 三次握手建立连接需要的时间非常短，通常在`毫秒级最多到秒级`，不可能需要十几秒甚至几十秒,这种情况下，如果几秒连接不上，那么可能永远也连接不上。因此，设置特别长的连接超时意义不大,1-5秒就可以了。纯内网调用的话，这个参数可以设置得更短。
- `排查连接超时问题，却没理清连的是哪里.`通常情况下，我们的服务会有多个节点，如果别的客户端通过客户端负载均衡技术来连接服务端，那么客户端和服务端会直接建立连接，此时出现连接超时`大概率是服务端的问题`；而如果服务端通过类似 `Nginx` 的反向代理来负载均衡，`客户端连接的其实是 Ngin`，而不是服务端，此时出现连接超时应该`排查 Nginx`。

**读取超时一般来说有下面几个误区：**

**`第一个误区`：认为出现了读取超时，服务端的执行就会中断**

我们来简单测试下。定义一个 client 接口，内部通过 HttpClient 调用服务端接口 server，客户端读取超时 2 秒，服务端接口执行耗时 5 秒。

```xml
 <dependency>
            <groupId>org.apache.httpcomponents</groupId>
            <artifactId>fluent-hc</artifactId>
            <version>4.5.9</version>
 </dependency>
```

```java
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.apache.http.client.fluent.Request;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("05/01")
@Slf4j
public class ClientReadTimeoutController {
    private String getResponse(String url, int connectTimeout, int readTimeout) throws IOException {
        return Request.Get("http://localhost:8080/05/01" + url)
                .connectTimeout(connectTimeout)
                .socketTimeout(readTimeout)
                .execute()
                .returnContent()
                .asString();
    }

    @GetMapping("client")
    public String client() throws IOException {
        log.info("client1 called");
        //服务端5s超时，客户端读取超时2秒
        return getResponse("/server?timeout=5000", 1000, 2000);
    }

    @GetMapping("server")
    public void server(@RequestParam("timeout") int timeout) throws InterruptedException {
        log.info("server called");
        TimeUnit.MILLISECONDS.sleep(timeout);
        log.info("Done");
    }
}
```

```java
2022-02-07 13:37:06.086  INFO 1896 --- [nio-8080-exec-1] c.z.j.demo1.ClientReadTimeoutController  : client1 called
2022-02-07 13:37:07.532  INFO 1896 --- [nio-8080-exec-3] c.z.j.demo1.ClientReadTimeoutController  : server called
java.net.SocketTimeoutException: Read timed out
	at java.net.SocketInputStream.socketRead0(Native Method) ~[na:1.8.0_251]
	at java.net.SocketInputStream.socketRead(SocketInputStream.java:116) ~[na:1.8.0_251]
	at java.net.SocketInputStream.read(SocketInputStream.java:171) ~[na:1.8.0_251]
    ................................
2022-02-07 13:37:12.532  INFO 1896 --- [nio-8080-exec-3] c.z.j.demo1.ClientReadTimeoutController  : Done
```

调用 client 接口后，从日志中可以看到，客户端 2 秒后出现了 SocketTimeoutException，原因是读取超时，服务端却丝毫没受影响在 3 秒后执行完成。

**`第二个误区`：认为读取超时只是 Socket 网络层面的概念，是数据传输的最长耗时，故将其配置得非常短，比如 100 毫秒。**

其实，发生了`读取超时`，网络层面`无法区分`是`服务端没有把数据返回给客户端`，还是数据在网络上`耗时较久或丢包`。准确的来说：读取超时指的是，向 Socket 写入数据后，我们等到 Socket 返回数据的超时时间，其中包含的时间或者说绝大部分的时间，是`服务端处理业务逻辑的时间`。

**`第三个误区`：认为超时时间越长任务接口成功率就越高，将读取超时参数配置得太长。**

进行 `HTTP 请求`一般是需要获得结果的，属于`同步调用`。如果超时时间很长，在等待服务端返回数据的同时，`客户端线程（通常是 Tomcat 线程）也在等待`，当下游服务出现大量超时的时候，程序可能也会受到拖累创建大量线程，最终崩溃，相信大家也有过这种经历。因此设置读取超时一定要根据实际情况，过长可能会让下游抖动影响到自己，过短又可能影响成功率.

### Feign 和 Ribbon 配合使用，你知道怎么配置超时吗？

你是否尝试过为 Spring Cloud 的 Feign 配置超时参数呢，为 Feign 配置超时参数的复杂之处在于，`Feign 自己有两个超时参数`，它使用的负载均衡组件 `Ribbon 本身还有相关配置`。那么，这些配置的优先级是怎样的，又哪些什么坑呢？接下来，我们做一些实验吧。

为测试服务端的超时，假设有这么一个服务端接口，什么都不干只休眠 10 分钟：

```java
@PostMapping("/server")
public void server() throws InterruptedException {
    TimeUnit.MINUTES.sleep(10);
}
```

首先，定义一个 Feign 来调用这个接口：

```java
@FeignClient(name = "clientsdk")
public interface Client {
    @PostMapping("/feignandribbon/server")
    void server();
}
```

然后，通过 Feign Client 进行接口调用：

```java
@GetMapping("client")
public void timeout() {
    long begin=System.currentTimeMillis();
    try{
        client.server();
    }catch (Exception ex){
        log.warn("执行耗时：{}ms 错误：{}", System.currentTimeMillis() - begin, ex.getMessage());
    }
}
```

在配置文件仅指定服务端地址的情况下：

```properties
clientsdk.ribbon.listOfServers=localhost:8080
```

得到如下输出：

```java
[15:40:16.094] [http-nio-8080-exec-3] [WARN ] [o.g.t.c.h.f.FeignAndRibbonController    :26  ] - 执行耗时：1007ms 错误：Read timed out executing POST http://clientsdk/feignandribbon/server
```

**结论一，默认情况下 Feign 的读取超时是 1 秒，如此短的读取超时算是坑点一。**

我们来分析一下源码。打开 RibbonClientConfiguration 类后，会看到 DefaultClientConfigImpl 被创建出来之后，ReadTimeout 和 ConnectTimeout 被设置为 1s：

```java
/**
 * Ribbon client default connect timeout.
 */
public static final int DEFAULT_CONNECT_TIMEOUT = 1000;

/**
 * Ribbon client default read timeout.
 */
public static final int DEFAULT_READ_TIMEOUT = 1000;

@Bean
@ConditionalOnMissingBean
public IClientConfig ribbonClientConfig() {
   DefaultClientConfigImpl config = new DefaultClientConfigImpl();
   config.loadProperties(this.name);
   config.set(CommonClientConfigKey.ConnectTimeout, DEFAULT_CONNECT_TIMEOUT);
   config.set(CommonClientConfigKey.ReadTimeout, DEFAULT_READ_TIMEOUT);
   config.set(CommonClientConfigKey.GZipPayload, DEFAULT_GZIP_PAYLOAD);
   return config;
}
```

如果要修改 Feign 客户端默认的两个全局超时时间，你可以设置 

`feign.client.config.default.readTimeout` 和 `feign.client.config.default.connectTimeout` 参数：

```properties
feign.client.config.default.readTimeout=3000
feign.client.config.default.connectTimeout=3000
```

修改配置后重试，得到如下日志：

```java
[15:43:39.955] [http-nio-8080-exec-3] [WARN ] [o.g.t.c.h.f.FeignAndRibbonController    :26  ] - 执行耗时：3006ms 错误：Read timed out executing POST http://clientsdk/feignandribbon/server
```

可见，3 秒读取超时生效了。注意：这里有一个大坑，如果你希望只修改读取超时，可能会只配置这么一行：

```properties
feign.client.config.default.readTimeout=3000
```

测试一下你就会发现，这样的配置是无法生效的！

**结论二，也是坑点二，如果要配置 Feign 的读取超时，就必须同时配置连接超时，才能生效。**

打开 FeignClientFactoryBean 可以看到，只有同时设置 ConnectTimeout 和 ReadTimeout，Request.Options 才会被覆盖：

```java
if (config.getConnectTimeout() != null && config.getReadTimeout() != null) {
   builder.options(new Request.Options(config.getConnectTimeout(),
         config.getReadTimeout()));
}
```

更进一步，如果你希望针对单独的 Feign Client 设置超时时间，可以把 default 替换为 Client 的 name：

```properties
feign.client.config.default.readTimeout=3000
feign.client.config.default.connectTimeout=3000
feign.client.config.clientsdk.readTimeout=2000
feign.client.config.clientsdk.connectTimeout=2000
```

**结论三，单独的超时可以覆盖全局超时，这符合预期，不算坑：**

```java
[15:45:51.708] [http-nio-8080-exec-3] [WARN ] [o.g.t.c.h.f.FeignAndRibbonController    :26  ] - 执行耗时：2006ms 错误：Read timed out executing POST http://clientsdk/feignandribbon/server
```

**结论四，除了可以配置 Feign，也可以配置 Ribbon 组件的参数来修改两个超时时间。这里的坑点三是，参数首字母要大写，和 Feign 的配置不同。**

```properties
ribbon.ReadTimeout=4000
ribbon.ConnectTimeout=4000
```

可以通过日志证明参数生效：

```java
[15:55:18.019] [http-nio-8080-exec-3] [WARN ] [o.g.t.c.h.f.FeignAndRibbonController    :26  ] - 执行耗时：4003ms 错误：Read timed out executing POST http://clientsdk/feignandribbon/server
```

最后，我们来看看同时配置 Feign 和 Ribbon 的参数，最终谁会生效？如下代码的参数配置：

```properties
clientsdk.ribbon.listOfServers=localhost:8080
feign.client.config.default.readTimeout=3000
feign.client.config.default.connectTimeout=3000
ribbon.ReadTimeout=4000
ribbon.ConnectTimeout=4000
```

日志输出证明，最终生效的是 Feign 的超时：

```java
[16:01:19.972] [http-nio-45678-exec-3] [WARN ] [o.g.t.c.h.f.FeignAndRibbonController    :26  ] - 执行耗时：3006ms 错误：Read timed out executing POST http://clientsdk/feignandribbon/server
```

**结论五，同时配置 Feign 和 Ribbon 的超时，以 Feign 为准**

### 你是否知道 Ribbon 会自动重试请求呢？

翻看 Ribbon 的源码可以发现，MaxAutoRetriesNextServer 参数默认为 1，也就是 `Get` 请求在某个服务端节点出现问题（比如读取超时）时，Ribbon 会自动重试一次：

```java
// DefaultClientConfigImpl
public static final int DEFAULT_MAX_AUTO_RETRIES_NEXT_SERVER = 1;
public static final int DEFAULT_MAX_AUTO_RETRIES = 0;

// RibbonLoadBalancedRetryPolicy
public boolean canRetry(LoadBalancedRetryContext context) {
   HttpMethod method = context.getRequest().getMethod();
   return HttpMethod.GET == method || lbContext.isOkToRetryOnAllOperations();
}

@Override
public boolean canRetrySameServer(LoadBalancedRetryContext context) {
   return sameServerCount < lbContext.getRetryHandler().getMaxRetriesOnSameServer()
         && canRetry(context);
}

@Override
public boolean canRetryNextServer(LoadBalancedRetryContext context) {
   // this will be called after a failure occurs and we increment the counter
   // so we check that the count is less than or equals to too make sure
   // we try the next server the right number of times
   return nextServerCount <= lbContext.getRetryHandler().getMaxRetriesOnNextServer()
         && canRetry(context);
}
```

```properties
## 将接口改成POST或者增加以下配置可以防止get请求的重试
ribbon.MaxAutoRetriesNextServer=0
```

