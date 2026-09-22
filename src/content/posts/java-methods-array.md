---
title: "【JAVA基础(方法与数组)】-----第三天"
description: "main 方法、方法与数组的使用。"
category: note
badge: "笔记"
tags: []
date: "2023-12-14"
pinned: false
draft: false
---

## 方法（函数）

### 方法的定义与注意事项

main方法是整个程序的入口，要运行一个程序必须要有main方法。但是对于一个类调用来说可以没有main方法。  
 public ：方法的修饰

static：表示静态的

void：表示无返回值，并且不是一个数据类型

函数名称：命名时要符合命名规范，多个单词情况下 第一个单词小写，之后单词首字母大写

参数列表: 列表中可以给定多个参数 并且参数类型需要指定 可以给定基本 数据类型和引用数据类型  
 注意：传入的参数是数值时会将数值的传进去，在函数中进行的形参数值计算不会i影响main函数中的实参。但是如果传入的是引用数据类型（数组）会把数组的地址传给形参，此时在函数中做的改变也会对main函数中的数组数值产生影响

方法的内部不能在定义方法  
 无返回值的函数定义：

```
函数的定义
public static void 函数名称（参数）{
函数体
}
```

有返回值的函数定义：  
 注意：

1. 有返回值的函数只能返回一个值或者一个变量或者一个数组，不能返回多个值和变量

```
public static 返回值的类型 函数名(参数){
函数体；
return 数值/变量 (要与返回值的类型保持一致)
}
```

注意

1. 方法与方法是平级的关系，不能嵌套定义
2. 方法定义的时候参数之间用逗号隔开
3. 方法调用的时候不用在传递数据类型
4. 如果方法有明确的返回值，一定要有return带回一个值

```
    public static void main(String[] args) {

        // 方法调用
        sum(3, 4);
        sum1(); // 无参调用
        sum();
        sum(3, 4.0);  // 方法重载的调用
        int sumRes = sum2(4, 5); //  对于有返回值的方法 可以使用变量进行接收 可以使用.var快捷键获取结果变量
        System.out.println("sumRes:"+sumRes);

        double sumResDouble = sum2(4, 5.0);
        System.out.println("sumResDouble:"+sumResDouble);

    }

    // 定义方法
    public static void sum(int a, int b) {
        System.out.println(a + b);
    }

    public static void sum(int a, double b) {
        System.out.println(a + b);
    }

    // 方法重名
    public static void sum() {
        System.out.println(3 + 4);
    }

    public static void sum1() {
        System.out.println(3 + 4);
    }

    // 方法有返回值
    public static int sum2(int a, int b) {
        return a + b;
    }

    // 在Java中对于参数列表相同 函数名相同，那么认为是同一个函数  不可以重复定义
//    public static double sum2(int a, int b) {
//        return (double) (a + b);
//    }
    public static double sum2(int a, double b) {
        return a + b;
    }

}
```

定义方法的时候，方法名称相同但是参数的类型不同则会被认为不是同一个函数。  
 在Java中对于参数列表相同 函数名相同，那么认为是同一个函数 不可以重复定义  
 这就是方法的重载

### 方法的递归

方法的递归:  
 ① 方法内部需要调用当前方法  
 ② 需要有停止标记

```
        注意：
            方法的递归并不一定需要有return
```

```
public static void main(String[] args) {

//        sum();
        int computeRes = factorial(5);// => 120
        System.out.println("factorial:"+computeRes);

        factorial2(5);
    }

    // 使用递归的方式计算 5!  5*4*3*2*1
    public static int factorial(int num){
        // f(5) =返回> 5 * f(4)=24
        // f(4) =返回> 4 *  f(3)= 6
        // f(3) =返回> 3 *  f(2)= 2
        // f(2) =返回> 2 *  f(1)= 1
        // f(1) =返回> 1

        // 停止递归的标记
        if(num == 1){
            return 1;
        }
        return num * factorial(num - 1);
    }

    public static void factorial2(int num){
        // f(5) =返回> 5 * f(4)=24
        // f(4) =返回> 4 *  f(3)= 6
        // f(3) =返回> 3 *  f(2)= 2
        // f(2) =返回> 2 *  f(1)= 1
        // f(1) =返回> 1

        // 停止递归的标记
        if(num == 1){
            System.out.println(1);
        }
        System.out.println(num * factorial(num - 1));
    }

    public static void sum(){
        int num1 = getOneNum();  // 方法内部调用另外一个方法
        int num2 = getOneNum();
//        sum();
        System.out.println("计算结果:"+num1+num2);
    };

    public static int getOneNum(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入一个数据:");
//        int nextInt = scanner.nextInt();
//        return nextInt;
        return scanner.nextInt();
    }
```

## 数组

数据类型[] 数组名  
 例如：定义一个int类型的数组： int[ ] intArr; --> 最常用

数据类型 数组名[]  
 例如：定义一个int类型的数组： int intArr[ ];

### 静态赋值

定义数组时就给定值

