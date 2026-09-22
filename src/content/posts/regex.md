---
title: "正则表达式"
description: "学习正则表达式，进行复杂的正则匹配。"
category: note
badge: "笔记"
tags: []
date: "2023-11-17"
pinned: false
draft: false
---

## 正则表达式的元字符

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/b34c445fbe341d0a28e07f3c91775a1a.png)

## 例如匹配数字

### 只有一串数字来匹配数字

```
## 只有一串数字来匹配数字
number = "232352334"

# 匹配单个数字
print(re.match(r"\d",number))
print(re.match(r".",number))

# 匹配所有数字
print(re.match(r"\d+",number))
print(re.match(r".+",number))
print(re.match(r"\d*",number))
print(re.match(r".*",number))
```

运行结果  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/4b0517a1a4dd2f418322ef00937e0f21.png)

### 一串字符串中匹配数字

```
## 一串字符串中来匹配数字
string = "adfv2ASDF3AF-23AFsdf523adfv34ASEG"

## 匹配单个第一个数字
# 贪婪匹配  匹配尽可能多的字符
print("贪婪匹配")
a = re.match(r".*(\d)",string)
print(re.match(r".*(\d)",string))
print(a.groups())
# 非贪婪匹配  
print("非贪婪匹配")
b = re.match(r".*?(\d)",string)
print(re.match(r".*?(\d)",string))
b.groups()

# 根据自己所需要的数字类型 在前面进行修改进行精准匹配
# 比如我需要23
# 精准匹配
c = re.match(r"(.*-)([\d]+)",string)
print(c,"\n精准匹配 23")
print(c.groups())
print(c.groups()[1])
```

运行结果  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/39713b6dadec562da3da5e3b69710534.png)

## 用re切分字符串

```
# 用re切分字符串
print("正常切分")
strings = "a;b,c:d,:;e"
print(strings.split(",")[0].split(";"))
print(strings.split(",")[1].split(":"))
# re切分字符串  如果不加[] 则当为一个整体去切分  []表示从里选一个进行切分
print("使用re切分")
print(re.split(r"[,:;]+", strings))
```

运行结果  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/c4ca7ed9829ac104b1123bd31f100e6d.png)

## 零宽度断言 （正则中的判断）

这个就相当于一个判断语句，当满足此语句时才会进行后面的匹配  
 类别：  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/d33701472b34b730f407a18700c30c2a.png)

### ?= 正先行断言-存在

```
# ?= 正先行断言-存在
# ?=() 在括号里面写入存在的条件  例如有大写字母则进行后面的数字匹配  本身存在不影响匹配结果
# 存在大写字母则进行后面的匹配数字 不存在则不进行匹配
text = "2376Aaashs"
text2 = "2376aaaaa"
x = re.match(r"^(?=.*[A-Z])[\d]+",text)
y = re.match(r"^(?=.*[A-Z])[\d]+",text2)
print(x)
print(y)

## 解释：如果括号里面的条件满足 则进行后面的匹配
```

运行  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/a1036042ab0f4e581f8b3f73217e15fd.png)

### ?! 负先行断言 -排除

```
# ?! 负先行断言 -排除
# ?! 直接在后面写不满足什么条件  即没有这个括号里面的对象时 才会进行后面的匹配
# 例如：没有空格时匹配一串数字  
text = "aaa12322134ggg"
text2= "aaa 12322134ggg"
# (。*？)去掉贪婪匹配  并且用groups方法 就可以得到后面的一串数字
m = re.match(r"^(?!.* )(.*?)(\d+)",text)
print(m.groups())
n = re.match(r"^(?!.* )(.*?)(\d+)",text2)
print(n)
# 解释 当字符串中没有空格时才会进行后面的数字匹配
```

运行  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/643be3c6240892896550db890466699f.png)

## 实例练习巩固

```
# 实例1 匹配时间
times = '23:53:59'
time_match = re.match(r"([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])",times)
print(time_match)

# 实例2 匹配一串0
nums = '102300000'
print(re.match(r"^(\d+?)(0*)$", nums).groups())

# 实例3  请尝试写一个验证Email地址的正则表达式，可以匹配如下邮箱格式：
#         google@gmail.com
#         windows@microsoft.com
#         还要能匹配qq邮箱
email_qq = "2342343@qq.com"
email_google = "google@gamil.com"
email_microsoft = "windows@microsoft.com"
result1 = re.match(r"^(/d{6,11})|(\w+)@(\w+).com$",email_qq)
result2 = re.match(r"^(/d{6,11})|(\w+)@(\w+).com$",email_google)
result3 = re.match(r"^(/d{6,11})|(\w+)@(\w+).com$",email_microsoft)
print(result1)
print(result2)
print(result3)

# 实例4 强密码匹配 至少有一个大写字母，一个小写字母，一个字符，并且不低于10个密码 并且不能含有空格
password1 = "aA#12345678"
password2 = "aa#12345678" 
password3 = "AA#12345678" 
password4 = "aAA12345678" 
password5 = "aA 12345678"
password6 = "aA#123"

## 像这种多个需要匹配的可以先进行预编码 在进行匹配测试
result_re = re.compile(r"^(?=.{10,})(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9 ])(?!.* ).*$")
print(result_re.match(password1))
print(result_re.match(password2))
print(result_re.match(password3))
print(result_re.match(password4))
print(result_re.match(password5))
print(result_re.match(password6))
```

运行结果  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/2ac127486f9395f34369e9864658a5f9.png)

#### 到此正则的学习到此结束，还有不足欢迎指正一起学习！

## 给大家一个学习正则的网站

[正则学习-github](https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md)
