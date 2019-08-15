---

title: summary
date: 2019-08-15 15:40:34
tags:
	- 感悟
	- 总结
Categories:
	- 总结
---

# 前言

>   **如今，我在空调里吃着🍉，享受着别人马上要结束，而我刚刚开始的暑假生活。俗话说的好，假期都是用来超越别人的(~~我可不干这种事情，主要我太懒~~)。暑假一个月，说少不少，说多不多，但在平常的学习上很少有时间可以进行这样集中的编程知识的学习，不时成为锤炼自己的好时机。假期确实提升了很多，有必要进行一些梳理，进行一些总结。当然本次只是给一些技术的进行大概的总结，涉及的知识不会太深。**

# 看看学了什么

  **让我们首先以一张思维导图开始这篇博文~~哇 好专业 666鸭~~,图里包含了这个暑假学到或者了解到~~当然不可能面面俱到~~。右边是框架的学习，左边是较为细一点~~反正自己能理解的一个划分~~东西还算比较多，够唠一会的了。**

![暑假学习(后端)](https://i.loli.net/2019/08/15/fBMuJO9ct1ZxqbD.png)

---



# 框架学习

---

## 框架学习之SSM框架

​	**作为一个9102年学框架的后端Java开发人员，当然要从SSM框架学起(~~学校还在教着SSH~~),SSM框架即为Spring、SPring MVC、Mybatis。框架集由Spring、MyBatis两个开源框架整合而成（SpringMVC是Spring中的部分内容）。常作为数据源较简单的web项目的框架。**

### Spring

　　**Spring就像是整个项目中装配bean的大工厂，在配置文件中可以指定使用特定的参数去调用实体类的构造方法来实例化对象。也可以称之为项目中的粘合剂。**

　　**Spring的核心思想是IoC（控制反转），面向切面编程就是 Spring 最为重要的功能之一了，在数据库事务中切面编程被广泛使用。即不再需要程序员去显式地`new`一个对象，而是让Spring框架帮你来完成这一切。**

​	**(~~上面的粘贴自百度~~)在我的理解里，Spring 主要分为2部分(IOC与AOP)，IOC就是帮你创建对象的，而不用每一个都自己new，通过依赖注入实现程序之间的解耦。框架的出现大多都是提供良好的封装性、实现程序的高内聚与低耦合。**

​	**AOP 即 Aspect Oriented Program 面向切面编程。首先，在面向切面编程的思想里面，把功能分为核心业务功能，和周边功能。**

- **所谓的核心业务**，比如登陆，增加数据，删除数据都叫核心业务

- **所谓的周边功能**，比如性能统计，日志，事务管理等等

  

  **周边功能在 Spring 的面向切面编程AOP思想里，即被定义为切面在面向切面编程AOP的思想里面，核心业务功能和切面功能分别独立进行开发，然后把切面功能和核心业务功能 "编织" 在一起，这就叫AOP**

  

  #### AOP 的目的

  **AOP能够将那些与业务无关，却为业务模块所共同调用的逻辑或责任（例如事务处理、日志管理、权限控制等）封装起来，便于减少系统的重复代码**，**降低模块间的耦合度**，并**有利于未来的可拓展性和可维护性。**

  

  #### 我的理解

  ​	**AOP的是让开发人员更专注于核心业务的处理，而不用在核心业务的周围围绕着周边业务，增大代码量，让代码的可读性变差，耦合度增加。**

  ![Spring特征](https://i.loli.net/2019/08/15/jQL21EqZiHlVzSC.png)

  

### Spring MVC

​	**SpringMVC在项目中拦截用户请求，它的核心Servlet即DispatcherServlet承担中介或是前台这样的职责，将用户请求通过HandlerMapping去匹配Controller，Controller就是具体对应请求所执行的操作。SpringMVC相当于SSH框架中struts。**

![Spring MVC架构](https://upload-images.jianshu.io/upload_images/7896890-a25782fb05f315de.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp](https://upload-images.jianshu.io/upload_images/7896890-a25782fb05f315de.png?imageMogr2/auto-orient/strip|imageView2/2/w/1000/format/webp))

​	**pring MVC 是一个模型 - 视图 - 控制器（MVC）的Web框架建立在中央前端控制器servlet（DispatcherServlet），它负责发送每个请求到合适的处理程序，使用视图来最终返回响应结果的概念。Spring MVC 是 Spring 产品组合的一部分，它享有 Spring IoC容器紧密结合Spring松耦合等特点，因此它有Spring的所有优点。**

### **mybatis**

​	**MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。MyBatis 可以使用简单的 XML 或注解来配置和映射原生类型、接口和 Java 的 POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。**

　　**mybatis是对jdbc的封装，它让数据库底层操作变的透明。mybatis的操作都是围绕一个sqlSessionFactory实例展开的。mybatis通过配置文件关联到各实体类的Mapper文件，Mapper文件中配置了每个类对数据库所需进行的sql语句映射。在每次与数据库交互时，通过sqlSessionFactory拿到一个sqlSession，再执行sql命令。**

​	**页面发送请求给控制器，控制器调用业务层处理逻辑，逻辑层向持久层发送请求，持久层与数据库交互，后将结果返回给业务层，业务层将处理逻辑发送给控制器，控制器再调用视图展现数据。(三层架构)**

---

## 框架学习之Spring Boot

> **Spring Boot 作为以后后端开发的使用框架，在Spring、Spring MVC 基础上减少了大量的配置，作为一种开箱即用的框架，大大简化了开发人员的开发流程。**

#### **首先分享一些比较好的学习连接资源**

- [Spring Boot 官方文档](https://docs.spring.io/spring-boot/docs/2.1.7.RELEASE/reference/html/)

-  Spring Boot 中文索引](http://springboot.fun/)

- [Spring Boot 教程汇总](http://www.springboot.wiki/)

- [江南一点雨 Spring Boot 系列文章](https://www.javaboy.org/springboot/)

- [纯洁的微笑 Spring Boot 系列文章](http://www.ityouknow.com/spring-boot.html)

  ---

  #### 什么是Spring Boot呢？

  ​	**什么是Spring Boot？他跟SPring又有什么关系?怎么又来了一种新的框架？相信无数初学者都曾想过这些问题。首先Spring Boot并非是一种全新的框架。Boot即为启动的意思，旨在快速启动你的Spring项目并通过一些自动配置来减少人为的主动配置。并且Spring Boot 对一些主流框架都有整合的Start,他就像一个框架届的Maven，通过对框架的整合，让开发变得简单起来。**

  ![Spring Boot](https://spring.io/img/homepage/icon-spring-boot.svg)

#### Spring boot的四个主要特性

+ **独立运行的Spring项目**：Spring Boot可以以jar包的形式来运行，运行一个Spring Boot项目我们只需要通过java -jar xx.jar类运行。非常方便。

+ **内嵌Servlet容器**：Spring Boot可以内嵌Tomcat，这样我们无需以war包的形式部署项目。

+ **提供starter简化Maven配置**：使用Spring或者SpringMVC我们需要添加大量的依赖，而这些依赖很多都是固定的，这里Spring Boot 通过starter能够帮助我们简化Maven配置。

+ **自动配置Spring**

+ **准生产的应用监控**

+ **无代码生成和xml配置**

  ---

## 总结

> **暂时先大概的说下这2个后端框架吧，只是大概的讲讲这些框架的有什么作用以及它们的应用，之后再写写那些中间件,溜啦😉😉😉😉~~~~**