```
静态赋值：
方式1: 数据类型[] 变量名 = {数组元素值1、数组元素值2、数组元素值3...}
方式2: 数据类型[] 变量名 = new 数据类型[]{数组元素值1、数组元素值2、数组元素值3...}
int[] arry = new int[]{1,2,3};
int[] arry ={1,2,34,8};
```

### 动态赋值

先给定数组的长度不给值

```
int[] arry = new int[n];
解释：
int[]: 表示数组类型
arry: 表示数组的变量名
new 表示构建一个对象
int[n] 表示创建的数组对象的类型以及长度n
```

注意  
 数组中的索引下标默认是从0开始  
 当使用动态赋值时，数组中的数据都是当前类型的默认值

动态初始化和静态初始化的优缺点：  
 ① 对于动态初始化，只需要给定数组长度 适合应用在数据不确定的情况下  
 ② 对于静态初始化，可以使用简化写法适合一开始数据存在的情况

```
        对于静态初始化方式2中 int[]中并不需要添加数组的长度
```

## 二维数组

```
二维数组定义：
数据类型[][] 变量名 = new 数据类型[m][n];
int[][] d2Arr = new int[2][3];
// 其中2表示当前d2Arr指向的是一个数组其长度为2
// 其中3表示上述的每个数组中保存的数组长度为3
```

```
 String[][] strArr = new String[3][];
// 空指针异常：
//          java.lang.NullPointerException
//
//        System.out.println(strArr[0][0]);
System.out.println(strArr[0]);
strArr[0] = new String[]{"吴", "诺", "博"};
strArr[1] = new String[]{"兵", "张", "信"};
strArr[2] = new String[]{"顾", "宇"};
```

对于二维空数组（动态赋值）直接进行赋值例如：  
 arry[ 0 ][ 0 ] = 1；这样会报出错误java.lang.NullPointerException  
 因为这个时候这个里面为空并没有存储数据的地址所以对于二维数组正确的赋值方式为  
 strArr[0] = new String[]{“吴”, “诺”, “博”};  
 strArr[1] = new String[]{“兵”, “张”, “信”};  
 strArr[2] = new String[]{“顾”, “宇”};

## 练习

### 杨辉三角

```
 //    打印杨辉三角形(行数可以键盘录入)(作业)
    public static void yangTric(int n) {
        int[][] arr = new int[n][];
            for (int i = 0; i < n; i++) {
                if (i == 0) {
                    arr[0] = new int[]{1};
                } else if (i == 1) {
                    arr[1] = new int[]{1,1};
                } else {
                    // 求第二行之后的杨辉三角数，按行求
                    int[] temp = new int[i + 1]; // 先定义这一行的数组的个数
                    // 遍历顺便把求得的数进行赋值
                    for (int j = 0; j < i + 1; j++) {
                        if (j == 0) {
                            temp[j] = 1;
                        } else if (j == i) {
                            temp[j] = 1;
                        } else {
                            temp[j] = arr[i - 1][j] + arr[i - 1][j - 1];
                        }
                    }
                    arr[i] = temp;
                }
            }

            for (int x=0;x<arr.length;x++){
                for (int y =0;y<arr[x].length;y++){
                    System.out.print(arr[x][y]+"\t");
                }
                System.out.println();
            }
        }
```

### 求和

```
         // 求所有季度的总和
        /*
            第一季度：22,66,44
            第二季度：77,33,88
            第三季度：25,45,65
            第四季度：11,66,99
         */

        int[][] yearNum = {{22, 66, 44}, {77, 33, 88}, {25, 45, 65}, {11, 66, 99}};

        int sum = 0;
        for (int[] quarter : yearNum) {
            for (int monthNum : quarter) {
                sum += monthNum;
            }
        }
        System.out.println("sum:" + sum);
```

### 数字加密

某个公司采用公用电话传递数据，数据是任意的整数，在传递过程中是加密的，加 密 规则如下：如果是四位数字，每位数字都加上 5,然后用和除以 10 的余数代替该数字，再将第一位和 第四位交换，第二位和第三位交换。

```
        // 加密电话
        System.out.println("请输入一串电话号码:");
        String numberString = scanner.next();
        int[] number = new int[numberString.length()];
        for (int i = 0; i < numberString.length(); i++) {
            String temp = String.valueOf(numberString.charAt(i));
            int a = Integer.parseInt(temp);
            number[i] = (a + 5) % 10;
        }
        if (number.length % 2 == 0) {
            for (int i = 0; i < number.length / 2; i++) {
                int temp = 0;
                temp = number[i];
                number[i] = number[number.length - 1 - i];
                number[number.length - 1 - i] = temp;
            }
        } else {
            for (int i = 0; i < (number.length - 1) / 2; i++) {
                int temp = 0;
                temp = number[i];
                number[i] = number[number.length - 1 - i];
                number[number.length - 1 - i] = temp;
            }
        }
        System.out.println("加密后的号码为：");
        for (int i=0;i<number.length;i++){
            System.out.print(number[i]);
        }
```

## 内存图

![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/23072c32ee99c2f6a9f76e1ff1bba038.png)
