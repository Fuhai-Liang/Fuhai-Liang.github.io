---
title: "Linux简单命令"
description: "Linux 的一些基本命令。"
category: note
badge: "笔记"
tags: []
date: "2023-11-24"
pinned: false
draft: false
---

## 目录结构

1. bin 存放二进制的可执行文件(exe可执行文件)
2. etc存放系统配置文件
3. home存放所有用户的根目录 要与/ 区分  
    例如：  
    有一个fuhai用户 在/home/fuhai 是其根目录  
    / 为root文件的主目录 （家目录）
4. lib存放文件系统中的程序运行所需要的共享库
5. usr存放系统应用程序，比较重要的目录为/usr/local 管理员安装目录
6. sbin 存放管理级别的二进制执行文件

## 基本命令

### mkdir 新建文件夹

mkdir aaa ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/387329fa8f5695c83d22b92108a997b7.png)  
 mkdir -p bbb/a 即建造c文件夹的父文件夹，要使用-p不然无法创建  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/d801ff0f0eb694bd9b31d58d531a30bf.png)

### cd 改变文件，进入不同的文件

change director

1. 去根目录 cd / ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/127e78be29c568efe91225d2e237f7c8.png)
2. cd 去root用户的家目录 /root  
    ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/91f90d84199043b052a2dd68c3063d5b.png)
3. cd ~ 去家目录（fuhai，xxx用户）/home/fuhai  
    ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/d21b5ebe38b86e1b940d9f80a36c2519.png)
4. 去一个文件下用绝对路径 cd /home/fuhai![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/737470191ee43053152c8c859e4500d6.png)
5. 去上一级目录cd … ，切换当前目录cd . ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/5470eb832c3c214d7936794185603b94.png)
6. cd - 返回上一次所在的位置![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/a69e19f95fbab2d5b4ca3a84fe15f28b.png)

### ls 展示当前文件下的所有文件

list 命令展示当前文件下的所有文件

1. ls![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/eaf0ad870f44b6bd1beee95a50faf672.png)
2. ls -l 展现较全的文件信息 缩写成ll![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/ec6f937c00bcf5c2e5e5afb8d3014931.png)
3. ls -a 展现出隐藏文件 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/348e1e8e4d02477944e22c7a44af8d70.png)  
    前面有点的文件即为隐藏文件

### pwd 查看当前的所在的位置（绝对路径）

查看当前的所在的位置（绝对路径）

### vim 创建并且编辑一个文件

创建并且编辑一个文件，按 i 键进行插入写，按esc-》：-》wq 代表保存并退出

### touch abc.txt 创建一个空文件

touch a 也是一个文件 但是不知道是什么类型的  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/c10bd3a140cb3ec8b84e01d392f0df7c.png)  
 与vim不同的是可以创建出来不写，但是vim创建出来要写 要是不写的话则不会创建成功。

### cat 查看文件正向

为查看文件正向，正方向查看  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/46c9d9086d511d3835b039bf94b917ef.png)  
 cat /etc/group 看用户组的状况（只看用户组）  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/db057de09b368025b16ac2db3a9167b0.png)

cat /etc/passwd 在root下看所有用户的情况  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/8cc080d8e9ce115b49291aba0c3a81bc.png)

### cat b.txt c.txt > d.txt 文件b，c合并成d

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/f8457bf00ab7eabb2b9f332828a03c81.png)

### 当文件很多行用more 文件名 来查看

### tac 为反方向查看文件

为反方向查看文件![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/9e89a549c687d1b8368c0ec6792f7d75.png)

### chmod 改变用户权限

change mode 改变模式，即改变三种用户对此文件的权限  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/208cebfd7cb6a285a5f3caab47cc0bb0.png)  
 d代表文件的意思  
 rwx 为  
 r 可读 数字代表为4  
 w 可写 数字代表为2  
 x 可执行 数字代表为 1  
 数字 7 代表可读可写可执行  
 三者依次对应

有三对rwx r-x r-x  
 第一个为own拥有者的权限 缩写 u  
 第二个为拥有者组下面的组的权限 缩写 g  
 第三个为其他人的权限 缩写 0

第一个root为用户  
 第二个root 为 root用户组 目前root用户组中只有一个root

#### chmod o-r a.txt 取消其他用户的读权限

chmod g-r a.txt 取消同一组下面的组元的读权限  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/b86c8159b99b150def9bae349f26fd57.png)  
 chmod u-w a.txt 取消拥有者的写权限  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/b087f6bb5cd3d8f76c6601e8b4c33397.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/f56e3836dca7dc4da27fbc020783a676.png)  
 由于root是最高权限组所以还是可以强制写 ，但是其他用户一旦更改，就不能在写了 ，只能读。

#### chmod o+rwx a.txt 给其他用户所有权限

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/5eaa13f58330311bf2e307c216e5d935.png)

#### chmod 777 a.txt 给所有用户可读可写可执行权限

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/b9f376c5c0fc48f758d8e7b64a34efe4.png)

#### chmod 751 a.txt

给拥有者所有权限  
 给同一组的用户可读可执行权限  
 给其他用户可执行的权利![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/84e0e6b3650eed0805821354799b98fd.png)

