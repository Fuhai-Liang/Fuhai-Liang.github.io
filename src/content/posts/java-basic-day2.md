---
title: "【JAVA基础】----第二天"
description: "switch-case 与 for 循环相关知识点。"
category: note
badge: "笔记"
tags: []
date: "2023-12-12"
pinned: false
draft: false
---

## 打印字符串与其拼接的规则

当字符串在前面时 会发现打印出来的值都是按照字符串拼接的方式打印出来

```
    public static void main(String[] args) {
        System.out.println('a'); //a
        System.out.println('a'+1); // 98 为加法所以字符会被转化为int值与1相加

        System.out.println("hello"+'a'+1);  // helloa1 因为字符串在前面所以会被认为是字符串的拼接
        System.out.println('a'+1+"hello");  // 98hello
        System.out.println("5+5="+5+5);    // 5+5=55 字符串的拼接操作
        System.out.println(5+5+"=5+5");  // 10=5+5
    }
```

## 基本运算法则（加减乘除）

注意：

1. 两个整数进行除法运算时会进行整除
2. 数据类型的大小排序为byte,short,char—int—long—float—double
3. 两个数据进行计算时，得到的结果为最大的哪个数据类型
4. a++是先取值在加一 所以 当a=4时，b = a++ 时 b的值为4
5. ++a是先加一在取值 所以 当a=4时，b = ++a 时 b的值为5
6. – 操作与上述++ 操作一致
7. 两个字符串相加就是字符串的拼接

```
public static void main(String[] args) {
        int a = 4;
        int b = 13;

        System.out.println(a + b);
        System.out.println(a - b);
        System.out.println(a * b);
        System.out.println(b / a); // 对于两个整数计算时，会对结果进行取整
        // byte,short,char—int—long—float—double
        System.out.println((double) b / a); // 对于两个数据进行计算，得到的结果为类型较大的类型作为结果类型
        System.out.println(b % a);

        // 对于 变量++ 表示先取值 再加1
        int c = a++; // 4 将a=4的值先赋予给c 之后再对a的值进行+1操作
        System.out.println(c); // 4
        System.out.println(a); // 5 已经对 a的值进行+1操作

        // 对于 ++变量 表示先加1 再取值
        int d = ++a;  // 5 + 1 => 6赋予给a 再赋予给d
        System.out.println(d);

        // 对于 变量-- 表示先取值 再-1
        int e = a--;
        System.out.println(e); // 6
        System.out.println(a); // 5

        // 对于 --变量 表示先-1 再取值
        int f = --a;
        System.out.println(f);  // 4
        System.out.println(a);  // 4

        // b = 13
        System.out.println(b++); // 13
        System.out.println(b--); // 14
        System.out.println(++b); // 14
        System.out.println(--b); // 13

        String str1 = "11";
        String str2 = "12";

        // 对于两个字符串进行相加，那么结果是字符串的拼接
        System.out.println(str1+str2); // 1112

        int a = 13;
        int b = 4;
        int c = a + b;
        a += b;   // 在逻辑上 a+=b => a = a + b
        System.out.println(c); // 17
        System.out.println(a); // 17

        short shortVar1 = 13;
        short shortVar2 = 4;
        shortVar1 += shortVar2; // 与 shortVar1 + shortVar2 逻辑相同，但是需要考虑变量类型的转换
//        short shortVar3 = shortVar1 + shortVar2; // 对于两个short类型进行加法操作，那么会增大类型为int 赋值时会报错
        System.out.println(shortVar1); // 17

        a -= b;
        System.out.println(a); // 13
        a /= b;
        System.out.println(a); // 3
        shortVar1 %= shortVar2;
        System.out.println(shortVar1); // 1
    }
```

## 比较运算符

注意

1. 比较运算符的计算结果都是一个布尔类型的值
2. 字符串的值做比较时不能直接只用==进行比较，需要使用str1.equals(str2)

