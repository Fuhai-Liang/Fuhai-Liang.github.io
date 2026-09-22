---
title: "【JAVA基础题目练习】----第二天"
description: "小芳存钱等 Java 基础练习题。"
category: note
badge: "笔记"
tags: []
date: "2023-12-12"
pinned: false
draft: false
---

## 1. 键盘录入数据，比较大小

```
// 键盘录入数据，比较大小
        /*
        键盘录入两个数据，获取这两个数据中的最大值
        键盘录入三个数据，获取这三个数据中的最大值
        键盘录入两个数据，比较这两个数据是否相等
         */
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入a1：");
        int a1 = scanner.nextInt();
        System.out.println("请输入a2：");
        int a2 = scanner.nextInt();
        System.out.println("请输入a3：");
        int a3 = scanner.nextInt();
        int maxNum = 0;
        maxNum = (a1 > a2) ? (a1 > a3 ? a1 : a3) : (a2 > a3 ? a2 : a3);
        System.out.println("最大的值为：" + maxNum);
        if (a1 == a2) {
            System.out.println("a1等于a2");
        }
        if (a1 == a3) {
            System.out.println("a1等于a3");
        }
        if (a2 == a3) {
            System.out.println("a2等于a3");
        }
        System.out.println("-------------------------------------------------");
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/4b57e20613b6484ec5a066b25aa0a7e2.png)

## 2. 代码重构（简化代码，少做判断）

```
   /*
        if (age <= 0 | age > 150)
            System.out.println("成精了...");
        else if (age < 18)
            System.out.println("该用户未成年..");
        else
            System.out.println("该用户成年了..");
        if(age == 18); //表示什么都不做
        代码重构
         */
        System.out.println("请输入age:");
        int age = scanner.nextInt();
        if (age >= 0 && age < 18) {
            System.out.println("未成年");
        } else if (age >= 18 && age < 150) {
            System.out.println("已成年");
        } else {
            System.out.println("年龄错误");
        }

        System.out.println("-------------------------------------------------");
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/426ef96ef2291fb18931addd8f0e5e7b.png)

## 3. 键盘录入月份的值，输出对应的季节

```
        System.out.println("请输入月份:");
        int mounth = scanner.nextInt();
        if (mounth >= 3 && mounth <= 5) {
            System.out.println("春");
        } else if (mounth > 5 && mounth <= 8) {
            System.out.println("夏");
        } else if (mounth > 8 && mounth <= 11) {
            System.out.println("秋");
        } else if (mounth == 12 || (mounth >= 1 && mounth < 3)) {
            System.out.println("冬");
        } else {
            System.out.println("月份错误");
        }
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a58876703223a88f818d517b603772a4.png)

## 4. 获取三个数据中的最大值使用IF语句

```
        if (a1 > a2) {
            if (a1 > a3) {
                System.out.println("最大的值为a1：" + a1);
            } else {
                System.out.println("最大的值为a3：" + a3);
            }
        } else {
            if (a2 > a3) {
                System.out.println("最大的值为a2：" + a2);
            } else {
                System.out.println("最大的值为a3：" + a3);
            }
        }
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/69cc5bcc2c19f2a550120eb529a918ae.png)

## 5. 用switch语句实现键盘录入月份，输出对应的季节

```
/*
        用switch语句实现键盘录入月份，输出对应的季节
         */
        switch (mounth) {
            case 1:
                System.out.println("冬");
                break;
            case 2:
                System.out.println("冬");
                break;
            case 3:
                System.out.println("春");
                break;
            case 4:
                System.out.println("春");
                break;
            case 5:
                System.out.println("春");
                break;
            case 6:
                System.out.println("夏");
                break;
            case 7:
                System.out.println("夏");
                break;
            case 8:
                System.out.println("夏");
                break;
            case 9:
                System.out.println("秋");
                break;
            case 10:
                System.out.println("秋");
                break;
            case 11:
                System.out.println("秋");
                break;
            case 12:
                System.out.println("冬");
                break;
        }
```

## 6. 求出1-100之间奇数和

```
        System.out.println("请输入n来计算1-n之间的奇数和");
        int n = scanner.nextInt();
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            if (i % 2 != 0) {
                sum += i;
            }
        }
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/fd4da1d7a3bca74b0ef235c160387132.png)

## 7. 求5的阶乘

```
        System.out.println("1-n之间的奇数和为：" + sum);
        System.out.println("请输入m来计算m的阶乘");
        int m = scanner.nextInt();
        int mlt = 1;
        for (int i = 1; i <= m; i++) {
            mlt *= i;
        }
        System.out.println("m的阶乘为：" + mlt);
```

## 8. 在控制台输出所有的”水仙花数”

```
/*
        在控制台输出所有的”水仙花数”
        所谓的水仙花数是指一个三位数，其各位数字的立方和等于该数本身。
        举例：153就是一个水仙花数。
        153 = 1*1*1 + 5*5*5 + 3*3*3
         */
        for (int i = 100; i < 1000; i++) {
            int bai = 0;
            int shi = 0;
            int ge = 0;
            bai = i / 100;
            shi = (i / 10) % 10;
            ge = i % 10;
            if (i == (bai * bai * bai + shi * shi * shi + ge * ge * ge)) {
                System.out.println(i + "是水仙花数");
            }
        }
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/57d470e938d7853d9f8194470700d6b3.png)

## 9. 在控制台输出满足如下条件的五位数

```
 /*
        请在控制台输出满足如下条件的五位数
           个位等于万位
           十位等于千位
           个位+十位+千位+万位=百位
         */
        for (int i = 10000; i < 100000; i++) {
            int ge = 0, shi = 0, bai = 0, qian = 0, wan = 0;
            ge = i % 10;
            shi = (i / 10) % 10;
            bai = (i / 100) % 10;
            qian = (i / 1000) % 10;
            wan = (i / 10000) % 10;
            if (ge==wan && shi==qian && (ge+shi+qian+wan==bai)){
                System.out.println(i+ "满足条件");
            }
        }
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e41d50abead9cdd7c01ecb74db0a2a15.png)

## 10. 统计1-1000之间同时满足如下条件的数据有多少个

```
  /*
          请统计1-1000之间同时满足如下条件的数据有多少个：
                   对3整除余2
                   对5整除余3
                   对7整除余2
          */
        for (int i =1;i<1000;i++){
            if (i%3==2 && i%5==3 && i%7==2){
                System.out.println(i+"满足条件");
            }
        }
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/6bbd71f5486c643225896b44908a4e9d.png)

## 11. 在控制台输出九九乘法表

```
         /*
        //     需求：在控制台输出九九乘法表
          */

        for(int i=1;i<=9;i++){
            for(int j=1;j<=i;j++){
                System.out.print(i+"*"+j+"="+(i*j)+"\t");
            }
            System.out.println();
        }
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/7cf32d2cb77a56bf9f3f1a5c8a810497.png)

## 12. 综合题目

小芳的妈妈每天给她2.5元钱，她都会存起来，但是，每当这一天是存钱的第5天或者5的倍数的话，她都会花去6元钱，  
 请问，经过多少天，小芳才可以存到100元钱。

```
        float money = 0;
        int day = 0;
        while(money!=100) {
            day += 1;
            money += 2.5;
            if (money>100){
                break;
            }
            if (day == 5 | day % 5 == 0) {
                money -= 6;
            }
        }
        System.out.println("需要存"+day+"天"+"存款为："+money);
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/b88a05ed340a2fb7d009f4f3c8225ff7.png)
