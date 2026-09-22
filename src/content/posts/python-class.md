---
title: "python 类 的学习"
description: "类与方法、初始化参数的使用。"
category: note
badge: "笔记"
tags: []
date: "2023-11-16"
pinned: false
draft: false
---

## 创建一个类

```
class Student():
    name = None
    score = 0
    ## 初始化 默认值

    ## 初始化方法 （构造方法）
    def __init__(self,name,score):
        ## 类中有两个属性 name 和 score
        self.name = name
        self.score = score
        ## 接受函数传过来的值
```

## 定义类中的方法

print\_score()方法

```
    def print_score(self):
        # 类中的方法 （如何使用初始化之中的参数）
        print("学生姓名为{},学生成绩为{}".format(self.name,self.score))
```

## 构建一个子类继承父类

```
class BigStudent(Student):

    def __init__(self,name,score,feature):
        super().__init__(name,score)
        ## 子类调用父类进行初始化函数时 必须用super().
        self.feature = feature
```

子类BigStudent继承了父类Student，并且可以有自己的feature属性  
 继承父类的方法和属性 需要super()\_\_init\_\_传入属性

## 例：定义一个学生的特有特征并且继承

```
class LFH(BigStudent):
    # name,score ,feature 这些都是继承的属性 都要传入这些参数
    # glass 属于LFH特有属性 需要后面加上self.glass = glass
    def __init__(self,name,score ,feature,glass):
        super().__init__(name,score ,feature)
        self.glass = glass
    ## 可以继续添加属性
    ## 下面可以添加LFH的方法......
```

类是对象的抽象 对象是类的实例

## 一个完整的对象初始化

```
#!/usr/bin/env python
# -*- coding: utf-8 -*-
# time: 2023/11/16 18:26
# file: 完整的对象初始化.py
# author: FUHAI
# email: 2559764223@qq.com

class Student():
    def __init__(self,name,score):
        self.name = name
        self.score = score

    def print_score(self):
        print("name is {},score is {}".format(self.name,self.score))

class BigStudent(Student):
    def __init__(self,name,score,feature):
        super().__init__(name , score)
        ## super中init__(这里面不需要带self) 在def __init__(这里面带上self就好)
        self.feature = feature

    def print_feature(self):
        print("bigstudent like {}".format(self.feature))

class Lfh(BigStudent):
    def __init__(self,name,score,feature,glass):
        super().__init__(name,score,feature)
        self.glass = glass

    def print_glass(self):
        print("this is Lfh special feature :{}".format(self.glass))

if __name__ == '__main__':
    lfh = Lfh("lfh",888,"sleeping",'glass')
    lfh.print_score()
    lfh.print_feature()
    lfh.print_glass()
```

## 多态

父类的引用指向子类的对象  
 多态的前提 ： 继承、重写方法  
 多种形态 不同类中表现的形式不一样

```
class Animal():
    def run(self):
        print("Animal is running")

class Dog(Animal):

    def run(self):
        print("dog is running")

class Cat(Animal):
    def run(self):
        print("cat is running")

def animal_run(a: Animal):
    a.run()

if __name__ == '__main__':
    animal = Animal()
    spike = Dog()
    spike.run()
    tom = Cat()
    animal_run(animal)
    animal_run(spike)
    animal_run(tom)
```

这些类Dog Cat中都有这个方法 并且都继承了animal中的run,类自己又有自己的run方法 优先调用自己类之中的。这样为多态，多种形态。
