---
title: "Python中的datatime库的使用"
description: "Python datetime 库的常用用法。"
category: note
badge: "笔记"
tags: []
date: "2023-11-16"
pinned: false
draft: false
---

## datatime库的使用

由计算一个特定的日期是这一年的第几天，而引出学习的库。

### 引用

```
from datetime import datetime, timedelta
```

### 基础用法

```
## 基础用法
# 获取当前的时间 datetime.today()
print(datetime.today())
# 取年份
print(datetime.today().year)
# 取月份
print(datetime.today().month)
# 取日期
print(datetime.today().day)
# 取小时
print(datetime.today().hour)
# 取分钟
print(datetime.today().minute)
# 取秒
print(datetime.today().second)
```

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/f6966cdab63a687d5ce007465c7703fb.png)

### 输入日期进行转换

将日期输入转换为datatime格式。或者将datatime转化为字符串输出，或进行其他的操作。

```
## 输入一个日期时间进行相互转化
# 将输入的 str 转为  datetime 类型
today = '2023年11月16日 12:00:00'
print(datetime.strptime(today, "%Y年%m月%d日 %H:%M:%S"))
today_datetime = datetime.strptime(today, "%Y年%m月%d日 %H:%M:%S")
# 将datatime格式转化为str
str_today = today_datetime.strftime("%Y/%m/%d")
print(str_today)
# 取这一天是这一年的第几天
print(today_datetime.timetuple().tm_yday)
# 计算二十天之前的日期
today_before20 = today_datetime - timedelta(days=20)
print(today_before20)
```

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/50a94a2c8fe737200e299b46bd833cae.png)

### 时间戳的使用

```
## 时间戳  某一时间点 距1970 1月1日 有多少秒
# 计算某天天的时间戳 转化为datatime格式
today_timestamp = datetime.timestamp(today_datetime)
print(today_timestamp)
# 用时间戳计算二十天之前的时间
timestamp_20 = datetime.timestamp(today_datetime) - 20 * 24 * 60 * 60
print(timestamp_20) ## 此时计算出来的为一个时间戳
## 将时间戳转化为日期
print(datetime.fromtimestamp(timestamp_20))
```

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/33d186236aed90c288ca8213ccc1b0c8.png)
