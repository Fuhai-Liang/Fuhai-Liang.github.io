---
title: "【Java环境的搭建与配置】"
description: "配置 Java 环境变量，并用 IDEA 编写第一个程序。"
category: note
badge: "笔记"
tags: []
date: "2023-12-11"
pinned: false
draft: false
---

## 下载JDK

下载jdk1.8[官网下载](https://www.oracle.com/java/technologies/downloads/#java8-windows)  
 然后双击安装  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/622b6ba30371a985624fddfd00f2b6ca.png)  
 新建两个文件夹 第一次出现的路径选择放进jdk  
 第二次是jre的安装路径选择放心第二个文件夹

## 配置环境变量

打开高级系统设置  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a1b6b0fdac221b9bcaec61ebe7fcece9.png)  
 添加一个JAVA\_HOME 后面的路径名是你的jdk放置的路径  
 接着打开PATH  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/dfefd44828fed74efc453110b3d09629.png)  
 添加语句%JAVA\_HOME%\bin  
 点击完成则java环境配置完成

## 安装IDEA，编写第一个程序HelloWorld

IDEA官网[官网下载链接](https://www.jetbrains.com.cn/en-us/idea/download/?section=windows)  
 下载双击安装，放置到你需要的位置下  
 打开  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/8cb00d7eb4f31a5198f479bc56af1e25.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/375a91becac1b53258660c5ac6f3d9d5.png)  
 输出Hello java 环境变量配置完成！
