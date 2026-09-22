---
title: "【JAVA基础(对象和封装以及构造方法)】----第四天"
description: "成员变量、类与对象、封装与构造方法。"
category: note
badge: "笔记"
tags: []
date: "2023-12-16"
pinned: false
draft: false
---

## 面向对象和面向过程

### 面向过程

在了解面向对象之前先来了解一下面向过程  
 面向过程：对于整个数据的操作都是基于步骤一步一步的进行实现的

```
// 面向过程的编程
    // 功能： 1、打印数组中的所有数据
    //       2、对数组中的数据进行逆序
    //       3、求数组中的最大值
    //       3、求数组中的最小值

    // 1、打印数组中的所有数据
    public static void printArr(int[] intArr) {
        for (int i = 0; i < intArr.length; i++) {
            if (i != 0 && i != intArr.length - 1) {
                System.out.print(" , " + intArr[i]);
            } else {
                if (i == 0) {
                    System.out.print("[" + intArr[i]);
                } else {
                    System.out.print(" ," + intArr[i] + "]");
                }
            }
        }
    }

    // 2、对数组中的数据进行逆序
    public static void reverseArr(int[] intArr){
        for (int i = 0; i < intArr.length / 2; i++) {
            int tmp = intArr[i];
            intArr[i] = intArr[intArr.length - 1 - i];
            intArr[intArr.length - 1 - i] = tmp;
        }
    }

    // 3、求数组中的最大值最小值
    public static int[] getMaxMin(int[] intArr) {
        int max = intArr[0];
        int min = intArr[0];

        for (int elem : intArr) {
            if (elem > max) {
                max = elem;
            }
            if (elem < min) {
                min = elem;
            }
        }
        // 将最大值和最小值包装成一个数组
        int res[] = new int[]{max, min};

        return res;

    }
```

### 面向对象

面向对象的编程：  
 就是不断的创建对象，使用对象，指挥对象做事  
 面向对象特征:  
 封装(encapsulation)  
 继承(inheritance)  
 多态(polymorphism)

```
类和对象的关系：
    class 修饰的为类
    通过class new出来的 称为对象
    描述一个类 需要从两个角度：
        属性：
        方法（功能）：
    人类 -> 对象 -> 个体
    一般情况下 类是一个抽象  对象是一个具体
```

```
大象装进冰箱：
    面向过程：
        1.开冰箱
        2.把大象塞进冰箱
        3.关门
    面向对象：
        1.需要有冰箱的对象
            方法：
                开门
                关门

        2.需要有大象的对象
            方法：
                跳进冰箱

        3.操作对象
    伪代码：
        class IceBox{
            open();

            close();
        }

        class Elephant{
            jumpIceBox();
        }

        class Operator{
           main{
            iceBox = new IceBox()
            elephant = new Elephant()
            iceBox.open()
            elephant.jumpIceBox()
            iceBox.close()
           }
        }
```

## 类与对象及其使用

### 定义类

```
public class Person{
          成员变量
          类中的属性称为成员变量，该变量定义时 格式为：
            数据类型 变量名;
        注意：
            ① 在类中定义的成员变量并不需要有初始值
            ② 对于成员变量来说，其作用域是在整个类中有效
          String name;
          int age;
          double weight;
          
          定义成员的方法
          public 返回值类型(void) 成员方法名(参数列表){
                代码体
                return 返回数据
                }
          该方式定义的方法，只能通过对象进行调用，而不能在当前类中使用 main 方法进行调用
         //定义一个成员方法
        public void sayHello(){
        System.out.println("您好！我叫"+name+"今年"+age+"岁");
    }
          
          
}
```

类实例

```
public class Student {
    /*
        成员变量：
            姓名 年龄 班级
     */
    String name;
    int age;
    String clazz;
    String skill;

    /*
        成员方法
     */

    public void study(){
        System.out.println("当前具有一些技能:"+skill);
    }

    public void eat(){
        System.out.println("爱吃XXX");
    }
```

### 创建一个对象，操作类

