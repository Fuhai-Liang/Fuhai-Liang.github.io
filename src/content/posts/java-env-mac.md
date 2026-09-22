---
title: "Java环境的搭建（Mac M芯片）"
description: "在 macOS（M 芯片）上配置 Java 环境。"
category: note
badge: "笔记"
tags: []
date: "2023-10-31"
pinned: false
draft: false
---

### 第一步打开终端

在终端中输入指令 `java -version`  
 显示：![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/2e4e5b48223b01a7bed9b2328df4be89.png)  
 说明已有java环境

### 没有java环境

打开网页[java官网](https://www.oracle.com/java/technologies/downloads/#java8-mac)  
 下载ARM架构的java  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/8b6cae3b332733d04dc994ba36ef8690.png)  
 下载链接 [java-1.8](https://www.oracle.com/webapps/redirect/signon?nexturl=https://download.oracle.com/otn/java/jdk/8u391-b13/b291ca3e0c8548b5a51d5a5f50063037/jdk-8u391-macosx-aarch64.dmg)   
 下载完成后直接安装就可以 接着会在系统偏好设置中看到java图标  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/4f26ca391451169997144608757f623c.png)  
 注意  
 下载的时候一定要看是jre 还是jdk。jdk包含jre

### 打开终端配置环境

```
sudo su
vim ~/.bash_profile
```

插入以下语句

```
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home
PATH=$JAVA_HOME/bin/:.
CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar
export JAVA_HOME
export PATH
export CLASSPATH
```

按esc ， ：wq 推出并保存

刷新

```
source ~/.bash_profile
```

```
java -version
```

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/5f222554a66e58517117b68a4edcf690.png)  
 配置完成