```
   public static void main(String[] args) {
        // 比较运算符 其计算结果都是一个布尔值类型
        int a = 4;
        int b = 5;
        System.out.println(a == b);
        System.out.println(a >= b);
        System.out.println(a <= b);
        System.out.println(a < b);
        System.out.println(a > b);
        System.out.println(a != b);

        // 注意：对于字符串值进行做比较时，不能使用 == 符号进行判断
        //    对于字符串来说 并不是一个基本数据类型  使用 == 符号进行比较时，是比较其内存地址是否相同
        //    对于字符串值比较可以使用其函数
        String strVar1 = "11";
        String var1 = "1";
        String var2 = "1";
        String strVar2 = var1 + var2;
//        String strVar2 = "11"; // 当直接拿两个 字符串 "11" 比较时，在内存中两个11都是在同一个地址上保存的
        System.out.println(strVar2); // 11
        System.out.println(strVar1 == strVar2);  //false
        System.out.println(strVar1.equals(strVar2) );  // true

        // 当前str的变量是String类的对象
        String str = "str";
        System.out.println(str instanceof String);

    }
```

## 逻辑运算符

注意

1. || 与 | 的区别  
    对于 | 来说 两边都会执行 但是  
    对于|| 当前面的结果为true时 后面的运算就不会去进行

```
 public static void main(String[] args) {
        // 逻辑运算符

        System.out.println(true & true); // true 当所有为true 结果为true
        System.out.println(true & false); // 当前后有一个为false 结果为false
        System.out.println(true | false); // 当前后有一个为true 结果为true
        System.out.println(false | false); // 当前后都是为false 结果为false
        System.out.println(false ^ false); // 当前后相同 那么结果为false
        System.out.println(false ^ true); // 当前后不相同 那么结果为true
        System.out.println(!false); // 取反操作

        // 短路 AND 符号
        System.out.println(false && true);  // false
        System.out.println(true && true);   // true

        // 短路 OR 符号
        System.out.println(false || true);  // true
        System.out.println(true || true);   // true

        // | 与 || 的区别
        int a = 3;
        int b = 4;
        // 对于 | 两边都会去执行
        // 对于 || 当前面出现为true 那么 || 后面就不会执行
        if (a == 3 || (++b) == 4) {
            System.out.println(b);
        }

        // b = 4
        if (a == 3 && (b++) == 4) {  // b++ 先取值 后+1
            System.out.println("&&b:" + b);
        }else{
            System.out.println("else代码执行了...");
        }
```

## 位运算

注意

1. 位运算就是将数据转换成二进制码来进行计算，并且都是转化成为补码进行计算，然后再将计算结果转换成原码得到的十进制数才是真正的结果
2. 乘法就是左移运算，左移就是 某数值X左移N位 就是X \* 2^N
3. 除法就是右移运算，左移就是 某数值X右移N位 就是X / 2^N

```
    public static void main(String[] args) {
        // 位运算 将数据转换成一个二进制码进行计算

        // & 与运算
        System.out.println(6 & 3);
        /*
             6和3的补码
           原码(补码、反码)：
                0 0000000 00000000 00000000 00000110
                0 0000000 00000000 00000000 00000011
           &运算对应位置上都为1那么结果为1 否则为 0
                0 0000000 00000000 00000000 00000010
           十进制结果为： 2
         */

        // | 或运算
        System.out.println(6 | 3);
        /*
             6和3的补码
           原码(补码、反码)：
                0 0000000 00000000 00000000 00000110
                0 0000000 00000000 00000000 00000011
           |运算对应位置上出现为1的结果就是1
                0 0000000 00000000 00000000 00000111
           十进制结果为： 7
         */

        // ^ 异或运算
        System.out.println(6 ^ 3);
        /*
             6和3的补码
           原码(补码、反码)：
                0 0000000 00000000 00000000 00000110
                0 0000000 00000000 00000000 00000011
           ^运算对应位置上不一样的为1 一样返回 0
                0 0000000 00000000 00000000 00000101
           十进制结果为： 5
         */
        // ~ 取反运算
        System.out.println(~6);
        /*
             6的补码
           原码(补码、反码)：
                0 0000000 00000000 00000000 00000110
           ~ 将原先为0的转成1 1转成0
           补码    1 1111111 11111111 11111111 11111001
           反码    1 1111111 11111111 11111111 11111000
           原码    1 0000000 00000000 00000000 00000111
           十进制结果为： -7
           注意：~中 对于符号位也会进行计算
         */
        // <<	左移 左移N位 就相当于 是对于当前值 * 2^N幂
        System.out.println(3 << 2); // 12
        /*
        3的补码：
            0 0000000 00000000 00000000 00000011
       (0 0)0 00000 00000000 00000000 0000001100
        十进制结果为：12
         */

        // <<	右移 右移N位 就相当于 是对于当前值 / 2^N幂
        System.out.println(-5 >> 1);
         /*
        3的补码：
            0 0000000 00000000 00000000 00000011
            00 0000000 00000000 00000000 0000001(1)
        十进制结果为：1
        */

        // >>> 无符号右移
        System.out.println(-5 >>> 1);
        /*
            3的补码：
                0 0000000 00000000 00000000 00000011
                00 0000000 00000000 00000000 0000001(1)
            十进制结果为：1
        */
        // 请用最有效率的方式写出计算2乘以8的结果
        System.out.println(2 << 3);

    }
```

