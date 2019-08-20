---
title: holiday summary(3)
date: 2019-08-20 18:24:55
tags:
	- 总结
	- 感悟
categoreies:
	- 总结
---

## **前言**

> ​	**在快乐了几天后决定今天把假期总结的东西写完，看看剩的技术还挺多的，就稍微提提好了。肥宅快乐，嗝~**

# **授权管理框架**

---



## **Shiro架构与功能介筛**

---

**1.认证与授权相关基本概念**

**两个基本的概念**

**安全实体：系统需要保护的具体对象数据**

**权限：系统相关的功能操作，例如基本的CRUD**

**Authentication：身份认证/登录，验证用户是不是拥有相应的身份；**

**Authorization：授权，即权限验证，验证某个已认证的用户是否拥有某个权限；即判断用户是否能做事情，常见的如：验证某个用户是否拥有某个角色。或者细粒度的验证某个用户对某个资源是否具有某个权限；**

**Session Manager：会话管理，即用户登录后就是一次会话，在没有退出之前，它的所有信息都在会话中；会话可以是普通JavaSE环境的，也可以是如Web环境的；**

**Cryptography：加密，保护数据的安全性，如密码加密存储到数据库，而不是明文存储；**

**Web Support：Web支持，可以非常容易的集成到Web环境；**

**Caching：缓存，比如用户登录后，其用户信息、拥有的角色/权限不必每次去查，这样可以提高效率；**

**Concurrency：shiro支持多线程应用的并发验证，即如在一个线程中开启另一个线程，能把权限自动传播过去；**

**Testing：提供测试支持；**

**Run As：允许一个用户假装为另一个用户（如果他们允许）的身份进行访问；**

**Remember Me：记住我，这个是非常常见的功能，即一次登录后，下次再来的话不用登录了。**

**2.Shiro四大核心功能:Authentication,Authorization,Cryptography,Session Management**

