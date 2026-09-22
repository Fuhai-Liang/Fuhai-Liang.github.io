---
title: "【MySQL环境配置在虚拟机中】"
description: "在 Linux 虚拟机中配置 MySQL。"
category: note
badge: "笔记"
tags: []
date: "2023-11-30"
pinned: false
draft: false
---

## 先检查虚拟机中是否有MySQL

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/fb22071536f828cbb13f0bfeb44d96c2.png)

### 在线安装

#### 1.下载yum Repository

```
下载yum Repository
wget http://repo.mysql.com/mysql-community-release-el7-10.noarch.rpm
```

有时候会遇到错误  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/63526bd34d73df597ce6755601c9358a.png)  
 此时可以用离线安装 如果没有报错则接下来进行

#### 2.安装yum Repository

```
yum -y install mysql57-community-release-el7-10.noarch.rpm
```

#### 3.安装mysql5.7的服务

```
yum -y install mysql-community-server
```

如果报错 原因是：Mysql的GPG升级了，需要重新获取  
 使用以下命令即可

```
rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
```

在将安装服务的命令重新执行一遍

#### 4.开机自启动

```
systemctl enable mysqld.service
```

#### 5.启动mysql

```
systemctl start mysqld.service
```

#### 6.查看状态

```
systemctl status mysqld.service
```

#### 7.获取临时密码

```
grep "password" /var/log/mysqld.log
```

#### 8.登录mysql

```
mysql -uroot -p
```

#### 9.关闭密码复杂验证

```
set global validate_password_policy=0;
set global validate_password_length=1;
```

#### 10.设置密码

```
alter user user() identified by "123456";
```

#### 11.修改权限

```
use mysql;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;  --修改权限
flush privileges;  --刷新权限
select host,user,authentication_string from user; --查看权限
```

#### 12.卸载yum Repository

因为安装了Yum Repository，以后每次yum操作都会自动更新，需要把这个卸载掉：

```
yum -y remove mysql57-community-release-el7-10.noarch
```

注意如果安装中出现错误 则卸载MySQL删除依赖包

```
rpm -qa |grep -i mysql
yum remove mysql-community mysql-community-server mysql-community-libs mysql-community-common
find / -name mysql
rm -rf 文件名
```

### 离线安装

#### 1.先找一下机器所有关于MySQL的文件，删除

```
rpm -qa|grep mysql
rpm -qa|grep MySQL
rpm -qa|grep mariadb
```

卸载查询到的包

```
rpm -e --nodeps xxx
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/1201bc772737561033479b5e465047f7.png)  
 防止以后每次yum操作都会自动更新，需要把这个卸载掉：

```
yum -y remove mysql57-community-release-el7-10.noarch
```

如果安装的过程出现了错误，需要卸载mysql的方法  
 卸载mysql 删除依赖包

```
rpm -qa |grep -i mysql
yum remove mysql-community mysql-community-server mysql-community-libs mysql-community-common
```

清理文件

```
find / -name mysql
rm -rf 文件名
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/0cee89125c5155f64887caabf87256fc.png)

#### 2.安装Mysql

进入到 /usr/local/soft 文件夹下 放入四个MySQL文件  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/79d6bcaf85a3b3b00d4680a836fb92cb.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/36caa2980a57c489c3ee39df09768ee7.png)  
 MySQL服务端的安装包为server，  
 安装的顺序为：**common -> libs -> client -> server**。

```
rpm -ivh mysql-community-common-5.7.25-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-5.7.25-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-5.7.25-1.el7.x86_64.rpm
rpm -ivh mysql-community-server-5.7.25-1.el7.x86_64.rpm
```

如果安装server出错 先安装其依赖包在安装server服务

```
yum install net-tools
rpm -ivh mysql-community-server-5.7.25-1.el7.x86_64.rpm
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/b80e402740f27017b8fd3049d2ef7e47.png)

#### 3.后续配置命令

##### 1.开机自启动

```
systemctl enable mysqld.service
```

##### 2.启动mysql

```
systemctl start mysqld.service
```

##### 3.查看状态

```
systemctl status mysqld.service
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e0620a1383cd47abfea8efdf8708d4eb.png)

##### 4.获取临时密码

```
grep "password" /var/log/mysqld.log
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e1b13f103d97f1630b38240cdc672c6b.png)

##### 5.登录mysql

```
mysql -uroot -p
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/3e21aa5b5dce30931cd684b457a6a3b4.png)

##### 6.关闭密码复杂验证

```
set global validate_password_policy=0;
set global validate_password_length=1;
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/c6ef03df2d81a09585f57815a3f1b72f.png)

##### 7.设置密码

```
alter user user() identified by "123456";
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/f1b40cf8dc5aaf614d95dfd2243db897.png)  
 改为了新密码 123456

##### 8.修改权限

这个是让三台虚拟机都可以访问此电脑的数据库

```
use mysql;
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;  --修改权限
flush privileges;  --刷新权限
select host,user,authentication_string from user; --查看权限
exit; -- 退出mysql
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/8d83a3872aaac5db046fac66e85e5650.png)

##### 9.修改字符集

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/08c6b3eecf648d38a320849f7ccd5800.png)  
 vim /etc/my.cnf  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/5363e19e5a07ac9fb038210055998686.png)

```
[mysqld]
character-set-server=utf8 
[client]
default-character-set=utf8 
[mysql]
default-character-set=utf8
```

加入这三行位置如下  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e749de3625e1ebc87457cc208caffc27.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/8cddd91a6b91cd3c8302941919d17b7e.png)  
 刷新重启一下

```
systemctl restart mysqld
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/2ff9d037e53a16c50f4f912ac5797905.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/6646acb101768095dd63b7b33f05f916.png)  
 编码模式修改完成。

至此MySQL的环境配置完成，即可以进行简单的使用。
