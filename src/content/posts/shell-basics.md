---
title: "【shell初识，命令，基础语法和实例演练】"
description: "系统学习 Shell 基本语法，并配合实例演示。"
category: note
badge: "笔记"
tags: []
date: "2023-11-28"
pinned: false
draft: false
---

## 第一个shell文件 hello world

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/90fb5276ec18e2bed35992edd28c484c.png)  
 编写第一个程序  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/cb669e454d3c8ce62449a78a1be3f6ab.png)

```
#!/bin/bash
echo "hello world"
```

运行脚本命令  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/723c4674cdb97ff5dd773ff52065f169.png)

## 变量的命名与输出

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/cb9acd4bb98f4f9e3abcfc78eabb00eb.png)  
 运行结果：  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/d527e9320317a275660fdd1948518648.png)  
 注意

```
echo '${student}'
```

此时这仍然是输出 ${student} 这个字符串 ，即在echo输出和引用变量时要用双引号 避免使用单引号括住

## shell的基础语法

### 输出命令 如ls -l 将命令赋值给变量

```
# 输出命令 如ls -l 将命令赋值给变量 然后在输出
order1=`ls -l`
order2=$(ls -a)
echo "输出ls-l命令结果"
echo ${order1}
echo "输出ls-a命令结果"
echo ${order2}
```

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/25ae6bf2d080483826d86cc98840c545.png)

### echo 需要参数-e 来开启专义

```
# echo输出没有换行符号\n 但是printf中有
echo "echo输出\n看是否有换行符"
printf "printf输出\n看是否有换行符\n"
# echo 需要参数-e 来开启专义
echo -e "-e 开启换行转义字符 Ok \n jacvjahvchjv"
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/21a918f31308b8ccc2a65145e4acd370.png)

### unset可以删除变量 但是不能删除只读变量

```
# unset可以删除变量 但是不能删除只读变量
voc="nihao"
voc1="best"
echo "未使用unset之前 输出" $voc $voc1
unset voc 
readonly voc1
echo "使用unset 和readonly 之后 输出" $voc $voc1
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/8239374e12332f4ceaa658ed5e0753a4.png)

### 在运行脚本时可以传入多个参数

```
# 在运行脚本时可以传入多个参数并且可以取到这些参数
echo "这是脚本名" $0
echo "这是第一个参数" $1
echo "这是第二个参数" $2
echo "1-9的参数以此类推 这是第10个参数" ${10}
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/9ff4940644f8e071f9c0fbcd04559f59.png)

### 传递参数时进行参数处理

```
# 传递参数时可以进行参数处理 以下是这些命令
echo "参数长度为" $#
echo "将参数用#*命令作为一个字符串传出" $*
echo "将参数用#@命令变成多个字符串输出" $@
echo "这是for循环两种方法"
echo '---$*方法---'
for i in "$*"
do
  echo $i
done
echo '---$@方法---'
for i in "$@"
do 
  echo $i
done

echo '$?这是看程序的运行结果是否正常 为0则为正常' $?
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a05de539f9958c44eb214b08d2818229.png)

### 获取字符串长度 ${#str}

