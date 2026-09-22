---
title: "Python异常处理"
description: "用 try / except 处理常见异常。"
category: note
badge: "笔记"
tags: []
date: "2023-11-16"
pinned: false
draft: false
---

## 异常处理

python中常见的异常为：  
![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/f9a57127b1521529410709a3f58bbe47.png)  
如果想要代码不被异常打断一直执行下去，就要利用 try ， exception 进行异常处理。

例如

```
li = [1,2,3,4,5,'9adcsc',24,224,23]
for i in li:
    i+=1
```

此时代码会报错不能继续运行下去![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/2ce92f3b1d125eab3617ac709048a357.png)  
如若此时加入try ，exception 则可以很好的解决问题

```
li = [1,2,3,4,5,'9adcsc',24,224,23]

for i in li:
    try:
        i+=1
        print(i)
    except Exception as e:
        print(e)
        print("下面这个有问题：")
        print(i)
```

我们不用特别定义错误类型，找到错误类型的父类 Exception 就可以将大部分错误进行覆盖。这时函数就会继续执行并且报告错误异常。

## 完整的try ， exception，else ， finally

```
li = [1,2,3,4,5,'9adcsc',24,224,23]
for i in li:
    # 尝试下述代码
    try:
        i /= 0
    # 上述代码有错做什么
    except Exception as e:
        # i += "1"
        print(e)
        # except ZeroDivisionError as e:
        #     print(e)
    else:  # try里的程序执行成功才会运行
        i /= 2
    finally:  # 不管try对错 都会执行
        print(i)
```

在爬虫中使用try，exception最好，因为爬到一半遇到了个错误终止爬取真的很难受!!!
