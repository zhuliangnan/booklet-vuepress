---
sidebar: auto
---
## 基于Spring Aop实现用户操作日志监控

## 前言
>> 大家在平时做项目的时候，习惯于记录系统日志，出错去查看系统日志而对于用户具体做了什么操作无法知道，这篇我将用Aop实现一下简单的用户操作日志监控，抛砖引玉。大家稍微修改一下就可以用在项目中了。项目我已经上传到github

https://github.com/zhuliangnan/userOperationLog/tree/master

- 备注：建表语句在 resources/sql/test.sql

### 对于核心类的说明




OperLogAspect.Java
>>Aop切片类 里面注释写的很完整
````java
package com.zln.zcar.cms.utils.aop;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.zln.zcar.cms.utils.GetRequestJsonUtils;
import com.zln.zcar.cms.utils.IPUtil;
import com.zln.zcar.cms.utils.annotation.OperLog;
import com.zln.zcar.cms.entity.ExceptionLog;
import com.zln.zcar.cms.entity.OperationLog;
import com.zln.zcar.cms.service.ExceptionLogService;
import com.zln.zcar.cms.service.OperationLogService;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.reflect.Method;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import static com.zln.zcar.cms.utils.IConst.operVer;

//import com.hyd.zcar.cms.common.utils.IPUtil;
/*
import com.hyd.zcar.cms.common.utils.base.UuidUtil;
import com.hyd.zcar.cms.common.utils.security.UserShiroUtil;
import com.hyd.zcar.cms.entity.system.log.ExceptionLog;
import com.hyd.zcar.cms.entity.system.log.OperationLog;
import com.hyd.zcar.cms.service.system.log.ExceptionLogService;
import com.hyd.zcar.cms.service.system.log.OperationLogService;
*/

/**
 * 切面处理类，操作日志异常日志记录处理
 *
 * @author zln
 * @date 2019/03/21
 */
@Aspect
@Component
@Slf4j
public class OperLogAspect {


    /**
     * 操作版本号
     * <p>
     * 项目启动时从命令行传入，例如：java -jar xxx.war --version=201902
     * </p>
     */
   /* @Value("${version}")
    private String operVer;*/

    @Autowired
    private OperationLogService operationLogService;

    @Autowired
    private ExceptionLogService exceptionLogService;

    /**
     * 设置操作日志切入点 记录操作日志 在注解的位置切入代码
     */
    @Pointcut("@annotation(com.zln.zcar.cms.utils.annotation.OperLog)")
    public void operLogPoinCut() {
    }

    /**
     * 设置操作异常切入点记录异常日志 扫描所有controller包下操作
     */
    @Pointcut("execution(* com.zln.zcar.cms.controller..*.*(..))")
    public void operExceptionLogPoinCut() {
    }