```
Person person = new Person();
创建对象的过程就相当于创建了一个人的实例
对于一个人需要给定其具体的姓名
//调用对象
person.sayHello();
System.out.println(person.name); // null 对于name来说其类型为String并且该类型为引用类型 引用类型的初始值为null
System.out.println(person.age); // 0  对于age来说其类型为int 并且该类型为基本数据类型  其初始值为0
System.out.println(person.weight);
// 给对象中的属性值进行赋值
person.name = "xx";
person.age = 18;
person.weight = 150;
```

#### 补充（成员变量和局部变量）

```
成员变量和局部变量的区别:
成员变量：定义在类中，并且是在方法和成员方法外的
局部变量：定义在方法或成员方法内

内存中的位置不同
成员变量：变量存储位置是在堆空间中
局部变量：变量存储位置是在栈空间中

生命周期不同：
成员变量：在对象消亡时消失
局部变量：在方法使用完成后消失

初始化值不同：
成员变量：有默认值
局部变量：定义时需要对其进行赋值操作(要看其调用)

基本类型作为形式参数 : 基本类型会将具体的值赋予给方法的形参变量
引用类型作为形式参数 : 引用类型会将内存地址赋予给对应方法的形参变量 可以根据内存地址操作具体的数据引用类型数据基本存放在堆空间中
```

### private 修饰类

对于private修饰的属性则只有在当前类中的其他方法才能访问，对于其他类创建的对象不能直接使用此方法，需要用get和set方法进行使用

```
public class StudentPri {
    /*
        对于name和age不能随意更改
        clazz 可以进行更改
        private修饰的成员属性，它的有效范围是在当前的类中
     */
    private String name;
    private int age;
    String clazz;
    public void setName(){
        name = "xxxx";
    }

    public void setAge(){
        age = 20;
    }
    public void addAge(){
        age += 1;
        if (age % 12 == 0){
            System.out.println("今年是本命年，需要穿红裤衩...");
        }
    }
    public String getName(){
        return name;
    }

    public int getAge(){
        return age;
    }
    /*
 对于private修饰了成员方法,可以在当前类中的其他成员方法中进行调用 以此进行做逻辑判断 控制方法的调用
     */
    public void privacy(String re){
        // 关系好 可以表达
        if (re.equals("好")){
            skill();
        }else {
            System.out.println("大数据好难，我不爱学...");
        }
    }
    private void skill(){
        System.out.println("我爱学习大数据..");
    }
```

此时创建的对象，不能在使用studentPi.name 或 studentPi.age 进行随意修改类中的属性值，只能调用类中的成员方法进行查看和修改，这就是涉及到了下一步的封装。

## 封装

```
封装：
封装概述：
是指隐藏对象的属性和实现细节，仅对外提供公共访问方式。
好处：
隐藏实现细节，提供公共的访问方式，对于有些属性不能由创建者随意更改提高了代码的复用性提高安全性
```

完整的类构造方法：

```
public class StuConstruct {
    // 私有属性，只能在此类下的成员方法中使用
    // 并且使用时要用 this.属性名 的格式
    private String name;
    private int age;
    private String clazz;
    // 提供的get 和 set 成员方法进行查看和修改属性值
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getClazz() {
        return clazz;
    }

    public void setClazz(String clazz) {
        this.clazz = clazz;
    }
   
    // 一般情况下 如果有有参构造，那么会再手动添加无参构造
    public StuConstruct(){
    // 无参构造的意义是可以使用set方法进行传入参数值
    }

    
    
    // 重载构造方法 （有参构造）
    // 有参构造的意义就是在创建对象时便可以传入参数接着就对      对象进行调用
    public StuConstruct(String name,int age,String clazz){
        this.name = name; // 使用this获取当前类中的成员变量
        this.age = age; // 使用this获取当前类中的成员变量
        this.clazz = clazz; // 使用this获取当前类中的成员变量

    }
    // 成员方法 进行展示属性值的
    public void show(){
        System.out.println("name:"+this.name+" age:"+this.age+" clazz:"+this.clazz);
    }

}
```

无参构造和有参构造应当在一个类中同时定义：目的就是可以在创建一个对象时可以有两种给属性赋值的模式

1. 使用set 和 get 方法来进行（无参构造提供）
2. 直接在创建对象的时候进行赋值（有参构造提供）
3. 无参构造和有参构造的方法名都要与类名保持一致

