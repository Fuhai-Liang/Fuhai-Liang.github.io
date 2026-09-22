---
title: "【JAVA面向对象练习】---第四天"
description: "面向对象相关练习：类与测试类。"
category: note
badge: "笔记"
tags: []
date: "2023-12-16"
pinned: false
draft: false
---

## 数据求和类

定义一个类Demo,其中定义一个求两个数据和的方法，定义一个测试了Test，进行测试。

```
package com.fuhai.day04;

public class Sum {
    private double a;
    private double b;

    public double getA() {
        return a;
    }

    public void setA(double a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    // 无参构造
    public Sum(){

    }
    // 有参构造
    public Sum(double a,double b){
        this.a = a;
        this.b = b;
    }

    public void show(){
        System.out.println("两数之和为:"+(this.a+this.b));
    }
}
```

## 长方形类

定义一个长方形类,定义 求周长和面积的方法，然后定义一个测试了Test2，进行测试。

```
package com.fuhai.day04;

public class Rectangle {
    private double r_long;
    private double r_wide;

    public double getR_long() {
        return r_long;
    }

    public void setR_long(double r_long) {
        this.r_long = r_long;
    }

    public double getR_wide() {
        return r_wide;
    }

    public void setR_wide(double r_wide) {
        this.r_wide = r_wide;
    }

    public Rectangle(){

    }

    public Rectangle(double a,double b){
        this.r_long = a;
        this.r_wide = b;
    }

    public void perimeter(){
        System.out.println("周长为:"+((this.r_wide+this.r_long)*2));
    }

    public void sqrt(){
        System.out.println("面积为:"+(this.r_wide*this.r_long));
    }

}
```

## 员工类

定义一个员工类,自己分析出几个成员，然后给出成员变量，构造方法，getXxx()/setXxx()方法，以及一个显示所有成员信息的方法。并测试。

```
package com.fuhai.day04;

public class Stuff {
    private String stuffName;
    private long stuffId;
    private String factory;

    public String getStuffName() {
        return stuffName;
    }

    public void setStuffName(String stuffName) {
        this.stuffName = stuffName;
    }

    public long getStuffId() {
        return stuffId;
    }

    public void setStuffId(long stuffId) {
        this.stuffId = stuffId;
    }

    public String getFactory() {
        return factory;
    }

    public void setFactory(String factory) {
        this.factory = factory;
    }

    public Stuff(){
    }
    public Stuff(String name,long sid,String factory){
           this.stuffName = name;
           this.stuffId = sid;
           this.factory = factory;
    }

    public void show(){
        System.out.println("员工的姓名为："+this.stuffName+" 员工的ID为："+this.stuffId+" 员工所在的车间为："+this.factory);
    }

}
```

## MyMath类

定义一个类MyMath,提供基本的加减乘除功能，然后进行测试。

```
package com.fuhai.day04;

public class MyMath {

    private double a;
    private double b;

    public double getA() {
        return a;
    }

    public void setA(double a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public MyMath(){

    }
    public MyMath(double a,double b){
        this.a = a;
        this.b = b;
    }

    public void sum(){
        System.out.println("和为："+(this.a + this.b));
    }

    public void sub(){
        System.out.println("差为："+(this.a - this.b));
    }
    public void multi(){
        System.out.println("乘为："+(this.a * this.b));
    }

    public void division (){
        System.out.println("除为："+(this.a / this.b));
    }
}
```

## 测试

```
Sum sum = new Sum(3, 6);
sum.show();

Rectangle rectangle = new Rectangle(3, 5);
rectangle.perimeter();
rectangle.sqrt();

Stuff stuff1 = new Stuff("张三", 342345443, "第三车间");
Stuff stuff2 = new Stuff("李四", 342345444, "第二车间");
Stuff stuff3 = new Stuff("王五", 342345445, "第一车间");
Stuff stuff4 = new Stuff("李六", 342345446, "第四车间");
stuff1.show();
stuff2.show();
stuff3.show();
stuff4.show();

MyMath myMath = new MyMath(23, 56);
myMath.sum();
myMath.sub();
myMath.multi();
myMath.division();
```

## 结果输出

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/66c5276fb7d964bf0b70f938135e700d.png)