```
# 获取字符串长度 ${#str}
str=12345678
echo '用${#str}来测量字符串的长度' ${#str}
# 字符串的拼接非常简单粗暴 直接写一起即可 但是需要分几种情况
str1="hello world"
str2="hello space"
echo $str1 $str2 
echo "$str1 $str2" # 这种可以有空格
echo "第一句话为:${str1}" "第二句话为"${str2}
# 但是用变量接收拼接字符不带双引号 两个变量之间不能有空格
# 例如 str=$str1$str2 中间不能有空格 其他的都跟上面一样
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/627e71e010660cfaa966352f7a9da088.png)

### 截取字符串

```
# 截取字符串
str="bee is is wengweng sounding  "
echo "字符串为${str}"
echo '${str:2:8}的结果为 从2到8 起始为0' ${str:2:8}
echo '${str:2}的结果为 从2到末尾起始为0' ${str:2} 
echo '${str:0-3}从右边开始计数 数到第三个字母向右读取' ${str:0-3}
echo '${str#*is}从指定字符处开始向后截取*is代表前面的匹配完 截取后面的 '${str#*is}
echo '${str##*is}从最后一个指定字符处开始向后截取 这里没有贪婪'${str##*is}
echo '${str%is*}从指定字符处开始向前截取is*代表后面的匹配完 截取前面的 '${str%is*}
echo '${str%%is*}从最后一个指定字符处开始向前截取 '${str%%is*}
test=aaaaaaisisisaaaaa
echo "一个字符串为${test}现在取其中间的is"
temp=${test#*is}
echo ${temp%is*}
echo '步骤为temp=${test#*is}   echo ${temp%is*} '
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/9220377cb0617f8c4c5588466cfbbd0c.png)

### 数组 关联数组

```
# 数组
arry1=(a b c d e f 1 2 3 4 5)
echo "取第一个数"$arry1 或 ${arry1[0]}
echo "取第二个数" ${arry1[1]}
echo "取全部的数" ${arry1[*]}
echo '${#arry1}获取数组长度' ${#arry1[*]}
arry2=(12 23 34 56 sdf wef)
arry3=(${arry1[*]} ${arry2[*]})
echo 'arry3=(${arry1[*]} ${arry2[*]}) 将两个数组合并成一个数组' ${arry3[*]}

# 关联数组 就相当于一个字典
declare -A ss=(['1']='good' ['2']='best')
echo '关联数组ss【’1‘】打印 '${ss['1']}
declare -A sss
sss['1']='hgsav'
sss['2']='sdvdsd'
echo '关联数组sss打印 '${sss[*]}
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/5c439fdb15eeb3f3ab1b1d4f9d1729f3.png)

### 算数运算符

```
echo "算数运算符"
a=`expr 3 + 2`
echo 'a=`expr 3 + 2`=' $a
b=`expr 3 - 2`
echo 'a=`expr 3 - 2`=' $b
c=`expr 3 \* 2`
echo 'a=`expr 3 \* 2`=' $c
d=`expr 3 / 2`
echo 'a=`expr 3 / 2`=' $d
e=`expr 3 % 2`
echo 'a=`expr 3 % 2`=' $e
# [ $a==$b ]判断语句一般跟在if后面使用 不能直接赋值

echo '$((2+2))这种方法也可以进行算数运算 并且没有限制'
echo '$((2*2))=' $((2*2))
echo '$((2+2))=' $((2+2))
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/5349946d7b71179c1e4761f898118702.png)

### 关系运算符

```
# 关系运算符
echo 关系运算符
echo '[ $a -eq $b ] 这代表等于 一般在if后面使用'
if [ $d -eq $e ]
then
  echo d,e相等
fi
echo '$(d==e)'关系运算符判断
if $((d==e))
then
  echo d,e相等
fi

echo '-eq = ((==))  -ne = ((!=))  -gt = ((>)) '
echo '-lt = ((<))  -ge = ((>=))  -le = ((<=)) '
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/34e5a98def3c3a567e6633e72d492b44.png)

### 布尔运算 逻辑运算

```
# 布尔运算
echo 布尔运算
# ! 非运算  -o 或运算 -a 与运算
a=3
b=20
if [ $a -lt 20 -o $b -gt 40 ]
then
  echo 'a<20 或 b>40'
fi
c=40
# 逻辑运算 &&=and   ||=or
if [[ $a -lt 10 && $b -gt 20 || $c -gt 30 ]]
then
  echo 逻辑运算
fi

# 逻辑运算与关系运算差不多 但是逻辑运算使用时需要有两个中括号

# 字符串运算符 -z检测字符串长度是否为0  [$a]检测a字符串是否为空
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/99bcc56783428023ce15e3b601bda84a.png)

### read 显示变量 即为input

