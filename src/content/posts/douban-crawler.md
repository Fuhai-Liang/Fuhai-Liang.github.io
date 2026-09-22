---
title: "【Python 爬虫基础与豆瓣爬取实例(包含Xpath)】"
description: "爬虫基本应用、网页抓包与 XPath 学习，附豆瓣爬取实例。"
category: project
project: other
badge: "项目"
tags: []
date: "2023-11-20"
pinned: false
draft: false
---

## 准备工作

下载需要的库requests，lxml，fake\_useragent

```
pip install requests
pip install fake_useragent
pip install lxml
```

下载速度慢可以用国内镜像

```
pip install requests -i https://pypi.tuna.tsinghua.edu.cn/simple
pip install fake_useragent -i https://pypi.tuna.tsinghua.edu.cn/simple
pip install lxml -i https://pypi.tuna.tsinghua.edu.cn/simple
```

## 第一个爬虫文件

爬虫的含义就是伪装成为浏览器上网  
 fake\_useragent.UserAgent().random这个工具包就是伪装成浏览器不用每次都需要去复制浏览器检查中的user-agent

```
# 获取url
url = 'https://www.xxxx.com/'

# UA 伪装  你不能顶着我是python爬虫包的名义去爬网站
head = {
    # "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0"
    "User-Agent": fake_useragent.UserAgent().random
}

# 发送请求
response = requests.get(url, headers=head)

# 获取相应的数据
res_text = response.text
# 存储
with open("./xxxx.html", "w", encoding="utf-8") as fp:
    fp.write(res_text)
```

上述代码就是一个爬虫的基本框架

tip：请求这个网站可以看到自己的ip地址

```
import requests

# 请求网站 https://httpbin.org/get

# 获取url
url = 'https://httpbin.org/get'
# 发送请求
response = requests.get(url)

# 获取相应的数据
print(response.text)
```

## get请求，POST请求和阿贾克斯请求

上述代码都是get请求方法，大部分的网站都是get请求。但是当你需要在网页上输入参数时即为一个POST请求。最有代表性的即为网页的在线翻译，像淘宝网站的评论，你不刷新，不会出现的就为阿贾克斯请求。

### get请求

我们正常的爬取则在Google，火狐，或IE浏览器中进行右击检查，点击网络刷新页面。然后在抓的包中前6个就可以找到主页面的包。

#### “你好”的搜索页面

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/25bb37c272f1181c02a6404329ba061d.png)  
 即第三个就是此页面被抓取的包

#### 认识元素

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/a34f01c6773ea64bc829c4edf58c1655.png)  
 URL：页面真正的url  
 request 方法：get方法  
 状态码：200正常（绿色的都是正常的）

### POST请求和阿贾克斯请求

来看某网页翻译  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/27b498b9717bca223c1378b1f23acd59.png)

#### 认识POST请求的页面元素

我们在输入单词DOG时会有post的请求，我们也可以从XHR中看到阿贾克斯请求。  
 分别点6，7这个文件可以在preview中看到你分别输入的三个字母D，O，G都被抓包抓到了。  
 其他的页面类似。

### 爬取翻译的实例

```
# 爬取翻译数据

# 指定url 
url = "https://fanyi.xxxx.com/sug"

# UA伪装
head = {
    "User-Agent": fake_useragent.UserAgent().random
}
datas = {
    "kw": "boy"
}
# 发送请求
response = requests.post(url, headers=head, data=datas)

# 获取相应的数据
print(response.json())

# get 和 post 请求的区别
# 参数是否明文待在url里 -》 post 请求相较于get请求更安全
# get和post携带参数的大小不一样
```

## Xpath的基础学习

test.html

