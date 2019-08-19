---

title: Holiday summary(二)
date: 2019-08-17 14:32:52
tags:
	- 感悟
	- 总结
categories:
	- 总结
---

# **前言**

>**跟着上一篇的框架结构大概的总结完了，这次总结图里左边的内容，让我们看看都有啥吧。**

---

**![暑假学习(后端)](https://i.loli.net/2019/08/15/fBMuJO9ct1ZxqbD.png)**

# **其他**

---

​	**Maven 、git 算是2个编程比较常用的工具吧，但是为了有区别一点还是单独拉出来了。**

---

## **Maven**

 	**Maven提供了开发人员构建一个完整的生命周期框架。开发团队可以自动完成项目的基础工具建设，Maven使用标准的目录结构和默认构建生命周期。Maven让开发人员的工作更轻松，同时创建报表，检查，构建和测试自动化设置。Maven简化和标准化项目建设过程。处理编译，分配，文档，团队协作和其他任务的无缝连接。 Maven增加可重用性并负责建立相关的任务。**

**Maven主要做了两件事：**

1. **统一开发规范与工具**
2. **统一管理jar包**
3. **Maven常用指令**

---

### **Maven项目结构**

​	**若要使用 Maven，那么项目的目录结构必须符合 Maven 的规范，其目录结构如下：**

​	**![Maven目录jΩΩΩ](https://img-blog.csdn.net/201808131239225?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvdmVxdWFucXVxbg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)**

### **Maven 基本命令**

---

1. **-v: 查询 Maven 版本**

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

### **Maven的仓库**

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

## **传递依赖 与 排除依赖**

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

- **`本项目——>A.jar——>B.jar——>X.jar`**

- **`本项目——>C.jar——>X.jar`**

**`若本项目引用了 A.jar，A.jar 又引用了 B.jar，B.jar 又引用了 X.jar，并且 C.jar 也引用了 X.jar。`**

**`在此时，Maven 只会引用引用路径最短的 Jar。`**

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

1. **什么是继承？**

   **在聚合多个项目时，如果这些被聚合的项目中需要引入相同的 Jar，那么可以将这些 Jar 写入父 pom 中，各个子项目继承该 pom 即可。**

2. **如何实现继承？**

- **父 pom 配置：将需要继承的 Jar 包的坐标放入标签即可。**

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

- **子pom配置:**

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



## **git**

---

## **git是什么**

​	**Git是目前世界上最先进的分布式版本控制系统。**

## **工作原理 / 流程：**

**![Git工作原理](https://img.mukewang.com/59c31e4400013bc911720340.png)**

**Workspace：工作区**
**Index / Stage：暂存区**
**Repository：仓库区（或本地仓库）**
**Remote：远程仓库**

### **SVN与Git的最主要的区别**

---

​	**SVN是集中式版本控制系统，版本库是集中放在中央服务器的，而干活的时候，用的都是自己的电脑，所以首先要从中央服务器哪里得到最新的版本，然后干活，干完后，需要把自己做完的活推送到中央服务器。集中式版本控制系统是必须联网才能工作，如果在局域网还可以，带宽够大，速度够快，如果在互联网下，如果网速慢的话，就纳闷了。**

​	**Git是分布式版本控制系统，那么它就没有中央服务器的，每个人的电脑就是一个完整的版本库，这样，工作的时候就不需要联网了，因为版本都是在自己的电脑上。既然每个人的电脑都有一个完整的版本库，那多个人如何协作呢？比如说自己在电脑上改了文件A，其他人也在电脑上改了文件A，这时，你们两之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。**

### **创建仓库(repository)**

---

**什么是版本库呢？版本库又名仓库，英文名repository，你可以简单理解成一个目录，这个目录里面的所有文件都可以被Git管理起来，每个文件的修改、删除，Git都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。**

1. **首先创建一个空文件夹**

2. **通过`git init`命令把这个目录变成Git可以管理的仓库：**

   ```
   $ git init
   Initialized empty Git repository in /Users/michael/learngit/.git/
   ```

   **执行后会在当前目录下生成.git文件(可能是以隐藏文件的形式)**

### **把文件添加到仓库**

---

1. **第一步，在当前路径下创建文件 readme.txt**

2. **第二步，用命令`git add`告诉Git，把文件添加到仓库：**

   **`$git add redme.txt`**

3. **用命令`git commit`告诉Git，把文件提交到仓库：**

   **`$ git commit -m 'wrote a file'`**

   **简单解释一下`git commit`命令，`-m`后面输入的是本次提交的说明，可以输入任意内容，当然最好是有意义的，这样你就能从历史记录里方便地找到改动记录。**

   **当然也可以通过`git add .`添加路径下的所用文件进入.git里 可以不用一个一个添加**

### **小结**

**初始化一个Git仓库，使用`git init`命令。**

**添加文件到Git仓库，分两步：**

1. **使用命令`git add <file>`，注意，可反复多次使用，添加多个文件；**
2. **使用命令`git commit -m <message>`，完成。**

### **版本回滚**

---

​	**像这样，你不断对文件进行修改，然后不断提交修改到版本库里，就好比玩RPG游戏时，每通过一关就会自动把游戏状态存盘，如果某一关没过去，你还可以选择读取前一关的状态。有些时候，在打Boss之前，你会手动存盘，以便万一打Boss失败了，可以从最近的地方重新开始。Git也是一样，每当你觉得文件修改到一定程度的时候，就可以“保存一个快照”，这个快照在Git中被称为`commit`。一旦你把文件改乱了，或者误删了文件，还可以从最近的一个`commit`恢复，然后继续工作，而不是把几个月的工作成果全部丢失。**

**`使用git log查看提交`**

---

**当然了，在实际工作中，我们脑子里怎么可能记得一个几千行的文件每次都改了什么内容，不然要版本控制系统干什么。版本控制系统肯定有某个命令可以告诉我们历史记录，在Git中，我们用`git log`命令查看：**

```
$ git log
commit 1094adb7b9b3807259d8cb349e7df1d4d6477073 (HEAD -> master)
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Fri May 18 21:06:15 2018 +0800

    append GPL

commit e475afc93c209a690c39c13a46716e8fa000c366
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Fri May 18 21:03:36 2018 +0800

    add distributed

commit eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0
Author: Michael Liao <askxuefeng@gmail.com>
Date:   Fri May 18 20:59:18 2018 +0800

    wrote a readme file
```

**如果嫌输出信息太多，看得眼花缭乱的，可以试试加上`--pretty=oneline`参数：**

```
$ git log --pretty=oneline
1094adb7b9b3807259d8cb349e7df1d4d6477073 (HEAD -> master) append GPL
e475afc93c209a690c39c13a46716e8fa000c366 add distributed
eaadf4e385e865d25c48e7ca9c8395c3f7dfaef0 wrote a readme file
```



**首先，Git必须知道当前版本是哪个版本，在Git中，用`HEAD`表示当前版本，也就是最新的提交`1094adb...`（注意我的提交ID和你的肯定不一样），上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个`^`比较容易数不过来，所以写成`HEAD~100`。**

**现在，我们要把当前版本`append GPL`回退到上一个版本`add distributed`，就可以使用`git reset`：（如果用commit_id进行回滚操作，可以只用写部分id但要确定结果唯一）**

```
$ git reset --hard HEAD^
HEAD is now at e475afc add distributed
```

**在Git中，总是有后悔药可以吃的。当你用`$ git reset --hard HEAD^`回退到`add distributed`版本时，再想恢复到`append GPL`，就必须找到`append GPL`的commit id。Git提供了一个命令`git reflog`用来记录你的每一次命令：**

```
$ git reflog
e475afc HEAD@{1}: reset: moving to HEAD^
1094adb (HEAD -> master) HEAD@{2}: commit: append GPL
e475afc HEAD@{3}: commit: add distributed
eaadf4e HEAD@{4}: commit (initial): wrote a readme file
```

### **小结**

**现在总结一下：**

- **`HEAD`指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令`git reset --hard commit_id`。**
- **穿梭前，用`git log`可以查看提交历史，以便确定要回退到哪个版本。**
- **要重返未来，用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。**

### **工作区与暂存区**

---

- **工作区: 就是你在电脑里能看到的目录，就是你放在.git的同级目录下除了.git文件(~~怎么有点拗口~~)**

- #### **版本库（Repository）:工作区有一个隐藏目录`.git`，这个不算工作区，而是Git的版本库。**

  **Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支`master`，以及指向`master`的一个指针叫`HEAD`。**

  

  **![工作区与缓存区](https://static.liaoxuefeng.com/files/attachments/919020037470528/0)**

  **分支和`HEAD`的概念我们以后再讲。**

  **前面讲了我们把文件往Git版本库里添加的时候，是分两步执行的：**

  **第一步是用`git add`把文件添加进去，实际上就是把文件修改添加到暂存区；**

  **第二步是用`git commit`提交更改，实际上就是把暂存区的所有内容提交到当前分支。**

  **因为我们创建Git版本库时，Git自动为我们创建了唯一一个`master`分支，所以，现在，`git commit`就是往`master`分支上提交更改。**

  **你可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。**

  **所以，`git add`命令实际上就是把要提交的所有修改放到暂存区（Stage），然后，执行`git commit`就可以一次性把暂存区的所有修改提交到分支。**

- **`命令`git checkout -- readme.txt`意思就是，把`readme.txt`文件在工作区的修改全部撤销，这里有两种情况：**

  **一种是`readme.txt`自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；**

  **一种是`readme.txt`已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。**

  **总之，就是让这个文件回到最近一次`git commit`或`git add`时的状态。**

- **一般情况下，你通常直接在文件管理器中把没用的文件删了，或者用`rm`命令删了：**

  **`$ rm test.txt`**

  **现在你有两个选择，一是确实要从版本库中删除该文件，那就用命令`git rm`删掉，并且`git commit`：**

  **现在，文件就从版本库中被删除了。**

  **另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本：**

  **`git checkout`其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。**

## **添加远程库**

---

​	**要关联一个远程库，使用命令`git remote add origin git@server-name:path/repo-name.git`；**

​	**添加后，远程库的名字就是`origin`，这是 Git 默认的叫法，也可以改成别的，但是`origin`这个名字一看就知道是远程库。**

​	**关联后，使用命令`git push -u origin master`第一次推送 master 分支的所有内容；**

**把本地库的内容推送到远程，用`git push`命令，实际上是把当前分支`master`推送到远程。**

**由于远程库是空的，我们第一次推送`master`分支时，加上了`-u`参数，Git 不但会把本地的`master`分支内容推送的远程新的`master`分支，还会把本地的`master`分支和远程的`master`分支关联起来，在以后的推送或者拉取时就可以简化命令。**

****	

​	**此后，每次本地提交后，只要有必要，就可以使用命令`git push origin master`推送最新修改；**

​	**分布式版本系统的最大好处之一是在本地工作完全不需要考虑远程库的存在，也就是有没有联网都可以正常工作，而 SVN 在没有联网的时候是拒绝干活的！当有网络的时候，再把本地提交推送一下就完成了同步，真是太方便了！**

### **分支管理**

---

