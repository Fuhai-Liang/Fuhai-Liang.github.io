---
title: "【MySQL的DQL查询语句】"
description: "MySQL DQL 查询语句的汇总与总结。"
category: note
badge: "笔记"
tags: []
date: "2023-12-01"
pinned: false
draft: false
---

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/f47881690ed347a4cdab102eb8b9aedb.png)

在上个DDL博客中找到学生表将其中的数据读入到mysql中，使用虚拟机或者Navicat都可以。

## 将学生表导入Navicat中

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/ecbe5b67f3b54ef48c838e68b8e47180.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e6ee26e70bda53df034da56aa4f7b543.png)

## 查询语句

### 查询一整张表

select \* from students;  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/ad62d9d1d670cbd109785b02f55c4e31.png)

### 查询年龄大于22

select \*  
 from students  
 where students.age > 22;  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d4f400a30d25965b02851a5740fe2d51.png)

### 年龄大于22的女生

select clazz  
 ,sname  
 ,age  
 ,gender  
 from students  
 where students.age > 22 and students.gender = “女”;  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/067df8abb3a55018b7b6746a3c2158f3.png)

### 查找文科的学生

select \*  
 from students  
 where clazz like “%文科%”; # %为模糊匹配  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/2727edb2da77aea9b62a4a6ccff14a18.png)

### 查找六班的学生

select \*  
 from students  
 where clazz like “%六班%”;

select \*  
 from students  
 where clazz like “%六%”;  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/451d09ba6cfb918b3ed0fc8b1e6ba9df.png)

### 计算学生的总分 （group by）

group by 后面的字段必须在select 里面体现出  
 并且不能体现出不在group by 之后的字段 只有  
 sum avg count max min 这些函数才可以另外体现

select score.id  
 ,sum(sco)  
 from score  
 group by score.id;  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/1b18f9c9f467153b94b8acd21c729615.png)  
 这是计算全部学生的总和 可以看成是一个值 在where 判断语句中可以直接用  
 select sum(sco) from score;

### 合并两表 （join on xxxx）

select t1.\*  
 ,t2.sub\_id  
 ,t2.sco  
 from students as t1  
 join score as t2  
 on t1.id = t2.id;  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/f119f9cce021a2594112b2def413ea8f.png)

### 合并两张表 并求总分

#### 先合并在聚合

select tt1.id  
 ,tt1.sname  
 ,tt1.gender  
 ,tt1.clazz  
 ,sum(tt1.sco) as sum\_sco  
 ,max(tt1.sco) as max\_sco  
 from (select t1.\*  
 ,t2.sco  
 from students as t1  
 join score as t2  
 on t1.id = t2.id ) as tt1  
 group by tt1.id,tt1.sname,tt1.gender,tt1.clazz;  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a39e7626e2d37006c1661935b797e8b0.png)

#### 先聚合在合并

select t2.\*  
 ,t1.sum\_sco  
 from (select score.id  
 ,sum(score.sco) as sum\_sco  
 from score  
 group by score.id) as t1  
 join students as t2  
 on t1.id = t2.id;  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/cd0a58b4d8c73b024cb58e6d7914d38a.png)

### 找到总分分数大于500的学生

#### having方法(在group by 之后执行）

select tt1.id  
 ,tt1.sname  
 ,tt1.age  
 ,tt1.gender  
 ,tt1.clazz  
 ,sum(sco) as sum\_sco  
 from (select t1.\*  
 ,t2.sub\_id  
 ,t2.sco  
 from students as t1  
 join score as t2  
 on t1.id = t2.id ) as tt1  
 group by tt1.id,tt1.sname,tt1.age,tt1.gender,tt1.clazz  
 having sum\_sco > 500;  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/8a9814a3d04ca72f41053a547e9bb58f.png)

#### 用where 方法来选择