```
# read 显示变量 即为input 
echo read 显示变量 即为input -s为静默模式输入不显示
echo -p 提示信息  -t 超时自动退出
read -sp '请输入姓名' -t 5 name
echo -e "\n姓名为：" $name 
read -p "输入一些信息 姓名 年龄 性别：" name age gender
echo -e "姓名为：${name} \n年龄为:${age} \n性别:${gender}"
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/640c42d1a8fe2aead8d4b368ffd11edc.png)

### 九九乘法表

```
  1 #!/bin/bash
  2 for i in $(seq 1 9)
  3 do
  4   for j in $(seq 1 `expr $i`)
  5   do
  6     printf "$i"*"$j"=`expr $i \* $j`" "
  7   done
  8   echo ""
  9 done
```

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/4b3987be5879b3f0c75834d28259cd4d.png)

### printf 的使用与参数

## shell流程控制 【循环】

### if 语句

语法结构  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/2ac3deb7a51a02cffb9357dfe39b3394.png)

```
  1 #!/bin/bash
  2 # if语句
  3 a=2
  4 b=3
  5 if (($a<$b))
  6 then
  7   echo a小于b
  8 fi
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/bdba84ad14f4a064045c4dfeda0b9e20.png)  
 if -else 的语法结构 经常与判断语句相结合来使用  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/9a9ccd1126722f10c4d589632c5f3dda.png)  
 if el-if else 语句 也经常与条件判断语句使用  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/8ccd62e5d1a9ca023fb2079d5d5df589.png)  
 例如  
 if [ $a == $b ] 或 if [ $a -eq $b ] 或者 if ((a==b)) 三种条件语句都可以选择使用

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/c81679616b12e3609820a644724a3b92.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/ac4a0e59ba32c9992cbb133232626080.png)

### for 循环

for 循环结构为

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/02a1bb7c351b44c3dc7016c8bbf65734.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/81c574e62f16af5b1285585daab97d58.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/0ad091d0d5c4884df5e45a51fcb4bec9.png)

### while 循环

语法格式为  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/3bcfde38ea2d5e587213b6405a055f76.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/80f3e525f1ea87365a0488931174ea8f.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/b51bb6ef32f6bcfabbfb12687f8e001e.png)

在while循环中持续输入 按ctrl D 结束  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/9734fb05e67e880d586e42ed8f0d94ca.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d5e7ec72bc77937828d55fd9406f0de9.png)  
 无限循环的格式为：  
 while ：  
 do  
 command  
 done

while true  
 do  
 command  
 done

for (( ; ; ))

### case 选择语句

语法为  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e829c89f9ca8649740f5a325f7e15dac.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/632c923aae3efae6d54de0e0f0a3e2b7.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/f9917205a4452a8f3ea103e25dffb86f.png)  
 匹配字符串 break 和 continue的实例  
 break 跳出这一次循环进入下一次循环  
 break 结束循环  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/001ba925527254caf6abe3e1127c3599.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d7fb7f807f55149299b2f1b8b476e1cf.png)

## shell 定义函数

```
[ function ] funname (){
    action;
    [return int;]
}
```

函数定义的基本结构如上 【】里面的可写可不写 引用函数时必须在上面定义此函数