## 三目运算

注意

1. 三目运算必须要有一个返回值，并且需要被接收
2. (关系表达式)?表达式1:表达式2; 关系表达式为True执行表达式1，否则执行表达式2
3. 三目运算也可以进行嵌套

```
public static void main(String[] args) {
        // (关系表达式)?表达式1:表达式2;
        // 逻辑：当关系表达式结果为true 那么去执行表达式1的内容 否则执行表达式2

        int var = (3 > 4) ? 3 : 4;
        System.out.println(var);

        // 三目运算符中必须要有返回值
//        (3 > 4) ? System.out.println(3) : System.out.println(4);
//        (3 > 4) ? {System.out.println(3);3} : System.out.println(4);

        // 1.获取两个整数中的最大值
        int a = 4;
        int b = 5;
        System.out.println((a > b) ? a : b);

        // 2.获取三个整数中的最大值
        int c = 6;
        System.out.println((a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c));

        // 3.比较两个整数是否相同
        int var1 = 4;
        int var2 = 4;
        System.out.println((var1 == var2) ? true : false);

        short varA = 4;
        int varB = 5;
        int varC = (varA > varB) ? varA:varB;  // 对于两个返回值不同情况下 保存的数据类型要求为较大的数据类型
        System.out.println(varC);
    }
```

## 控制台接收数据的函数Scanner

注意

1. 在使用之前必须加上 Scanner scanner = new Scanner(System.in); 相当于定义了一下scanner接受数据的对象。
2. 接收什么数据类型的对象就使用什么类型的scanner 例如：接收int值  
    则 int getInt = scanner.nextInt();
3. 想要在字符串后面加上 a + b ，为了避免输出时变成了字符串拼接，可以用（）  
    System.out.println(“结果为:” + (a+b)); 使用（）提高a+b运算的优先级

```
    public static void main(String[] args) {

        System.out.println("please input your Str:");
        Scanner scanner = new Scanner(System.in);  //System.in表示可以从控制台接收数据
        // next函数 可以获取控制台传入的字符串
//        String getStr = scanner.next();  // idea中对于 结果变量 可以使用 .var 回车 获取返回值的变量
//        System.out.println("getStr:"+getStr);

        // nextInt函数可以接收一个Int类型的数据 同时当传入一个字符串时，该函数执行会报错
        int getInt = scanner.nextInt();
        System.out.println("getInt:"+getInt);

      // 键盘录入两个数据，并对这两个数据求和，输出其结果
        System.out.println("请输入第一个数据：");
        int first = scanner.nextInt();

        //
        System.out.println("请输入第二个数据：");
        int second = scanner.nextInt();

        System.out.println("计算结果为："+ (first + second)); // 通过 () 可以提升 计算的优先级

    }
```

## 流程控制语句

### 顺序结构

即一步步的执行的println结构就是顺序结构

```
  public static void main(String[] args) {
        /*
            流程控制语句：
                顺序结构
                选择结构
                循环结构
         */
        System.out.println("执行1行数据");
        System.out.println("执行2行数据");
        System.out.println("执行3行数据");
        System.out.println("执行4行数据");
        // ctrl + D 复制上一行的数据
```

### 判断语句 if-else 结构

判断语句返回的结果必须是boolean类型的值

```
 /*

            if(判断语句){
                执行代码块 按照顺序结构执行
            }

            if(判断语句){
                执行代码块 按照顺序结构执行
            }else{
                判断语句为false执行代码块
            }

            if(判断语句1){
                执行代码块 按照顺序结构执行
            }else if(判断语句2){
                判断语句2为true执行代码块
            }else {  // 可选项
                上述条件都不满足 执行代码
            }
*/
        Scanner scanner = new Scanner(System.in);
        System.out.println("提示：请输入要判断的年龄..");
        int age = scanner.nextInt();

        if (age <= 0 | age > 150)
            System.out.println("成精了...");
        else if (age < 18)
            System.out.println("该用户未成年..");
        else
            System.out.println("该用户成年了..");

        if(age == 18); //表示什么都不做
```

