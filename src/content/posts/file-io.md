---
title: "文件的打开和读取"
description: "文件打开、读取以及 with 语法的使用。"
category: note
badge: "笔记"
tags: []
date: "2023-11-17"
pinned: false
draft: false
---

## open函数

```
f = open("D:\\code\a.txt","w",encoding='utf-8')
# 用write写文件 只能传入一串字符串
f.write("ajshcbajshc")
# 跟在之前的字符串后面写 想换行写可以加入换行符\n
f.write("asgcvasc")
# 继续跟在后面书写 但是都是拼在一起进行书写
f.writelines(("adfg","arga"))
f.close()
```

## 文件打开常用的操作

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/f14d16b45f923fa2a1ebaa767f40bd8f.png)  
 r,w,x,a四者只能选一个传入参数之中

## 用with打开和关闭文件

```
with open("./a.txt","r",encoding='utf-8') as f:
    print(f.read())
```

这样打开文件之后需要在with中继续书写代码 但是可以不用写close()函数 。