**![Shiro结构](http://p1.pstatp.com/large/37eb00020300d0856a0e)**



**3.Shiro三个核心组件：Subject, SecurityManager 和 Realms.**

**Subject：主体，代表了当前“用户”，这个用户不一定是一个具体的人，与当前应用交互的任何东西都是Subject，如网络爬虫，机器人等；即一个抽象概念；所有Subject都绑定到SecurityManager，与Subject的所有交互都会委托给SecurityManager；可以把Subject认为是一个门面；SecurityManager才是实际的执行者；**

**SecurityManager：安全管理器；即所有与安全有关的操作都会与SecurityManager交互；且它管理着所有Subject；可以看出它是Shiro的核心，它负责与后边介绍的其他组件进行交互，如果学习过SpringMVC，你可以把它看成DispatcherServlet前端控制器；**

**Realm：域，Shiro从从Realm获取安全数据（如用户、角色、权限），就是说SecurityManager要验证用户身份，那么它需要从Realm获取相应的用户进行比较以确定用户身份是否合法；也需要从Realm得到用户相应的角色/权限进行验证用户是否能进行操作；可以把Realm看成DataSource，即安全数据源。**



## **Spring Security简介**

---

​	**Spring Security是一个能够为基于Spring的企业应用系统提供声明式的安全访问控制解决方案的安全框架。它提供了一组可以在Spring应用上下文中配置的Bean，充分利用了Spring IoC，DI（控制反转Inversion of Control ,DI:Dependency Injection 依赖注入）和AOP（面向切面编程）功能，为应用系统提供声明式的安全访问控制功能，减少了为企业系统安全控制编写大量重复代码的工作。它是一个轻量级的安全框架，它确保基于Spring的应用程序提供身份验证和授权支持。它与Spring MVC有很好地集成，并配备了流行的安全算法实现捆绑在一起。安全主要包括两个操作“认证”与“验证”（有时候也会叫做权限控制）。“认证”是为用户建立一个其声明的角色的过程，这个角色可以一个用户、一个设备或者一个系统。“验证”指的是一个用户在你的应用中能够执行某个操作。在到达授权判断之前，角色已经在身份认证过程中建立了。**

**它的设计是基于框架内大范围的依赖的，可以被划分为以下几块。**

- **Web/Http 安全：这是最复杂的部分。通过建立 filter 和相关的 service bean 来实现框架的认证机制。当访问受保护的 URL 时会将用户引入登录界面或者是错误提示界面。**

- **业务对象或者方法的安全：控制方法访问权限的。**

- **AuthenticationManager：处理来自于框架其他部分的认证请求。**

- **AccessDecisionManager：为 Web 或方法的安全提供访问决策。会注册一个默认的，但是我们也可以通过普通 bean 注册的方式使用自定义的 AccessDecisionManager。**

- **AuthenticationProvider：AuthenticationManager 是通过它来认证用户的。**

- **UserDetailsService：跟 AuthenticationProvider 关系密切，用来获取用户信息的。** 



## **Spring Security 简介**

---

​	**Spring Security 是一个能够为基于 Spring 的企业应用系统提供声明式的安全访问控制解决方案的安全框架。它提供了一组可以在 Spring 应用上下文中配置的 Bean，充分利用了 Spring IoC，DI（控制反转 Inversion of Control ,DI:Dependency Injection 依赖注入）和 AOP（面向切面编程）功能，为应用系统提供声明式的安全访问控制功能，减少了为企业系统安全控制编写大量重复代码的工作。它是一个轻量级的安全框架，它确保基于 Spring 的应用程序提供身份验证和授权支持。它与 Spring MVC 有很好地集成，并配备了流行的安全算法实现捆绑在一起。安全主要包括两个操作 “认证” 与“验证”（有时候也会叫做权限控制）。“认证”是为用户建立一个其声明的角色的过程，这个角色可以一个用户、一个设备或者一个系统。“验证”指的是一个用户在你的应用中能够执行某个操作。在到达授权判断之前，角色已经在身份认证过程中建立了。**

**它的设计是基于框架内大范围的依赖的，可以被划分为以下几块。**

- **Web/Http 安全：这是最复杂的部分。通过建立 filter 和相关的 service bean 来实现框架的认证机制。当访问受保护的 URL 时会将用户引入登录界面或者是错误提示界面。**
- **业务对象或者方法的安全：控制方法访问权限的。**
- **AuthenticationManager：处理来自于框架其他部分的认证请求。**
- **AccessDecisionManager：为 Web 或方法的安全提供访问决策。会注册一个默认的，但是我们也可以通过普通 bean 注册的方式使用自定义的 AccessDecisionManager。**
- **AuthenticationProvider：AuthenticationManager 是通过它来认证用户的。**
- **UserDetailsService：跟 AuthenticationProvider 关系密切，用来获取用户信息的。**

**![](http://p3.pstatp.com/large/37e8000557281bce894c)**

## **Shiro 和 Spring Security 比较**

---

1. **Shiro 比 Spring 更容易使用，实现和最重要的理解**
2. **Spring Security 更加知名的唯一原因是因为品牌名称**
3. **“Spring” 以简单而闻名，但讽刺的是很多人发现安装 Spring Security 很难**
4. **然而，Spring Security 却有更好的社区支持**
5. **Apache Shiro 在 Spring Security 处理密码学方面有一个额外的模块**
6. **Spring-security 对 spring 结合较好，如果项目用的 springmvc ，使用起来很方便。但是如果项目中没有用到 spring，那就不要考虑它了。**
7. **Shiro 功能强大、且 简单、灵活。是 Apache 下的项目比较可靠，且不跟任何的框架或者容器绑定，可以独立运行**





#  **Docker 跟Docker能装的一些能用到的技术**

---

> ​	**这里就主要提一下Docker就好了，因为里面的几种技术我也没有过多的了解(~~Docker也没咋玩会~~)。那让我们先瞅瞅里面的几项技术好了**



### **Redis**

---

**Redis 是一个开源（BSD许可）的，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件。 它支持多种类型的数据结构，如 [字符串（strings）](http://www.redis.cn/topics/data-types-intro.html#strings)， [散列（hashes）](http://www.redis.cn/topics/data-types-intro.html#hashes)， [列表（lists）](http://www.redis.cn/topics/data-types-intro.html#lists)，[集合（sets）](http://www.redis.cn/topics/data-types-intro.html#sets)， [有序集合（sorted sets）](http://www.redis.cn/topics/data-types-intro.html#sorted-sets) 与范围查询， [bitmaps](http://www.redis.cn/topics/data-types-intro.html#bitmaps)， [hyperloglogs](http://www.redis.cn/topics/data-types-intro.html#hyperloglogs) 和 [地理空间（geospatial）](http://www.redis.cn/commands/geoadd.html) 索引半径查询。 Redis 内置了 [复制（replication）](http://www.redis.cn/topics/replication.html)，[LUA脚本（Lua scripting）](http://www.redis.cn/commands/eval.html)，[LRU驱动事件（LRU eviction）](http://www.redis.cn/topics/lru-cache.html)，[事务（transactions）](http://www.redis.cn/topics/transactions.html) 和不同级别的 [磁盘持久化（persistence）](http://www.redis.cn/topics/persistence.html)， 并通过 [Redis哨兵（Sentinel）](http://www.redis.cn/topics/sentinel.html)和自动 [分区（Cluster）](http://www.redis.cn/topics/cluster-tutorial.html)提供高可用性（high availability）。**



**** 

### **RabbitMQ**

---

**RabbitMQ是实现了高级消息队列协议（AMQP）的开源消息代理软件（亦称面向消息的中间件）。RabbitMQ服务器是用[Erlang](https://baike.baidu.com/item/Erlang)语言编写的，而集群和故障转移是构建在[开放电信平台](https://baike.baidu.com/item/开放电信平台)框架上的。所有主要的编程语言均有与代理接口通讯的客户端[库](https://baike.baidu.com/item/库)。**



### **MongoDB** 

---

**MongoDB是一个基于分布式文件存储的数据库。由[C++](https://baike.baidu.com/item/C%2B%2B)语言编写。旨在为WEB应用提供可扩展的高性能数据存储解决方案。**

**MongoDB是一个介于[关系数据库](https://baike.baidu.com/item/关系数据库)和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。它支持的数据结构非常松散，是类似[json](https://baike.baidu.com/item/json)的[bson](https://baike.baidu.com/item/bson)格式，因此可以存储比较复杂的数据类型。Mongo最大的特点是它支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立[索引](https://baike.baidu.com/item/索引)。**



### **laticsearch** 

---

**ES=elaticsearch简写， Elasticsearch是一个开源的高扩展的分布式全文检索引擎，它可以近乎实时的存储、检索数据；本身扩展性很好，可以扩展到上百台服务器，处理PB级别的数据。** 
**Elasticsearch也使用Java开发并使用Lucene作为其核心来实现所有索引和搜索的功能，但是它的目的是通过简单的RESTful API来隐藏Lucene的复杂性，从而让全文搜索变得简单。**

​	



