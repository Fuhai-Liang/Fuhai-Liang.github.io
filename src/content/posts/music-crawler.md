---
title: "【爬取音乐,并将音乐信息储存到数据库中】"
description: "结合 Selenium 与 PyMySQL，将爬取的音乐数据保存到数据库和文本文件。"
category: project
project: other
badge: "项目"
tags: []
date: "2023-12-07"
pinned: false
draft: false
---

## 确定音乐网站的url并分析网站

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/61214f708adf0db273f98be5f11a823c.png)

## 分析二级页面

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/316f0c644a586c2c64def7ac201b657c.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/e7c5668c572377314cf7a999f129f1d1.png)

## 创建数据库

```
# 创建一个链接对象
conn = pymysql.connect(host='master', user='root', password='123456', port=3306, db='spider')
# 创建游标
cur = conn.cursor()
sql_createTb = """CREATE TABLE music (
                 id INT NOT NULL AUTO_INCREMENT,
                 title VARCHAR(255),
                 signer  VARCHAR(255),
                 zuoci VARCHAR(255),
                 zuoqu VARCHAR(255),
                 album VARCHAR(255),
                 PRIMARY KEY(id))
                 """
```

## 使用Xpath解析，进行多层爬取

```
print("开始爬取欧美音乐榜单")
url = 'https://music.xxxxxxx.cn/v3/music/top/eur_usa'
driver_chom = webdriver.Chrome()
driver_chom.get(url)
# 使用xpath解析获取音乐的榜单
music_list = driver_chom.find_elements(By.XPATH, '//div[@id="js_songlist"]/div')
print(music_list)

# 进一步获取单个音乐的连接 进入详细页面 获得歌词 歌名 歌手 等信息
for url in music_list:
    detail_url = url.find_element(By.XPATH,'div[3]/span/a').get_attribute('href')
    print(detail_url)
    driver_edge = webdriver.Edge()
    driver_edge.get(detail_url)
    time.sleep(6)
    try:
        title = driver_edge.find_element(By.XPATH,"//div[@class='info_contain']/h2").text
        print(title)
        singer = driver_edge.find_element(By.XPATH, "//div[@class='info_singer']/a").text
        print(singer)
        zuoci = driver_edge.find_element(By.XPATH,"//div[@class='info_about']/p[1]/span").text
        print(zuoci)
        zuoqu = driver_edge.find_element(By.XPATH,"//div[@class='info_about']/p[2]/span").text
        print(zuoqu)
        album = driver_edge.find_element(By.XPATH, "//div[@class='info_about']/p[3]/span/a").text
        print(album)
```

## 保存信息

```
# 将歌曲的信息写入到数据库中
        print("将歌曲的信息写入到数据库中!")
        number = 0
        insert_sql = f"insert into music() values({number},'{title}','{singer}','{zuoci}','{zuoqu}','{album}')"
        try:
            cur.execute(insert_sql)
        except Exception as e:
            # 回滚事件
            conn.rollback()
        conn.commit()
        print("写入完成！")
        # 数据库的信息写入完毕开始保存歌曲的歌词
        file = open(f'./output/歌词信息/{title}_{singer}.txt', 'w',encoding='utf-8')
        try:
            geci = driver_edge.find_elements(By.XPATH,"/html/body/div[3]/div/div/div/p")
            for i in geci:
                file.write(i.text+'\n')
        except Exception as e:
            geci = driver_edge.find_element(By.XPATH, "/html/body/div[3]/div/div/div/p")
            file.write(geci.text+'\n')
        # 关闭歌词文件写入
        file.close()
```

## 完整代码

```
#!/usr/bin/env python
# -*- coding: utf-8 -*-
# time: 2023/12/7 19:32
import time
import pymysql
from selenium import webdriver
from selenium.webdriver.common.by import By

# 创建一个链接对象
conn = pymysql.connect(host='master', user='root', password='123456', port=3306, db='spider')
# 创建游标
cur = conn.cursor()
sql_createTb = """CREATE TABLE music (
                 id INT NOT NULL AUTO_INCREMENT,
                 title VARCHAR(255),
                 signer  VARCHAR(255),
                 zuoci VARCHAR(255),
                 zuoqu VARCHAR(255),
                 album VARCHAR(255),
                 PRIMARY KEY(id))
                 """
try:
    cur.execute(sql_createTb)
except Exception as e:
    # 回滚事件
    conn.rollback()
conn.commit()
print("数据库建立完毕！")

# 爬取咪咕音乐 并且保存到数据库中
# 1.先确当url
print("开始爬取欧美音乐榜单")
url = 'https://music.migu.cn/v3/music/top/eur_usa'
driver_chom = webdriver.Chrome()
driver_chom.get(url)
# 使用xpath解析获取音乐的榜单
music_list = driver_chom.find_elements(By.XPATH, '//div[@id="js_songlist"]/div')
print(music_list)
# 进一步获取单个音乐的连接 进入详细页面 获得歌词 歌名 歌手 等信息
for url in music_list:
    detail_url = url.find_element(By.XPATH,'div[3]/span/a').get_attribute('href')
    print(detail_url)
    driver_edge = webdriver.Edge()
    driver_edge.get(detail_url)
    time.sleep(6)
    try:
        title = driver_edge.find_element(By.XPATH,"//div[@class='info_contain']/h2").text
        print(title)
        singer = driver_edge.find_element(By.XPATH, "//div[@class='info_singer']/a").text
        print(singer)
        zuoci = driver_edge.find_element(By.XPATH,"//div[@class='info_about']/p[1]/span").text
        print(zuoci)
        zuoqu = driver_edge.find_element(By.XPATH,"//div[@class='info_about']/p[2]/span").text
        print(zuoqu)
        album = driver_edge.find_element(By.XPATH, "//div[@class='info_about']/p[3]/span/a").text
        print(album)
        # 将歌曲的信息写入到数据库中
        print("将歌曲的信息写入到数据库中!")
        number = 0
        insert_sql = f"insert into music() values({number},'{title}','{singer}','{zuoci}','{zuoqu}','{album}')"
        try:
            cur.execute(insert_sql)
        except Exception as e:
            # 回滚事件
            conn.rollback()
        conn.commit()
        print("写入完成！")
        # 数据库的信息写入完毕开始保存歌曲的歌词
        file = open(f'./output/歌词信息/{title}_{singer}.txt', 'w',encoding='utf-8')
        try:
            geci = driver_edge.find_elements(By.XPATH,"/html/body/div[3]/div/div/div/p")
            for i in geci:
                file.write(i.text+'\n')
        except Exception as e:
            geci = driver_edge.find_element(By.XPATH, "/html/body/div[3]/div/div/div/p")
            file.write(geci.text+'\n')
        # 关闭歌词文件写入
        file.close()
    except Exception as f:
        print("*********************Error*********************")
        continue
# 关闭数据库访问
cur.close()
conn.close()
```

## 结果

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/97d518332c3e45e813324122a8647458.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/70141db20ce40c4cb61691e4c347e0a8.png)

欢迎学习指正！！！！！
