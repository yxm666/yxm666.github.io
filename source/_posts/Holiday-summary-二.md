---
title: Holiday summary(二)
date: 2019-08-17 14:32:52
tags:
	- 感悟
	- 总结
categories:
	- 总结
---

# 前言

>跟着上一篇的框架结构大概的总结完了，这次总结图里左边的内容，让我们看看都有啥吧。

---

![暑假学习(后端)](https://i.loli.net/2019/08/15/fBMuJO9ct1ZxqbD.png)

# 其他

---

​	**Maven 、git 算是2个编程比较常用的工具吧，但是为了有区别一点还是单独拉出来了。**

---

## Maven

 	**Maven提供了开发人员构建一个完整的生命周期框架。开发团队可以自动完成项目的基础工具建设，Maven使用标准的目录结构和默认构建生命周期。Maven让开发人员的工作更轻松，同时创建报表，检查，构建和测试自动化设置。Maven简化和标准化项目建设过程。处理编译，分配，文档，团队协作和其他任务的无缝连接。 Maven增加可重用性并负责建立相关的任务。**

**Maven主要做了两件事：**

1. **统一开发规范与工具**
2. **统一管理jar包**
3. **Maven常用指令**

---

### **Maven项目结构**

​	**若要使用 Maven，那么项目的目录结构必须符合 Maven 的规范，其目录结构如下：**

​	![Maven目录jΩΩΩ](https://img-blog.csdn.net/201808131239225?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvdmVxdWFucXVxbg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### **Maven 基本命令**

---

1. -**v: 查询 Maven 版本**

   **本命令用于检查 maven 是否安装成功。**

   **Maven 安装完成之后，在命令行输入 mvn -v，若出现 maven 信息，则说明安装成功。**

2. **compile：编译**

   **将 java 源文件编译成 class 文件**

3. **test: 测试项目**

   **执行 test 目录下的测试用例**

4. **package: 打包**

   **将项目打成 jar 包**

5. **clean: 删除 target 文件夹**

6. **install: 安装**

   **将当前项目放到 Maven 的本地仓库中。供其他项目使用**

---

### Maven的仓库

---

**Maven 仓库用来存放 Maven 管理的所有 Jar 包。分为：本地仓库 和 中央仓库。**

- **本地仓库：Maven 本地的 Jar 包仓库。**
- **中央仓库： Maven 官方提供的远程仓库。**

**`当项目编译时，Maven 首先从本地仓库中寻找项目所需的 Jar 包，若本地仓库没有，再到 Maven 的中央仓库下载所需 Jar 包。`**

### **坐标**

---

**在 Maven 中，坐标是 Jar 包的唯一标识，Maven 通过坐标在仓库中找到项目所需的 Jar 包，通过[官方依赖仓库](https://mvnrepository.com/)去寻找**

**如下代码中，groupId 和 artifactId 构成了一个 Jar 包的坐标。**

```xml
<dependency>
    <groupId>cn.missbe.web.search</groupId>
    <artifactId>resource-search</artifactId>
    <packaging>jar</packaging>
    <version>1.0-SNAPSHOT</version>
</dependency>
<dependency>
    <groupId>cn.missbe.web.search</groupId>
    <artifactId>resource-search</artifactId>
    <packaging>jar</packaging>
    <version>1.0-SNAPSHOT</version>
</dependency>
```

- **groupId: 所需 Jar 包的项目名**
- **artifactId: 所需 Jar 包的模块名**
- **version: 所需 Jar 包的版本号**

---

### **依赖范围 scope**

	在项目发布过程中，帮助决定哪些构件被包括进来。欲知详情请参考依赖机制。    
- **compile ：默认范围，用于编译**      
- **provided：类似于编译，但支持你期待 jdk 或者容器提供，类似于 classpath**      
- **runtime: 在执行时需要使用**      
- **test:    用于 test 任务时使用**      
- **system: 需要外在提供相应的元素。通过 systemPath 来取得**      
- **systemPath: 仅用于范围为 system。提供相应的路径**      
- **optional:   当项目自身被依赖时，标注依赖是否传递。用于连续依赖时使用**

## 传递依赖 与 排除依赖

---

- **传递依赖：如果我们的项目引用了一个 Jar 包，而该 Jar 包又引用了其他 Jar 包，那么在默认情况下项目编译时，Maven 会把直接引用和简洁引用的 Jar 包都下载到本地。**
- **排除依赖：如果我们只想下载直接引用的 Jar 包，那么需要在 pom.xml 中做如下配置：(将需要排除的 Jar 包的坐标写在中)**

```xml
<exclusions>
    <exclusion>
        <groupId>cn.missbe.web.search</groupId>
        <artifactId>resource-search</artifactId>
        <packaging>pom</packaging>
        <version>1.0-SNAPSHOT</version>
    </exclusion>
</exclusions>
<exclusions>
    <exclusion>
        <groupId>cn.missbe.web.search</groupId>
        <artifactId>resource-search</artifactId>
        <packaging>pom</packaging>
        <version>1.0-SNAPSHOT</version>
    </exclusion>
</exclusions>
```



### **依赖冲突**

---

​	**若项目中多个 Jar 同时引用了相同的 Jar 时，会产生依赖冲突，但 Maven 采用了两种避免冲突的策略，因此在 Maven 中是不存在依赖冲突的。**

- **路径优先**

```
本项目——>A.jar——>B.jar——>X.jar
本项目——>C.jar——>X.jar
本项目——>A.jar——>B.jar——>X.jar
本项目——>C.jar——>X.jar
```

- `本项目——>A.jar——>B.jar——>X.jar`

- `本项目——>C.jar——>X.jar`

**`若本项目引用了 A.jar，A.jar 又引用了 B.jar，B.jar 又引用了 X.jar，并且 C.jar 也引用了 X.jar。`**

**`在此时，Maven 只会引用引用路径最短的 Jar。**`

- **声明优先**

  **`若引用路径长度相同时，在 pom.xml 中谁先被声明，就使用谁。`**

---

### **聚合**

- **什么是聚合？**

**`将多个项目同时运行就称为聚合。`**

- **如何实现聚合？**

**只需在 pom 中作如下配置即可实现聚合：**

```xml
<modules>
    <module>web-connection-pool</module>
    <module>web-java-crawler</module>
</modules>
<modules>
    <module>web-connection-pool</module>
    <module>web-java-crawler</module>
</modules>
```



### **继承**

---

1. 什么是继承？

   在聚合多个项目时，如果这些被聚合的项目中需要引入相同的 Jar，那么可以将这些 Jar 写入父 pom 中，各个子项目继承该 pom 即可。

2. 如何实现继承？

- 父 pom 配置：将需要继承的 Jar 包的坐标放入标签即可。

```xml
<dependencyManagement>
    <dependencies>
          <dependency>
            <groupId>cn.missbe.web.search</groupId>
            <artifactId>resource-search</artifactId>
            <packaging>pom</packaging>
            <version>1.0-SNAPSHOT</version>
          </dependency> 
    </dependencies>
</dependencyManagement>
<dependencyManagement>
    <dependencies>
          <dependency>
            <groupId>cn.missbe.web.search</groupId>
            <artifactId>resource-search</artifactId>
            <packaging>pom</packaging>
            <version>1.0-SNAPSHOT</version>
          </dependency> 
    </dependencies>
</dependencyManagement>
```

- 子pom配置:

```xml
<parent>
        <groupId>父pom所在项目的groupId</groupId>
        <artifactId>父pom所在项目的artifactId</artifactId>
        <version>父pom所在项目的版本号</version>
</parent>
 <parent>
        <artifactId>resource-search</artifactId>
        <groupId>cn.missbe.web.search</groupId>
        <version>1.0-SNAPSHOT</version>
</parent>
<parent>
        <groupId>父pom所在项目的groupId</groupId>
        <artifactId>父pom所在项目的artifactId</artifactId>
        <version>父pom所在项目的版本号</version>
</parent>
 <parent>
        <artifactId>resource-search</artifactId>
        <groupId>cn.missbe.web.search</groupId>
        <version>1.0-SNAPSHOT</version>
</parent>
```



## git

---

## git是什么

​	**Git是目前世界上最先进的分布式版本控制系统。**

## 工作原理 / 流程：

![Git工作原理](https://img.mukewang.com/59c31e4400013bc911720340.png)

## 参考链接:

---

- Mavne使用详解](https://blog.csdn.net/u010425776/article/details/52027706)

