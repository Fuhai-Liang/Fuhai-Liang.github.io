---
title: "【用VM搭建虚拟机并进行网络配置,修改名称,配置java环境】"
description: "虚拟机安装、网络配置、修改名称与 Java 环境配置。"
category: note
badge: "笔记"
tags: []
date: "2023-11-25"
pinned: false
draft: false
---

先下载vm16 下载linux镜像文件iso
可以私信找我提取

## 1.第一步打开vm，创建一个node1虚拟机

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/1cf1f4a77027e4f6fae2c611a07429a7.png)

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/d9f0ce85efde5cb4dfcc53c8d9a2d599.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/233ffa4a1afff34cdca4e11848e06f1e.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/07978ef70acbceb64c5e1b78ac4ad525.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/f74526e68d46be55939cbddacfbcfd5d.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/328bcb786a8cfdbe1e56ca161e2e46c1.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/62463f1a28a71b2e75359b51d5740423.png)  
 此时最基本的完成，vm上会显示一个node1虚拟机

## 2. 编辑虚拟机的设置

先不要开启此虚拟机，要先进行虚拟机的设置  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/e409d67db6079506573f196ca828463d.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/f12b2d1243c23e4870124356afdd9631.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/0a38d688e9d227cd0b8e96c0f68d432b.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/f4daf8c12bdffc19dace72b957bbdce0.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/72db39622042d995d26b158c973a4ab8.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/00096aa44b65e6c3721e0f8008fde1dc.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/d6cb33da0d27472d6ac6b005a5aa6ce2.png)  
 接着启动虚拟机

## 3.启动虚拟机

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/e4d0f7f063df81bf079fb2264873474d.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/d784510e2a11adc23c9dcc3bc6ad1263.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/27dd6449b548a969236b6b4590341ce0.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/641b279accf1517129618df5608c8f1b.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/535e54d4e9aaf70a2b0d0f8dda24aa9a.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/cd46a74a14fe5f59770b4c06a89a1a1e.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/1c4947c5d77c83e5f31f2be347addd52.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/a99df2cbeb9eefa1b3d2e6fef043cd52.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/b29b0f312b9fd19e6d3e7586cb1891a4.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/1774756a92d8551dc4b5b0da3904fea2.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/e2df981806c0f31cc5f1c90290ba4ec8.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/e5ff74c74cbbdaf0dea7f1c142978b55.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/4ad00a2c6f5b189b26db0c1f3e88827c.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/066bebb6674bad41ced0ddd07be47c68.png)  
 重启虚拟机进入界面![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/4f26ff8b12b7e94fadb323aa573769bb.png)

## 4.重启虚拟机 配置文件

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/1c84870a16b4532550963fde85c7787e.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/5a314b7f25c319ef4c1c9f6dc21a02af.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/3403318f2ebf5c4f79ad0bfe6f2011e1.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/f627b79ff70b917ec99989d0524d52fb.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/f0d85c7c11f26e4f5145a48332a85b03.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/3a148767050ab9a1523e930cd89925f6.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/f5e134e23484d5cda29e24c3d9129dea.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/1740d25109efcfd482532833044c2000.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/1287f71634f608f16c04bca801cd8ad5.png)

## 5.配置网络，固定端口号

固定端口号容易寻找和记住为后面的Hadoop学习很有帮助

先去本机的终端查看  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/37a6d67764181bf1e9e1a436bdc2ad9e.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/4ac480c9bd2d48df5f6bf7bbb0f21833.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/c551b21fabf6398ca8a603d08e12b9f4.png)

```
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens32
UUID=ad03b236-c24d-48d1-a181-8c255c8ca693
DEVICE=ens32
ONBOOT=yes
IPADDR=192.168.31.101
NETMASK=255.255.255.0
GATEWAY=192.168.31.2
DNS1=223.5.5.5
DNS2=180.76.76.76
```

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/66921e2b631ffb3385b48c771699a8d1.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/81cfd079dc8da35a44e96be96606995b.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/754991cc49a18aaae11630ac0224adc9.png)  
 此时虚拟机的网络端口号固定完成 可以使用xshell进行链接

