---
title: "【Selenium爬取小说】"
description: "用 Selenium 爬取想读的小说并下载保存。"
category: project
project: other
badge: "项目"
tags: []
date: "2023-12-03"
pinned: false
draft: false
---

## 确定url

找到你所需要的网站 然后进行分析检查 。  
 ==注意: 进行搜索元素时 会有一个ctrl+f的操作  
 看class 或者 id 后面等于的值的时候 match 不一定是1 但是只要 这个标签下id=的这个值是唯一标识的即可 ，因为你搜索的是全部的整个页面下的这个值 但是class[id=xxx]这个会可能是唯一的。

## 进行分析页面在爬取

可以发现都在dd标签下  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a63566484a6d41f1ade3354427b67d16.png)  
 多层爬取 进入这个页面 然后爬取这一章的内容  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d66ed36f4082a780eae2c40de02d6e23.png)  
 可以发现内容都在这个标签下  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/893ee437c5f79759bdd54d01683bf5df.png)

我们打开一个文件接受这个文本即可

## 爬虫代码

```
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

file = open('./output/xxx/明克街13号.txt','a',encoding= 'utf-8')
driver = webdriver.Firefox()
url = 'https://www.xxxxx.bz/book/54529/'
driver.get(url)
dd_list =driver.find_elements(By.XPATH,"//div[@id='list']/dl/dd")
print(dd_list)
number = 1
for i in range(12,len(dd_list)):
    print(f'爬取第{number}章')
    detail_url = dd_list[i].find_element(By.XPATH,'a').get_attribute('href')
    print(detail_url)
    driver_chmo = webdriver.Chrome()
    driver_chmo.get(detail_url)
    response = driver_chmo.find_element(By.XPATH,'//div[@id="content"]')
    print(response.text)
    file.write(response.text+f'\n   第{number}章   \n')
    number = number + 1
    time.sleep(3)
file.close()
```

爬取的结果  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a5ab2c999c4d48339be48ec36ca6a80c.png)  
 欢迎批评指正