## 练习

```
1.使用面向对象的思想，编写自定义描述狗的信息。设定属性包括：品种，年龄，心  情，名字；方法包括：叫，跑。
要求：
1)设置属性的私有访问权限，通过公有的 get,set 方法实现对属性的访问
2)限定心情只能有“心情好”和“心情不好”两种情况，如果无效输入进行提示，  默认设置“心情好”。
3)设置构造函数实现对属性赋值
4)叫和跑的方法，需要根据心情好坏，描述不同的行为方式。
编写测试类，测试狗类的对象及相关方法（测试数据信息自定义）
```

### 编写类

```
package com.fuhai.day04;

import java.util.Scanner;

public class Dog {
    // 属性私有，只能使用公有的get和set方法进行访问和修改
    private String variety;
    private int age;
    private String feeling = "心情好";
    private String dogName;
    // get 和 set 方法  
    // 可以使用快捷键 alt + fn + insert 快速设置
    public String getVariety() {
        return variety;
    }

    public void setVariety(String variety) {
        this.variety = variety;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getFeeling() {
        return feeling;
    }
    
    // set心情，对心情的输入进行判断，如果不满足条件则让再次输入，直到输入的结果满足条件，在进行之后的对象调用
    public void setFeeling(String feeling) {
        if ((feeling.equals("心情好") | feeling.equals("心情不好"))) {
            this.feeling = feeling;
        } else {
            System.out.println("心情只有'心情好'和'心情不好'请重新输入" + this.dogName + "的心情：");
            Scanner scanner = new Scanner(System.in);
            String fell = scanner.next();
            setFeeling(fell);
        }
    }

    public String getDogName() {
        return dogName;
    }

    public void setDogName(String dogName) {
        this.dogName = dogName;
    }
    // 无参构造
    public Dog(){
    }
    // 有参构造
    public Dog(String name,String variety,int age,String feeling) {
        this.dogName = name;
        this.variety = variety;
        this.age = age;
        if (feeling.equals("心情好") | feeling.equals("心情不好")) {
            this.feeling = feeling;
        } else {
            System.out.println("心情只有'心情好'和'心情不好'请重新输入" + this.dogName + "的心情：");
            Scanner scanner = new Scanner(System.in);
            String fell = scanner.next();
            setFeeling(fell);
        }
    }

    // 跑的成员方法
    public void run(){
        if (this.feeling.equals("心情不好")){
            System.out.println(this.dogName+"的心情不好，不想跑！");
        }else {
            System.out.println(this.dogName+"的心情好，跑起来了！");
        }
    }

   // 叫的成员方法
    public void woff(){
        if (this.feeling.equals("心情不好")){
            System.out.println(this.dogName+"的心情不好，不想叫！");
        }else {
            System.out.println(this.dogName+"的心情好，叫起来了！");
        }
    }

}
```

### 编写测试

```
// 使用有参构造
Dog dog1 = new Dog("dog1", "土狗", 4, "心情不好");
dog1.run();
dog1.woff();
Dog dog2 = new Dog("dog2", "金毛", 3, "心情好");
dog2.run();
dog2.woff();
Dog dog3 = new Dog("dog3", "哈士奇", 2, "心情非常好");
dog3.run();
dog3.woff();

// 使用无参构造
Dog dog4 = new Dog();
dog4.setDogName("dog4");
dog4.setAge(3);
dog4.setVariety("萨摩耶");
dog4.setFeeling("心情好");
dog4.run();
dog4.woff();

Dog dog5 = new Dog();
dog5.setDogName("dog5");
dog5.setAge(3);
dog5.setVariety("柴犬");
dog5.setFeeling("心情不好");
dog5.run();
dog5.woff();

Dog dog6 = new Dog();
dog6.setDogName("dog6");
dog6.setAge(3);
dog6.setVariety("犬");
dog6.setFeeling("好");
dog6.run();
dog6.woff();
// 进行默认值的检测
Dog dog7 = new Dog();
dog7.setDogName("dog7");
dog7.setAge(3);
dog7.setVariety("狗");
dog7.run();
dog7.woff();
```

### 输出结果

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a3e393ea070bacb10ab5ba0b56816b29.png)