## 6.Xshell 连接虚拟机 并且去掉虚拟机的图形化界面

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/88d1e19bb77558ddc8465278f2bc51ef.png)  
 接着在用户身份验证中输入root 和密码  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/ab2d5de1df03c65ab3e7d798a1360692.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/1f9e180d058d5743cde35d120e4e9ea0.png)  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/97f6215c60d7bdde8f55931aab5ac90b.png)

## 7.修改主机名

由于要安装三台虚拟机 所以会发现当主机名都为【root@localhost】时有时会很难分辨 所以将三台主机名分别修改为 master ，node1 ，node2 这样在之后链接虚拟机进行hadoop等其他操作时会很简单  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/3077c3075c9c3fbf47aeec8ac409d1ec.png)  
 输入以上命令并且重新启动  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/40c9d373896d65e10a2095c97668cebb.png)  
 剩下的机器同样如此配置

## 8.配置ip地址和名称的映射

比如master要ping 主机node1 需要写 ping 192.168.31.101 此时就会很麻烦 现在我们可以将 这个ip与node1做一个映射关系 ping node1 就可以 会很方便很多 为之后的操作打下方便的基础 在Windows主机上也建议进行修改 三台虚拟机都要修改 修改的内容一样  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/113d779872f072a517e78f929b3235dc.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/c9675d11c4741066e9c6c443b5e17be8.png)  
 此时在ping就不用写ip而是写ping 主机名即可  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/5e21706e3c0b7c45395f59114518ad87.png)

同样在Windows下也要配置这个文件 之后也会很方便  
 在C盘下的路径为 C:\Windows\System32\drivers\etc 会发现一个hosts文件 将此文件用vscode打开进行修改 修改的内容一样

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/fd118560c1616d2a018272cf085007cc.png)  
 保存之后 在cmd 下ping 主机名  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/f8ce83a62dfa91ddd663f5b7530d0189.png)  
 至此修改主机名结束

## 9.关闭防火墙

虚拟机的防火墙一定要关闭 不然之后做分布式项目可能会被墙掉  
 先查看一下防火墙的状态  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/26536a69c14a3788b9b4cca401774987.png)  
 使用命令关闭防火墙 并且让自启动服务关闭  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/fa68e5a37d40ce73c77f36e86d54faf7.png)  
 关闭防火墙完成

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/7b5741df3c8c2f27bc8e9f864e0d8a94.png)

## 10.yum 下载命令换源 使用阿里云的源

三个虚拟机分别输入以下命令进行换源 为了之后的下载速度更快

```
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup

wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo

sed -i -e '/mirrors.cloud.aliyuncs.com/d' -e '/mirrors.aliyuncs.com/d' /etc/yum.repos.d/CentOS-Base.repo

yum makecache
```

测试下载  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/ad96b5f5608a636b519ebfa4f574b1b7.png)  
 参考[阿里云](https://developer.aliyun.com/mirror/centos?spm=a2c6h.13651102.0.0.3e221b115Ci1Y6)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/43752073a75fafa8fd44f3f6e0c6ae4b.png)

## 11.配置jdk

可以先下载这个lrzsz ，这个可以直接将本机下载的jdk包直接拖进虚拟机中使用  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/3cd8e7c8159f71e1569063a6d35a0d75.png)  
 在 /usr/local/ 下新建一个 soft文件夹  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/2627c0dee81d47e2d8b6a4cdad6b3560.png)  
 将下载好的jdk放在这个soft文件夹下直接解压缩  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/4c698b486f5c2fdff594fe25a79f971b.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/ba836387a60aa8a89622cfb61a41b654.png)  
 配置环境变量 vim /etc/profile  
 在后面加入这两句话 你的jdk路径

```
 JAVA_HOME=/usr/local/soft/jdk1.8.0_171
 export PATH=$JAVA_HOME/bin:$PATH
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/c65c9c1bfd7470dffc937c5af989a96e.png)  
 至此java环境配置完成。

## 至此虚拟机的安装全部完成

需要软件的可以私信我