### switch - case 语句 （选择结构）

如果一个case没有break则会导致没有break的语句怎么样都会输出

```
        /*
                switch(表达式) {
                  case 值1：
                    语句体1;
                    break;
                    case 值2：
                    语句体2;
                    break;
                    …
                    default：
                    语句体n+1;
                    break;

                switch 穿透 :在case语句中没有设置break 之后依照顺序继续执行下一个case中的语句
                对于default语句一般情况下放在末尾，但是位置不影响其执行结果

                break：表示停止执行当前的switch语句
                default: 所有case都没有匹配上则运行该部分代码

            }
         */
```

### For循环语句

在for循环外面的变量可以在外面使用，在循环内定义的变量只能在循环内使用

```
/*
for(初始化语句;判断语句;控制语句){
                    循环体语句;
                    循环体语句;
                }
            初始化语句: 定义一个变量 该变量可以记录循环执行的次数
            判断语句: 对当前是否要继续执行进行判断
            控制语句: 对判断语句中的变量进行做限制
            循环体语句: 每次循环要执行的代码块
*/
/*
            for循环执行过程
              ① 执行初始化语句
              ② 执行判断语句，同时如果为false那么退出循环，为true那么执行{}中的循环体语句
              ③ 执行控制语句
              ④ 之后再去执行判断语句，同时如果为false那么退出循环，为true那么执行{}中的循环体语句
              ⑤ 循环 ② ③ ④
         */
        for (int i = 0; i < 2; i++) {
            System.out.println("helloWorld");
        }
//        System.out.println(i);

        // 对于初始化语句和控制语句都可以不在for()中
        int j = 0;
        for (;j<3;){
            System.out.println("this is j");
            j++;
        }
        System.out.println("for循环执行了："+j+"次");
```

### while 和 do - while 循环

注意

1. while是先判断在执行，do-while是不管满不满足条件都会仙女做一次循环在进行判断是否进行下一次循环
2. continue 是跳出本次循环进入下一次循环
3. break 是结束循环

```
/*
                while(判断条件){
                    循环代码体;
                    控制语句;
                }
 */
   public static void main(String[] args) {
        /*
            我国最高山峰是珠穆朗玛峰：8848m，我现在有一张足够大的纸张，厚度为：0.001m。
            请问，我折叠多少次，就可以保证厚度不低于珠穆朗玛峰的高度?
         */
        int hd = 1;
        int num = 0;
        while (hd < 8848 * 1000) {
            // 折叠厚度
            hd *= 2;
            num += 1; //记录折叠次数
        }

        System.out.println("一共折叠了:" + num + "次");
    }

/*
do {
                循环体;
                控制语句;
            }while(判断语句)
*/

        int i = 0;
        do {
            System.out.println("helloWorld");
            i++;
        } while (i < 0);

    public static void main(String[] args) {

        /*
            Continue 和 while 代码：

         */

        int i = 0;
        while (i <= 10) {
            i += 1;
            if (i == 3) {
                // 当执行过程中遇到 continue 那么会直接执行 while中的 判断语句
                continue;
            }
            System.out.println("i:" + i);
        }
        System.out.println("***********************************");
        i = 0;
        while (i <= 10) {
            i += 1;
            if (i == 3) {
                // 一旦遇到break操作，那么会终止 while 循环
                break;
            }
            System.out.println("i:" + i);
        }
```

### 练习题

println默认是有换行操作  
 print默认没有换行操作

```
    public static void main(String[] args) {
//       请输出一个4行5列的星星(*)图案
        int rows = 4; // 行
        int filed = 5; // 列

        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= filed; j++) {
//                System.out.println("*" + "\t");  //println默认是有换行操作
                System.out.print("*" + "\t");  //print默认是没有换行操作
            }
            System.out.println();
        }

        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
//                System.out.println("*" + "\t");  //println默认是有换行操作
                System.out.print("*" + "\t");  //print默认是没有换行操作
            }
            System.out.println();
        }
```