```
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>测试bs4</title>
	</head>
	<body>
		<div>
			<p>百里守约</p>
		</div>
		<div class="song">
			你好
			<p>李清照</p>
			<p>王安石</p>
			<p>苏轼</p>
			<p>柳宗元</p>
			<a href="http://www.song.com/" title="赵匡胤" target="_self">
				<span>this is span</span>
			宋朝是最强大的王朝，不是军队的强大，而是经济很强大，国民都很有钱</a>
			<a href="" class="du">总为浮云能蔽日,长安不见使人愁</a>
			<img src="http://www.baidu.com/meinv.jpg" alt="" />
		</div>
		<div class="tang">
			<ul>
				清明时节雨纷纷,路上行人欲断魂
				<li>
					<a href="http://www.baidu.com" title="qing">
						清明时节雨纷纷,路上行人欲断魂,借问酒家何处有,牧童遥指杏花村
					</a>
				</li>
				<li>
					<a href="http://www.163.com" title="qin">
						秦时明月汉时关,万里长征人未还,但使龙城飞将在,不教胡马度阴山
					</a>
				</li>
				<li><a href="http://www.126.com" alt="qi">岐王宅里寻常见,崔九堂前几度闻,正是江南好风景,落花时节又逢君</a></li>
				<li><a href="http://www.sina.com" class="du">杜甫</a></li>
				<li><a href="http://www.dudu.com" class="du">杜牧</a></li>
				<li><b>杜小月</b></li>
				<li><i>度蜜月</i></li>
				<li><a href="http://www.haha.com" id="feng">凤凰台上凤凰游,凤去台空江自流,吴宫花草埋幽径,晋代衣冠成古丘</a></li>
			</ul>
		</div>
	</body>
</html>
```

```
from lxml import etree

tree = etree.parse("./test.html")

# xpath 返回的数据都是列表
# 寻找百里守约对应的p标签
# 会寻找符合规则的所有标签
print(tree.xpath("/html/body/div/p"))
# 寻找第一个div标签下的数据  索引从1开始 索引定位
print(tree.xpath("/html/body/div[1]/p"))
# 两个p标签
print(tree.xpath("/html/body/div/p[1]"))
# 属性定位   @attr(class、id) = 'xxx'
print(tree.xpath("/html/body/div[@class='song']/p[1]"))
print(tree.xpath("/html/body/div[@class='tang']/ul/li[1]/a"))
# / 表示一个层级目录  // 表示多个层级目录 一般和属性定位配合使用  不限制后面的使用
print(tree.xpath("//div[@class='tang']/ul/li[1]/a"))
print(tree.xpath("//div[@class='tang']/ul/li"))

# 取标签下的文本值 /text() 该标签下的直系文本内容  //text() 该标签下的所有文本内容
print(tree.xpath("/html/body/div[1]/p/text()")[0])
print(tree.xpath("/html/body/div[@class='song']//text()"))
# 读取属性值  /@attr
print(tree.xpath("//div[@class='tang']/ul/li[3]/a/@href")[0])
```

xpath主要是找到你要爬取的那一层级的上一层唯一的层级，然后接着这一层级向下查询

## 电影Top250排行榜

```
import fake_useragent
import requests
from lxml import etree

# 爬取top250的电影信息

# UA伪装
head = {
    "User-Agent": fake_useragent.UserAgent().random
}
fp = open("./douban.txt","w+",encoding="utf-8")
# 指定url
for i in range(0,250,25):
    url = f"https://movie.xxxx.com/top250?start={i}&filter="
    # 发送请求
    resp = requests.get(url, headers=head)

    # 获取响应的数据
    res_text = resp.text

    # 数据解析
    tree = etree.HTML(res_text)

    li_list = tree.xpath("//ol[@class='grid_view']/li")

    # print(li_list)
    for li in li_list:
        try:
            movie_name = li.xpath(".//div[@class='hd']/a/span[1]/text()")[0]
            movie_director_actor = li.xpath(".//div[@class='bd']/p[1]//text()")[0].strip()
            movie_year_country_type = li.xpath(".//div[@class='bd']/p[1]//text()")[1].strip()
            movie_star = li.xpath(".//span[@class='rating_num']/text()")[0]
            movie_quote = li.xpath(".//div[@class='bd']/p[2]/span/text()")[0]
            # 判断是否空
            # movie_quote = None if len(movie_quote) == 0 else movie_quote[0]
        except Exception as e:
            print(e)
        else:
            fp.write(movie_name+"@"+movie_director_actor+"@"+movie_year_country_type+"@"+movie_star+"@"+movie_quote+"\n")
        print(movie_name, movie_director_actor, movie_year_country_type,movie_star,movie_quote)

# 持久化存储
fp.close()
```