select t1.\*  
 ,t2.sum\_sco  
 from students as t1  
 join (select score.id  
 ,sum(sco) as sum\_sco  
 from score  
 group by score.id) t2  
 on t1.id = t2.id  
 where t2.sum\_sco > 500;  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/bc307fd023df53528b8fe96649f1fe12.png)

### 降序排列 （order by xxxx desc ）

select tt1.id  
 ,tt1.sname  
 ,tt1.age  
 ,tt1.gender  
 ,tt1.clazz  
 ,sum(sco) as sum\_sco  
 from (select t1.\*  
 ,t2.sub\_id  
 ,t2.sco  
 from students as t1  
 join score as t2  
 on t1.id = t2.id ) as tt1  
 group by tt1.id,tt1.sname,tt1.age,tt1.gender,tt1.clazz  
 having sum\_sco > 500  
 order by sum\_sco desc # 不加desc 为升序排列

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/dab489b7c015b8bb2279e5b1460314f3.png)

### 只展示5个学生 (limit number)

select tt1.id  
 ,tt1.sname  
 ,tt1.age  
 ,tt1.gender  
 ,tt1.clazz  
 ,sum(sco) as sum\_sco  
 from (select t1.\*  
 ,t2.sub\_id  
 ,t2.sco  
 from students as t1  
 join score as t2  
 on t1.id = t2.id ) as tt1  
 group by tt1.id,tt1.sname,tt1.age,tt1.gender,tt1.clazz  
 having sum\_sco > 500  
 order by sum\_sco desc # 不加desc 为升序排列  
 limit 5;  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/794ecd061af69f17b60e48f9b17bc080.png)

#### 求前三门课程总分(where 在group by 之前执行)

select score.id  
 ,sum(sco) as sum\_sco  
 from score  
 where score.sub\_id = 1000001  
 or score.sub\_id = 1000002  
 or score.sub\_id = 1000003  
 group by score.id;  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e2fe49c93287028b74af37fcbe4fbfc3.png)

## 合并语句（left join right join 等等）

设置两个表a和b其中的数据如下

a表 （id 学号）（name 姓名）  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/6a70c3db4376bd576331cb892ae98d40.png)  
 b表 （id 学号） （s\_id 学科编号）  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/d85765d92a5cac53da75cb38943c2d93.png)

### inner join 内连接（默认的连接方式）

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/3ecc45b72d4c58cfa8d6f0dd88309f09.png)  
 只会合并两者都有的元素 没有的元素直接舍弃

### left join （左连接）

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a2651d9649ee556989fe7103a4f41ba0.png)  
 以左边为基准进行左连接 没有的值则为null显示

### right join（右连接）

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/9fb1d41d3fa700c9d8c4aef0e6d192cc.png)  
 以右边的表为基准进行合并 没有的值则补位空值

### union （上下合并）并且去重

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/796a37d4dc23e67c48170696ca8a5dcb.png)

### union all （上下合并）并且不去重

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/5a15795e8ed52fd09eb0520ef462b806.png)

### 全连接

sql中实际上不提供全连接 但是如果把左连接根右连接合并则就是全连接  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/c84949f5fc27dec6cd09796f277da699.png)

### 笛卡尔积

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/9c8c1618cb440419e99434aec1cec415.png)  
 每个a数据都要根b数据合并一次

## where in 使用方法

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a41090681a436e8d9c8d26187613b3fe.png)  
 ![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/0d47746296678e45f20fe7711b329973.png)

### 自增列插入数据 自增列数据使用null 或 0 占位

insert into users() values(null,“zp”);  
 insert into users() values(0,“yn”);

## 复习

order 的执行顺序还在select 之后  
 大致的执行顺序为  
 == from > where > group by > select > having > order by > limit==  
 括号里面的优先级最高

```
-- select 语句
select * 
from table
where conditions
group by columns
having conditions
order by columns
limit start,length;
```

```
join (left right inner) 三种形式
union (去重) union all 去重和不去重的区别
```

