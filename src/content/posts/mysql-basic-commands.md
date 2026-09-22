---
title: "【MySQL的基本命令{DML 和 DDL}】"
description: "MySQL 的 DML、DDL 基本命令汇总。"
category: note
badge: "笔记"
tags: []
date: "2023-12-01"
pinned: false
draft: false
---

## MySQL的基本命令

### 展示所有数据库

```
show databases;
```

### 展示某个数据库中所有的表

```
show tables;
```

### 切换到某个数据库

```
use db_name
```

### 查看当前在哪个数据库

```
select database();
```

### 查询一张表的全部数据

```
select * from table_name;
```

### 新建一个数据库

```
create database db_name;
```

### 新建一张表

```
create table stu(
    card_id int,
    name varchar(255)
);
```

### 插入一条数据

```
insert into stu(card_id,name) values(34001,"tjf");
```

### 删除一个表

```
drop table stu;
```

### 删除一个库

```
drop database db_name;
```

### 描述表的信息

```
desc students;
```

### 展示表的创建sql代码

```
show create table table_name;
```

### 展示库的创建sql代码

```
show create database db_name;
```

### 导出数据 （Navicat也可以导出sql文件）

```
# 终端运行此语句
mysqldump -u -root -p stu students > /root/students.sql
```

### 向数据库中导入数据

```
mysql> source /root/students.sql;
```

### 新增一列

```
alter table students add height float;
```

### 修改列属性为int 和 非空

```
alter table students MODIFY height int not null;
```

### 删除列名

```
alter table students drop height;
```

### 修改表的名字

```
rename table students to student;
```

### 修改列名

```
alter table students change id sid VARCHAR(255);
```

### 修改表的字符集

```
alter table students CHARACTER set utf8;
```

## 查询语句DQL单独开了一个专题