#### chmod -R 777 aaa 给aaa目录下所有的文件修改权限

即进行递归化的修改权限 全部的文件权限都要修改  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/4c08b1ea336f15e156ef8d25e768649a.png)

### chown fuhai:liang c.txt 使用root改变文件的所属者

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/38fe13fa9eeb95a163f36946b0b1920c.png)

### useradd 新建一个用户

要用root用户增加  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/13bdf77aacafa1acae707f031355c329.png)  
 useradd -g liang fu 给liang组下新建一个用户为fu 即fu属于liang用户组下  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/cc2b39d2b756bce20d7a02012dce7511.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/2712dfaf6bc318eedf9f27a9d4c99a26.png)

### userdel fu 删除一个用户

这样主目录没有删除，文件夹还在 新建另一个用户的时候会自动继承这个文件夹。  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/62035da799d989254f5368e8e7e5db97.png)

### usermod -g liang fu2 将fu2这个用户的用户组改为liang

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/80693a8578c0a944e1173cb3e3eba057.png)

### passwd 用户名 进行修改密码

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/6d3994bd6067925e2c39d6769d0aa895.png)

### stat a.txt 查看文件信息

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/369c7d0e8fdc62ccfdbc68405f7289c0.png)

### mv a.txt b.txt 将a.txt重命名为b.txt

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/a0e442b9d4bf842583cfaa2436fcbbd3.png)

### mv b.txt aaa/ 将b.txt 移动到aaa文件夹下

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/930684abec07d41ecd6fb68fcef0da79.png)

### mv abc.txt bbb/xyz.txt 将abc.txt移到bbb中并改名为xyz.txt

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/72c3f5cb5074b786c4fe453b35d6220b.png)

### rm xyz.txt 删除文件

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/32d0f78256dd697d4db57e57bb1a6fba.png)

### rm -r a 递归删除a文件夹下的所有东西

删除文件夹要用-r  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/3bffe929d27830fd9b2eff1184f232d6.png)

### rm -f aa.txt 强制删除aa.txt文件

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/1da0dbb53c0272797b479df4b25a2501.png)

### rm -rf bbb 直接强制删除bbb文件夹

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/b07bf2b8dc59a4091bc04c87b987ec19.png)

### rm -rf /\* 删库跑路（谨慎使用）

rm -rf /\*

### cp b.txt …/ccc/ 将aaa下的b.txt复制到ccc

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/94955657196b26414e76a3743d7e75bf.png)

### cp b.txt …/ccc/c.txt 复制到ccc顺便改个名字

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/53624a6c223171ebce0e351039fd0f9d.png)

### history 看本次登录使用的所有命令

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/72df90068dfe4d9beb9af1738159bf90.png)

### du -h 以人类的形式看文件大小

du -h 以人类的形式看文件大小![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/579229017d701d7fc08cf9c1c0368dfe.png)

### du -sh ccc/ 查看ccc文件大小

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/cceff548143151d977d0cda94f7ce34b.png)

### df -h 看目前linux磁盘使用情况

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/55bbbcf91d0acac6442d33a6d9b217cf.png)

### ll -h 以人类方式看占用大小

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/2226f4ff919f015571f544b51319586c.png)

### vim三种模式 命令模式 插入模式 末行模式

### 解压缩tar命令

#### 打包成tar包 之后要在压缩

打包单个文件 tar -cvf a.tar a.txt  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/23f0ff16bb7a40c5a911d24c0d3dc0ac.png)  
 打包目录 tar -cvf c.tar ccc/  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/fab35fa110db3b6c533895356b77d752.png)  
 直接使用命令 打包压缩一起  
 tar -zcvf c.tar.gz a.txt  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/b0761a5854c1de0f70ac0bbba9c9f786.png)  
 解压缩命令  
 解包命令指定文件夹需要用-C命令  
 tar -xvf a.tar -C ./ccc/cc/  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/744f9fff7a94a52cfb0fcaf02e10e0ff.png)  
 直接使用命令解压缩包  
 tar -zxvf c.tar.gz -C b![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/5cdbc9574cbba804b42760b26309be2d.png)

### netstat -nlpt 和 netstat -tnl

监控tcp 和 ip网络

### ps 看当前进程的

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/3e2bb04142dab44290b620cc4f701026.png)

### ps -aux 看所有后台进程

### jps 看当前的java进程的 ，在hadoop中需要使用

### ps -aux | grep sh 管道抓取监控带sh的进程

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/555a585c097d091b64327f3b5ba77ee1.png)

### ll | grep c 抓取名字带c的文件 管道的用处很多

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/475cd1c16d20ec2f7e0c171452534798.png)

### find / -name fig\* 在根目录下找fig开头的所有文件返回路径

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/ab45f4f1c2cb2b116e5df6c3f832229c.png)

### find . -name file.txt 在当前目录下找file.txt

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/0c382fc4681e46fa6daf3fb21297d1b7.png)

### whereis XXXX 找环境变量的路径

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/bdd49f211bdd84d6f7448fb9eb29c177.png)

### top 命令 展现自己的内存使用量和swap交换空间使用 和任务总量

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/c6e8845826280da3d00fd35aa46e0b5b.png)