    /**
     * 正常返回通知，拦截用户操作日志，连接点正常执行完成后执行， 如果连接点抛出异常，则不会执行
     *
     * @param joinPoint 切入点
     * @param keys      返回结果
     */
    @AfterReturning(value = "operLogPoinCut()", returning = "keys")
    public void saveOperLog(JoinPoint joinPoint, Object keys) {
        //操作时间
        SimpleDateFormat sd = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        // 获取RequestAttributes
        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();
        // 从获取RequestAttributes中获取HttpServletRequest的信息
        HttpServletRequest request = (HttpServletRequest) requestAttributes
                .resolveReference(RequestAttributes.REFERENCE_REQUEST);

        OperationLog operlog = new OperationLog();
        try {
            operlog.setOperId(UUID.randomUUID().toString()); // 主键ID

            // 从切面织入点处通过反射机制获取织入点处的方法
            MethodSignature signature = (MethodSignature) joinPoint.getSignature();
            // 获取切入点所在的方法
            Method method = signature.getMethod();
            // 获取操作
            OperLog opLog = method.getAnnotation(OperLog.class);
            if (opLog != null) {
                String operModul = opLog.operModul();
                String operType = opLog.operType();
                String operDesc = opLog.operDesc();
                operlog.setOperModul(operModul); // 操作模块
                operlog.setOperType(operType); // 操作类型
                operlog.setOperDesc(operDesc); // 操作描述
            }
            // 获取请求的类名
            String className = joinPoint.getTarget().getClass().getName();
            // 获取请求的方法名
            String methodName = method.getName();
            methodName = className + "." + methodName;

            operlog.setOperMethod(methodName); // 请求方法


            // 请求的参数
            Map<String, String> rtnMap = converMap(request.getParameterMap());
            // 将参数所在的数组转换成json
            String params = JSON.toJSONString(rtnMap);
            //获取json的请求参数
            if (rtnMap == null || rtnMap.size() == 0) {
                params = getJsonStrByRequest(request);
            }

            operlog.setOperRequParam(params); // 请求参数
            operlog.setOperRespParam(JSON.toJSONString(keys)); // 返回结果
            //operlog.setOperUserId(UserShiroUtil.getCurrentUserLoginName()); // 请求用户ID
            //operlog.setOperUserName(UserShiroUtil.getCurrentUserName()); // 请求用户名称
            operlog.setOperIp(IPUtil.getClientIp(request)); // 请求IP
            operlog.setOperUri(request.getRequestURI()); // 请求URI
            operlog.setOperCreateTime(sd.format(new Date())); // 创建时间
            operlog.setOperVer(operVer); // 操作版本
            operationLogService.insert(operlog);
            log.info("当前的记录是:" + methodName + params);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 异常返回通知，用于拦截异常日志信息 连接点抛出异常后执行
     *
     * @param joinPoint 切入点
     * @param e         异常信息
     */
    @AfterThrowing(pointcut = "operExceptionLogPoinCut()", throwing = "e")
    public void saveExceptionLog(JoinPoint joinPoint, Throwable e) {
        //操作时间
        SimpleDateFormat sd = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        // 获取RequestAttributes
        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();
        // 从获取RequestAttributes中获取HttpServletRequest的信息
        HttpServletRequest request = (HttpServletRequest) requestAttributes
                .resolveReference(RequestAttributes.REFERENCE_REQUEST);

        ExceptionLog excepLog = new ExceptionLog();
        try {
            // 从切面织入点处通过反射机制获取织入点处的方法
            MethodSignature signature = (MethodSignature) joinPoint.getSignature();
            // 获取切入点所在的方法
            Method method = signature.getMethod();
            excepLog.setExcId(UUID.randomUUID().toString());
            // 获取请求的类名
            String className = joinPoint.getTarget().getClass().getName();
            // 获取请求的方法名
            String methodName = method.getName();
            methodName = className + "." + methodName;
            // 请求的参数
            Map<String, String> rtnMap = converMap(request.getParameterMap());
            // 将参数所在的数组转换成json
            String params = JSON.toJSONString(rtnMap);
            //获取json的请求参数
            if (rtnMap == null || rtnMap.size() == 0) {
                params = getJsonStrByRequest(request);
            }
            excepLog.setExcRequParam(params); // 请求参数
            excepLog.setOperMethod(methodName); // 请求方法名
            excepLog.setExcName(e.getClass().getName()); // 异常名称
            excepLog.setExcMessage(stackTraceToString(e.getClass().getName(), e.getMessage(), e.getStackTrace())); // 异常信息
            // excepLog.setOperUserId(UserShiroUtil.getCurrentUserLoginName()); // 操作员ID
            //excepLog.setOperUserName(UserShiroUtil.getCurrentUserName()); // 操作员名称
            excepLog.setOperUri(request.getRequestURI()); // 操作URI
            excepLog.setOperIp(IPUtil.getClientIp(request)); // 操作员IP
            excepLog.setOperVer(operVer); // 操作版本号
            excepLog.setOperCreateTime(sd.format(new Date())); // 发生异常时间

            exceptionLogService.insert(excepLog);
            log.info("当前的异常是:" + e.getClass().getName() + excepLog.getExcMessage());
        } catch (Exception e2) {
            e2.printStackTrace();
        }

    }

    /**
     * 获取json格式 请求参数
     */
    public String getJsonStrByRequest(HttpServletRequest request) {
        String param = null;
        try {
            BufferedReader streamReader = new BufferedReader(new InputStreamReader(request.getInputStream(), "UTF-8"));
            StringBuilder responseStrBuilder = new StringBuilder();
            String inputStr;
            while ((inputStr = streamReader.readLine()) != null) {
                responseStrBuilder.append(inputStr);
            }

            JSONObject jsonObject = JSONObject.parseObject(responseStrBuilder.toString());
            param = jsonObject.toJSONString();
            System.out.println(param);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return param;
    }


    /**
     * 转换request 请求参数
     *
     * @param paramMap request获取的参数数组
     */
    public Map<String, String> converMap(Map<String, String[]> paramMap) {
        Map<String, String> rtnMap = new HashMap<String, String>();
        for (String key : paramMap.keySet()) {
            rtnMap.put(key, paramMap.get(key)[0]);
        }
        return rtnMap;
    }

    /**
     * 转换异常信息为字符串
     *
     * @param exceptionName    异常名称
     * @param exceptionMessage 异常信息
     * @param elements         堆栈信息
     */
    public String stackTraceToString(String exceptionName, String exceptionMessage, StackTraceElement[] elements) {
        StringBuffer strbuff = new StringBuffer();
        for (StackTraceElement stet : elements) {
            strbuff.append(stet + "\n");
        }
        String message = exceptionName + ":" + exceptionMessage + "\n\t" + strbuff.toString();
        return message;
    }
}
````

### 测试
![image.png](/upload/2020/10/image-416d79fab22644c9be4fc1f00a56ebaa.png)

![image.png](/upload/2020/10/image-40b80a4a351c46fea7eca0cdc00acb3a.png)

![image.png](/upload/2020/10/image-8d1202d676ed4fb9990671bd488380f5.png)

**有什么问题请在下面留言，前端的实现没有做，大家有兴趣可以尝试一下**

----科技臻于完美，则使用愈发简单，复杂的东西都会被封装在使用者看不到的地方。

生活果然比小说精彩，因为生活压根不讲合理性！