```
  1 #!/bin/bash
  2  
  3 function first (){
  4    echo -----this is my first function----
  5 }
  6  
  7 function sum (){
  8    read -p "input num a " a
  9    read -p "input num b " b
 10    echo 和为 $((a+b))
 11 }
 12  
 13 mulit (){
 14   echo "函数 mulit"
 15   echo "调用内部的字母参数"
 16   echo "参数0为"$0
 17   echo "参数1为"$1
 18   echo "参数10为"${10}
 19   echo "所有参数为" $@
 20   echo "参数总数为 " $#
 21 }
 22 
 23 echo --------------------
 24 mulit1 (){
 25   echo "函数 mulit1"
 26   echo "调用外部的传入的数字参数"
 27   echo "参数0为"$0
 28   echo "参数1为"$1
 29   echo "参数10为"${10}
 30   echo "所有参数为 " $@
 31   echo "参数长度为 " $#
 32 }
 33 
 34 
 35 echo 函数执行
 36 first
 37 sum
 38 ## 这两个函数有区别
 39 # 这个函数直接调用 内部的传入参数
 40 mulit a b c d e f g h i j k l m n
 41 # 这个函数是调用外部的传入参数 
 42 mulit1 $1 $2 $3 $4 $5 $6 $7 $8 $9 ${10} ${11} ${12}
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/1f62ab8fdf2ea5ff3339854b43027222.png)  
 由此可以看出函数的引用参数是有区别的 按照自己的需求来内部传参还是外部传参

## shell 的重定向输入和输出

标准输出 将一个文件的输出打印到控制台的就是 标准输出  
 我们现在将输出放到txt文档中 使用命令 sh func.sh > a.txt  
 ">"就是重定向输出  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/ef41344fa4a127660f5249267e0e0bdf.png)  
 ll > b.txt 命令的输出结果也可以进行重定向  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/66cf0cbf2b1691387f29ce03b42628d7.png)  
 ">"为覆盖写 相当于w  
 “>>为追加写 相当于a”  
 0 标准输入  
 1 标准输出  
 2 标准错误

who 命令可以看出谁登录了这个电脑![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e15824598728f030dfc141fdcbf46070.png)  
 wc - l 命令看一个文件有多少行  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/25ae9b6cdc56ad7cbf0dc7529749ee6d.png)  
 == command > file 2>&1 == 这个命令很重要  
 是将一个文件运行 然后将标准错误写入到标准输出中 并且都重定向到file这个文件中  
 例如 在后台执行 不需要前台打印 需要看log 日志文件 这时错误就会写在里面 定位错误在哪里

command > /dev/null 重定向到垃圾桶 写入里面的东西都会消失

## nohup命令进行后台运行

nohup sh func.sh > file 2>&1  
 运行命令可以看出 前台没有任何输入和输出 全部都会在后台运行并且忽略输入  
 然后错误和执行的正常结果全部都被写进了file文件中  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/8ebc1281d235a9d4c260075e54486eb5.png)

## crontab 定时调度

设置一个命令 让这个脚本可以在固定的时间定时运行

这个是菜鸟教程中的解释和说明[菜鸟教程](https://www.runoob.com/linux/linux-comm-crontab.html)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/7fb0b13aa0a838c597bb58a20f0a8e0a.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/015e7efc9d6aa4a3d070f9af572d1316.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d63bab7742fd46d06b9deb1e65097808.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/9c7c3a22d05878be3898c9d9b6faec24.png)  
 实例演示：  
 data.sh 的内容  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/2705174746ca666a697b1c387d1e866d.png)![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/3a96349224d7a75ff39ff4d2707291fc.png)

现在设置定时任务  
 控制台输入 crontab -e  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/02b005859e43c8c6fc966041eddba5bf.png)

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/7fac38d569d277f2d67aad4424ad4d21.png)  
 保存并退出 等待几分钟查看结果log文件  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e216831d7550fccb6fc2fe3c4dc2c388.png)  
 crontab -l 以list的形式展现出里面写的什么  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/0adf10b6f1cb2a5235f1bf0c39750fe7.png)

## shell 高阶进阶

### sed

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/ddd998e014c83a1a6f168c5059398061.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/80cdcfff00c152a831ec0293050e148c.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/96ff83e45ae30ba5808481972320ae84.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/b25b12608f9e1c1a84b5ccf88d3fe3c0.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/8144d2a407aadcdc2960553c59fb1ed1.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/65122bdef4cc567d8a5663c95e48d34f.png)

### awk

处理文本语言 一个文本处理工具  
 [菜鸟教程可以自主学习](https://www.runoob.com/linux/linux-comm-awk.html)

## shell基础学习完成！感谢阅读！