### updata 语句 更新语句 delete 语句 删除语句

```
-- updata 语句 更新语句
UPDATE students set gender='1' where gender='男';
UPDATE students set gender='0' where gender='女';
UPDATE students set gender='1';

-- delete 语句 删除语句
delete from students where gender='女';
delete from students;
-- 截断表 将表删除并清空 所有的东西重新开始刷新 在进行新的书写
truncate students;
```

### 主键 ，FOREIGN KEY 约束建

主键是唯一的 是唯一约束 并且特性是 非空且唯一  
 FOREIGN KEY 这个是与另外一个表关联 ，当另外一个表变化后 子表也会变化

## 全部代码

```
-- 查询一整张表
select * from students;

-- 查询年龄大于22
select *
from students
where students.age > 22;

-- 年龄大于22的女生
select clazz
			 ,sname
			 ,age
			 ,gender
from students
where students.age > 22 and students.gender = "女";

-- 查找文科的学生
select *
from students
where clazz like "%文科%"; # %为模糊匹配

-- 查找六班的学生
select *
from students
where clazz like "%六班%";

select *
from students
where clazz like "%六%";

-- 计算学生的总分  
# group by 后面的字段必须在select 里面体现出
# 并且不能体现出不在group by 之后的字段 只有 
# sum avg count max min 这些函数才可以另外体现
select score.id
       ,sum(sco)
from score
group by score.id;

# 这是计算全部学生的总和 可以看成是一个值 在where 判断语句中可以直接用
select sum(sco) from score;

-- 合并两表
select t1.*
       ,t2.sub_id
			 ,t2.sco
from students as t1
join score as t2
on t1.id = t2.id;

-- 合并两张表 并求总分

# 先合并在聚合 
select tt1.id
       ,tt1.sname
			 ,tt1.gender
			 ,tt1.clazz
			 ,sum(tt1.sco) as sum_sco
			 ,max(tt1.sco) as max_sco
from (select t1.*
			       ,t2.sco
from students as t1
join score as t2
on t1.id = t2.id ) as tt1
group by tt1.id,tt1.sname,tt1.gender,tt1.clazz;

# 先聚合在合并
select t2.*
			 ,t1.sum_sco
from (select score.id
             ,sum(score.sco) as sum_sco
from score 
group by score.id) as t1
join students as t2
on t1.id = t2.id;

-- 找到总分分数大于500的学生
# having 在group by 之后执行
select tt1.id
			 ,tt1.sname
			 ,tt1.age
			 ,tt1.gender
			 ,tt1.clazz
			 ,sum(sco) as sum_sco
from (select t1.*
       ,t2.sub_id
			 ,t2.sco
from students as t1
join score as t2
on t1.id = t2.id ) as tt1
group by tt1.id,tt1.sname,tt1.age,tt1.gender,tt1.clazz
having sum_sco > 500;

# where 方法 ！！ where要在having前面执行
select t1.*
       ,t2.sum_sco
from students as t1
join (select score.id
       ,sum(sco) as sum_sco
from score 
group by score.id) t2
on t1.id = t2.id
where t2.sum_sco > 500;

-- 降序排列
select tt1.id
			 ,tt1.sname
			 ,tt1.age
			 ,tt1.gender
			 ,tt1.clazz
			 ,sum(sco) as sum_sco
from (select t1.*
       ,t2.sub_id
			 ,t2.sco
from students as t1
join score as t2
on t1.id = t2.id ) as tt1
group by tt1.id,tt1.sname,tt1.age,tt1.gender,tt1.clazz
having sum_sco > 500
## 降序排列
order by sum_sco desc # 不加desc 为升序排列
## 只展示5个学生
limit 5;

-- where 在group by 之前执行
-- 求前三门课程总分
select  score.id
        ,sum(sco) as sum_sco
from score
where score.sub_id = 1000001 
      or score.sub_id = 1000002 
			or score.sub_id = 1000003
group by score.id;
```
