---
sidebar: auto
---
## spring项目中手动获取bean

::: tip
在服务器启动过程中，spring容器也会初始化，
那么当然，Spring的ApplicationContext对象肯定也在这个过程中会被初始化了，
那么我们如何在java类中手动去获取得到这个对象呢？这里提供一种比较好的方法。
:::

````java
package com.njusoft.its.dtu.event;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

/**
 * ApplicaitonContext工具类
 */
@Component
public class ApplicationContextUtils implements ApplicationContextAware
{

    private static ApplicationContext context;

    public static void setContext(ApplicationContext applicationContext)
    {
        context = applicationContext;
    }

    public static ApplicationContext getContext()
    {
        return context;
    }

    public static Object getBean(String beanName)
    {
        return context.getBean(beanName);
    }

    public static <T> T getBean(Class<T> t)
    {
        return context.getBean(t);
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException
    {
        setContext(applicationContext);
    }
}

````

使用

````java
User user =  ApplicationContextUtils.getBean(User.class);
````

**如果有什么问题请在下方留言!**
-------命运对谁都很公平，因为它对所有人都不公平。

