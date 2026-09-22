---
title: "【MySQL 50题进阶练习】"
description: "MySQL 高级进阶 50 题练习。"
category: note
badge: "笔记"
tags: []
date: "2023-12-03"
pinned: false
draft: false
---

## 数据表介绍

* 1.学⽣表 Student(SId,Sname,Sage,Ssex)

  + SId 学⽣编号
  + Sname 学⽣姓名
  + Sage 出⽣年⽉
  + Ssex 学⽣性别
* 2.课程表 Course(CId,Cname,TId)

  + CId 课程编号
  + Cname 课程名称
  + TId 教师编号
* 3.教师表 Teacher(TId,Tname)

  + TId 教师编号
  + Tname 教师姓名
* 4.成绩表 SC(SId,CId,score)

  + SId 学⽣编号
  + CId 课程编号
  + score 分数

### 建表语句

* 学⽣表 Student

  ```
      create table Student(
          SId varchar(10),
          Sname varchar(10),
          Sage datetime,
          Ssex varchar(10)
      );
  ```
* 课程表 Course

  ```
  create table Course(
      CId varchar(10),
      Cname nvarchar(10),
      TId varchar(10)
  );
  ```
* 教师表 Teacher

  ```
  create table Teacher(
      TId varchar(10),
      Tname varchar(10)
  );
  ```
* 成绩表 SC

  ```
  create table SC(
      SId varchar(10),
      CId varchar(10),
      score decimal(18,1)
  );
  ```

### 插入数据

* 学⽣表 Student

  ```
  -- 学生表 Student
  insert into Student values('01' , '赵雷' , '1990-01-01' , '男'); 
  insert into Student values('02' , '钱电' , '1990-12-21' , '男'); 
  insert into Student values('03' , '孙⻛' , '1990-12-20' , '男'); 
  insert into Student values('04' , '李云' , '1990-12-06' , '男'); 
  insert into Student values('05' , '周梅' , '1991-12-01' , '⼥'); 
  insert into Student values('06' , '吴兰' , '1992-01-01' , '⼥'); 
  insert into Student values('07' , '郑⽵' , '1989-01-01' , '⼥'); 
  insert into Student values('09' , '张三' , '2017-12-20' , '⼥'); 
  insert into Student values('10' , '李四' , '2017-12-25' , '⼥'); 
  insert into Student values('11' , '李四' , '2012-06-06' , '⼥'); 
  insert into Student values('12' , '赵六' , '2013-06-13' , '⼥'); 
  insert into Student values('13' , '孙七' , '2014-06-01' , '⼥');
  ```
* 课程表 Course

  ```
  -- 科⽬表 Course 
  insert into Course values('01' , '语⽂' , '02'); 
  insert into Course values('02' , '数学' , '01'); 
  insert into Course values('03' , '英语' , '03');
  ```
* 教师表 Teacher

  ```
  -- 教师表 Teacher 
  insert into Teacher values('01' , '张三'); 
  insert into Teacher values('02' , '李四'); 
  insert into Teacher values('03' , '王五');
  ```
* 成绩表 SC

  ```
  -- 成绩表 SC 
  insert into SC values('01' , '01' , 80); 
  insert into SC values('01' , '02' , 90); 
  insert into SC values('01' , '03' , 99); 
  insert into SC values('02' , '01' , 70); 
  insert into SC values('02' , '02' , 60); 
  insert into SC values('02' , '03' , 80); 
  insert into SC values('03' , '01' , 80); 
  insert into SC values('03' , '02' , 80); 
  insert into SC values('03' , '03' , 80); 
  insert into SC values('04' , '01' , 50); 
  insert into SC values('04' , '02' , 30); 
  insert into SC values('04' , '03' , 20); 
  insert into SC values('05' , '01' , 76); 
  insert into SC values('05' , '02' , 87); 
  insert into SC values('06' , '01' , 31); 
  insert into SC values('06' , '03' , 34); 
  insert into SC values('07' , '02' , 89); 
  insert into SC values('07' , '03' , 98);
  ```

### 练习题目

#### 1.查询" 01 “课程⽐” 02 "课程成绩⾼的学⽣的信息及课程分数

#### 2.查询同时存在" 01 “课程和” 02 "课程的情况

#### 3.查询存在" 01 “课程但可能不存在” 02 "课程的情况(不存在时显示为 null )

#### 4.查询不存在" 01 “课程但存在” 02 "课程的情况

#### 5.查询平均成绩⼤于等于 60 分的同学的学⽣编号和学⽣姓名和平均成绩

#### 6.查询在 SC 表存在成绩的学⽣信息

#### 7.查询所有同学的学⽣编号、学⽣姓名、选课总数、所有课程的总成绩(没成绩的显示为 null )

#### 8.查询「李」姓⽼师的数量

#### 9.查询学过「张三」⽼师授课的同学的信息

#### 10.查询没有学全所有课程的同学的信息

#### 11.查询⾄少有⼀⻔课与学号为" 01 "的同学所学相同的同学的信息

#### 12.查询和" 01 "号的同学学习的课程 完全相同的其他同学的信息

#### 13.查询没学过"张三"⽼师讲授的任⼀⻔课程的学⽣姓名

#### 14.查询两⻔及其以上不及格课程的同学的学号，姓名及其平均成绩

#### 15.检索" 01 "课程分数⼩于 60，按分数降序排列的学⽣信息

#### 16.按平均成绩从⾼到低显示所有学⽣的所有课程的成绩以及平均成绩

#### 17.查询各科成绩最⾼分、最低分和平均分： 以如下形式显示：课程 ID，课程 name，最⾼分，最低分，平均分，及格率，中等率，优良率，优秀率 及格为>=60，中等为：70-80，优良为：80-90，优秀为：>=90要求输出课程号和选修⼈数，查询结果按⼈数降序排列，若⼈数相同，按课程号升序排列

#### 18.按各科平均成绩进⾏排序，并显示排名， Score 重复时保留名次空缺

#### 19.按各科平均成绩进⾏排序，并显示排名， Score 重复时不保留名次空缺

#### 20.查询学⽣的总成绩，并进⾏排名，总分重复时保留名次空缺

#### 21.查询学⽣的总成绩，并进⾏排名，总分重复时不保留名次空缺

#### 22.统计各科成绩各分数段⼈数：课程编号，课程名称，[100-85]，[85-70]，[70-60]，[60-0]及所占百分⽐

#### 23.查询各科成绩前三名的记录

#### 24.查询每⻔课程被选修的学⽣数

#### 25.查询出只选修两⻔课程的学⽣学号和姓名

#### 26.查询男⽣、⼥⽣⼈数

#### 27.查询名字中含有「⻛」字的学⽣信息

#### 28.查询同名同性学⽣名单，并统计同名⼈数

#### 29.查询 1990 年出⽣的学⽣名单

#### 30.查询每⻔课程的平均成绩，结果按平均成绩降序排列，平均成绩相同时，按课程编号升序排列

#### 31.查询平均成绩⼤于等于 85 的所有学⽣的学号、姓名和平均成绩

#### 32.查询课程名称为「数学」，且分数低于 60 的学⽣姓名和分数

#### 33.查询所有学⽣的课程及分数情况（存在学⽣没成绩，没选课的情况）

#### 34.查询任何⼀⻔课程成绩在 70 分以上的姓名、课程名称和分数

#### 35.查询不及格的课程

#### 36.查询课程编号为 01 且课程成绩在 80 分以上的学⽣的学号和姓名

#### 37.求每⻔课程的学⽣⼈数

#### 38.成绩不重复，查询选修「张三」⽼师所授课程的学⽣中，成绩最⾼的学⽣信息及其成绩

#### 39.成绩有重复的情况下，查询选修「张三」⽼师所授课程的学⽣中，成绩最⾼的学⽣信息及其成绩

#### 40.查询不同课程成绩相同的学⽣的学⽣编号、课程编号、学⽣成绩

#### 41.查询每⻔课程成绩最好的前两名

#### 42.统计每⻔课程的学⽣选修⼈数（超过 5 ⼈的课程才统计）。

#### 43.检索⾄少选修两⻔课程的学⽣学号

#### 44.查询选修了全部课程的学⽣信息

#### 45.查询各学⽣的年龄，只按年份来算

#### 46.按照出⽣⽇期来算，当前⽉⽇ < 出⽣年⽉的⽉⽇则，年龄减⼀

#### 47.查询本周过⽣⽇的学⽣

#### 48.查询下周过⽣⽇的学⽣

#### 49.查询本⽉过⽣⽇的学⽣

#### 50.查询下⽉过⽣⽇的学⽣

## 答案

```
    create table Student(
        SId varchar(255),
        Sname varchar(255),
        Sage datetime,
        Ssex varchar(255)
    ); 
		
		create table Course(
    CId varchar(255),
    Cname varchar(255),
    TId varchar(255)
);

create table Teacher(
    TId varchar(255),
    Tname varchar(255)
);

create table SC(
    SId varchar(255),
    CId varchar(255),
    score decimal(18,1)
);

-- 学生表 Student
insert into Student values('01' , '赵雷' , '1990-01-01' , '男'); 
insert into Student values('02' , '钱电' , '1990-12-21' , '男'); 
insert into Student values('03' , '孙风' , '1990-12-20' , '男'); 
insert into Student values('04' , '李云' , '1990-12-06' , '男'); 
insert into Student values('05' , '周梅' , '1991-12-01' , '女'); 
insert into Student values('06' , '吴兰' , '1992-01-01' , '女'); 
insert into Student values('07' , '郑竹' , '1989-01-01' , '女'); 
insert into Student values('09' , '张三' , '2017-12-20' , '女'); 
insert into Student values('10' , '李四' , '2017-12-25' , '女'); 
insert into Student values('11' , '李四' , '2012-06-06' , '女'); 
insert into Student values('12' , '赵六' , '2013-06-13' , '女'); 
insert into Student values('13' , '孙七' , '2014-06-01' , '女');

-- 科程表 Course 
insert into Course values('01' , '语文' , '02'); 
insert into Course values('02' , '数学' , '01'); 
insert into Course values('03' , '英语' , '03');

-- 教师表 Teacher 
insert into Teacher values('01' , '张三'); 
insert into Teacher values('02' , '李四'); 
insert into Teacher values('03' , '王五'); 

-- 成绩表 SC 
insert into SC values('01' , '01' , 80); 
insert into SC values('01' , '02' , 90); 
insert into SC values('01' , '03' , 99); 
insert into SC values('02' , '01' , 70); 
insert into SC values('02' , '02' , 60); 
insert into SC values('02' , '03' , 80); 
insert into SC values('03' , '01' , 80); 
insert into SC values('03' , '02' , 80); 
insert into SC values('03' , '03' , 80); 
insert into SC values('04' , '01' , 50); 
insert into SC values('04' , '02' , 30); 
insert into SC values('04' , '03' , 20); 
insert into SC values('05' , '01' , 76); 
insert into SC values('05' , '02' , 87); 
insert into SC values('06' , '01' , 31); 
insert into SC values('06' , '03' , 34); 
insert into SC values('07' , '02' , 89); 
insert into SC values('07' , '03' , 98);

-- 1.查询" 01 “课程比” 02 "课程成绩高的学生的信息及课程分数
select tt1.*
       ,tt2.C_01
			 ,tt2.score_01
			 ,tt2.C_02
			 ,tt2.score_02
from 
Student as tt1
join 
(select t1.SId
        ,t1.CId as C_01
				,t1.score   as score_01
				,t2.CId as C_02
				,t2.score as score_02
from 
(select * from SC
where SC.CId ='01') as t1 
join 
(select * from SC
where SC.CId ='02') as t2
on t1.SId = t2.SId
where t1.score > t2.score) as tt2
on tt1.SId = tt2.SId;

-- 2.查询同时存在" 01 “课程和” 02 "课程的情况
select * from Student 
where Student.SId in (
select t1.SId from 
(select SC.CId as C_01
       ,SC.SId 
from SC 
group by SC.CId ,SC.SId
having C_01 = '01') as t1
inner join 

(select SC.CId as C_02
       ,SC.SId 
from SC 
group by SC.CId ,SC.SId
having C_02 = '02') as t2
on t1.SId = t2.SId);

-- 3.查询存在" 01 “课程但可能不存在” 02 "课程的情况(不存在时显示为 null )

select tt1.*
			,tt2.score as CId_02
from 
(select t1.*
       ,t2.score as CId_01
from 
(select * from Student where Student.SId in (
select SId from SC
where SC.CId = '01')) as t1
join 
(select * from SC
where SC.CId = '01') as t2
on t1.SId = t2.SId) as tt1
left join 
(select * from SC
where SC.CId = '02') as tt2
on tt1.SId = tt2.SId

-- 4.查询不存在" 01 “课程但存在” 02 "课程的情况
select t1.* from
(select * from Student
where Student.SId not in (select SC.SId from SC
where SC.CId = '01') )as t1
join 
(select * from Student 
where Student.SId in (select SC.SId from SC
where SC.CId = '02') ) as t2
on t1.SId = t2.SId;

-- 5.查询平均成绩大于等于 60 分的同学的学生编号和学生姓名和平均成绩
select t1.SId
       ,t1.Sname
			 ,t2.avg_score
from Student as t1
join (select SC.SId
       ,avg(SC.score) as avg_score
from SC
group by SC.SId
having avg_score >= 60) as t2
on t1.SId = t2.SId

-- 6.查询在 SC 表存在成绩的学生信息
select Student.*
			,SC.CId
			,SC.score
from Student,SC where Student.SId = SC.SId

-- 7.查询所有同学的学生编号、学生姓名、选课总数、所有课程的总成绩(没成绩的显示为 null )
select t1.*
       ,t2.cont
			 ,t2.sum_score
from
Student as t1
left join 
# 选课总数 课程的总成绩
(select SC.SId
       ,count(*) as cont
			 ,sum(SC.score) as sum_score
from SC
group by SC.SId) as t2
on t1.SId = t2.SId;

-- 8.查询「李」姓老师的数量
select count(*) as teacher_num from Teacher 
where Teacher.Tname like "李%";

-- 9.查询学过「张三」老师授课的同学的信息
select * from Student 
where Student.SId in (
select SId from SC 
where SC.CId = 
(select CId from Course
where Course.TId = (select Teacher.TId from Teacher
where Teacher.Tname = "张三")));

-- 10.查询没有学全所有课程的同学的信息
select t1.*
       ,t2.cont
from Student as t1
left join 
(select SC.SId
        ,count(*) as cont
from SC 
group by SC.SId) as t2
on t1.SId = t2.SId
where t2.cont !=3 or t2.cont is Null;

-- 11.查询至少有一门课与学号为" 01 "的同学所学相同的同学的信息
select * 
from Student 
where Student.SId in (
select distinct SId from SC
where SC.CId in (
select CId from SC
where SC.SId = '01') and SC.SId != '01');

-- 12.查询和" 01 "号的同学学习的课程 完全相同的其他同学的信息
select * from Student 
where Student.SId in (
select t1.SId from 
(select distinct SId from SC
where SC.CId in (
select CId from SC
where SC.SId = '01')) as t1
join 
(select SC.SId
       ,count(*) as cont
from SC
group by SC.SId) as t2
on t1.SId = t2.SId
where t2.cont=3 and t1.SId != '01');

-- 13.查询没学过"张三"老师讲授的任一门课程的学生姓名

select * from Student where Student.SId not in (
## 张三教的课
select SId from SC where SC.CId in (
select CId from Course where Course.TId = 
(select Teacher.TId from Teacher where Teacher.Tname = '张三')))

-- 14.查询两门及其以上不及格课程的同学的学号，姓名及其平均成绩
select tt1.*
			,tt2.avg_sco
from Student as tt1
join 
(select t1.*
from 
(select SC.SId
			,avg(SC.score) as avg_sco
from SC
group by SC.SId) as  t1
join 
(select SC.SId
       ,count(*) as cont
from SC
where SC.score < 60
group by SC.SId
having cont >= 2 ) as t2
on t1.SId = t2.SId) tt2
on tt1.SId = tt2.SId

-- 15.检索" 01 "课程分数小于 60，按分数降序排列的学生信息

select t1.*
       ,t2.CId
			 ,t2.score
from Student as t1
join 
(select * from SC
where SC.CId = '01' and SC.score<60) as t2
on t1.SId = t2.SId
order by score desc ;

-- 16.按平均成绩从高到低显示所有学生的所有课程的成绩以及平均成绩
select tttt1.*
       ,tttt2.score_01
			 ,tttt2.score_02
			 ,tttt2.score_03
			 ,tttt2.avg_score
from Student as tttt1
left join
(select ttt2.*
       ,ttt1.avg_score
from 
# 平均成绩
(select SC.SId
       ,avg(SC.score) as avg_score
from SC 
group by SC.SId) as ttt1
join 
# 所有课程的成绩
(select tt1.*
       ,tt2.score_03
from 
(
select t1.*
       ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
left join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId 
union
select t2.SId
       ,t1.score_01
			 ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
right join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId ) as tt1
left join
(select SC.SId
       ,SC.score as score_03
from SC
where SC.CId = '03') as tt2
on tt1.SId = tt2.SId
order by tt1.SId) as ttt2
## 所有课程的成绩合并
on ttt1.SId = ttt2.SId) as tttt2
on tttt1.SId = tttt2.SId
order by tttt2.avg_score desc;

-- 17.查询各科成绩最高分、最低分和平均分： 以如下形式显示：课程 ID，课程 name，最⾼分，最低分，平均分，及格率，中等率，优良率，优秀率 及格为>=60，中等为：70-80，优良为：80-90，优秀为：>=90要求输出课程号和选修⼈数，查询结果按⼈数降序排列，若人数相同，按课程号升序排列

## 22.统计各科成绩各分数段人数：课程编号，课程名称，[100-85]，[85-70]，[70-60]，[60-0]及所占百分比

##### 23.查询各科成绩前三名的记录
select * from Student as t1
right join 
((select * from SC 
where SC.CId = '01'
order by SC.score desc
limit 3)
union 
(select * from SC 
where SC.CId = '02'
order by SC.score desc
limit 3)
union 
(select * from SC 
where SC.CId = '03'
order by SC.score desc
limit 3)) as t2
on t1.SId = t2.SId
order by t2.CId,t2.score desc;

##### 24.查询每门课程被选修的学生数
select SC.CId
       ,count(*)
from SC
group by SC.CId;

##### 25.查询出只选修两门课程的学生学号和姓名
select t1.SId
       ,t1.Sname
from Student as t1
join 
(select SC.SId
       ,count(*) as cont
from SC
group by SC.SId
having cont = 2) as t2
on t1.SId = t2.SId;
##### 26.查询男生、女生人数
select Student.Ssex
       ,count(*) as cont
from Student
group by Student.Ssex

##### 27.查询名字中含有「风」字的学生信息
select * from Student 
where Student.Sname like '%风%';

##### 28.查询同名同性学生名单，并统计同名人数
select Student.Sname
       ,Student.Ssex
			 ,count(*) 
from Student 
group by Student.Sname,Student.Ssex;

##### 29.查询 1990 年出生的学生名单
select * from Student 
where Student.Sage like '1990%';

##### 30.查询每门课程的平均成绩，结果按平均成绩降序排列，平均成绩相同时，按课程编号升序排列
select SC.CId
       ,avg(SC.score) as avg_score
from SC
group by SC.CId
order by avg_score desc;

##### 31.查询平均成绩大于等于 85 的所有学生的学号、姓名和平均成绩
select tttt1.*
       ,tttt2.score_01
			 ,tttt2.score_02
			 ,tttt2.score_03
			 ,tttt2.avg_score
from Student as tttt1
left join
(select ttt2.*
       ,ttt1.avg_score
from 
# 平均成绩
(select SC.SId
       ,avg(SC.score) as avg_score
from SC 
group by SC.SId) as ttt1
join 
# 所有课程的成绩
(select tt1.*
       ,tt2.score_03
from 
(
select t1.*
       ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
left join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId 
union
select t2.SId
       ,t1.score_01
			 ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
right join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId ) as tt1
left join
(select SC.SId
       ,SC.score as score_03
from SC
where SC.CId = '03') as tt2
on tt1.SId = tt2.SId
order by tt1.SId) as ttt2
## 所有课程的成绩合并
on ttt1.SId = ttt2.SId) as tttt2
on tttt1.SId = tttt2.SId
where tttt2.avg_score >= 85
order by tttt2.avg_score desc;

##### 32.查询课程名称为「数学」，且分数低于 60 的学生姓名和分数
select t1.*
       ,t2.score
from Student as t1
join 
(select SC.SId
       ,SC.score
from SC
where SC.CId = 
(select Course.CId from Course 
where Course.Cname = '数学')) as t2
on t1.SId = t2.SId;

##### 33.查询所有学生的课程及分数情况（存在学生没成绩，没选课的情况）
select tttt1.*
       ,tttt2.score_01
			 ,tttt2.score_02
			 ,tttt2.score_03
			 ,tttt2.avg_score
from Student as tttt1
left join
(select ttt2.*
       ,ttt1.avg_score
from 
# 平均成绩
(select SC.SId
       ,avg(SC.score) as avg_score
from SC 
group by SC.SId) as ttt1
join 
# 所有课程的成绩
(select tt1.*
       ,tt2.score_03
from 
(
select t1.*
       ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
left join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId 
union
select t2.SId
       ,t1.score_01
			 ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
right join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId ) as tt1
left join
(select SC.SId
       ,SC.score as score_03
from SC
where SC.CId = '03') as tt2
on tt1.SId = tt2.SId
order by tt1.SId) as ttt2
## 所有课程的成绩合并
on ttt1.SId = ttt2.SId) as tttt2
on tttt1.SId = tttt2.SId;
##### 34.查询任何一门课程成绩在 70 分以上的姓名、课程名称和分数
select tttt1.*
       ,tttt2.score_01
			 ,tttt2.score_02
			 ,tttt2.score_03
			 ,tttt2.avg_score
from Student as tttt1
left join
(select ttt2.*
       ,ttt1.avg_score
from 
# 平均成绩
(select SC.SId
       ,avg(SC.score) as avg_score
from SC 
group by SC.SId) as ttt1
join 
# 所有课程的成绩
(select tt1.*
       ,tt2.score_03
from 
(
select t1.*
       ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
left join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId 
union
select t2.SId
       ,t1.score_01
			 ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
right join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId ) as tt1
left join
(select SC.SId
       ,SC.score as score_03
from SC
where SC.CId = '03') as tt2
on tt1.SId = tt2.SId
order by tt1.SId) as ttt2
## 所有课程的成绩合并
on ttt1.SId = ttt2.SId) as tttt2
on tttt1.SId = tttt2.SId
where tttt2.score_01>70 or tttt2.score_02>70 or tttt2.score_03>70;

##### 35.查询不及格的课程
select t1.*
       ,t2.score
from Student as t1
join 
(select SC.SId
       ,SC.score
from SC
where SC.CId = 
(select Course.CId from Course 
where Course.Cname = '数学')) as t2
on t1.SId = t2.SId;

##### 33.查询所有学生的课程及分数情况（存在学生没成绩，没选课的情况）
select tttt1.*
       ,tttt2.score_01
			 ,tttt2.score_02
			 ,tttt2.score_03
			 ,tttt2.avg_score
from Student as tttt1
left join
(select ttt2.*
       ,ttt1.avg_score
from 
# 平均成绩
(select SC.SId
       ,avg(SC.score) as avg_score
from SC 
group by SC.SId) as ttt1
join 
# 所有课程的成绩
(select tt1.*
       ,tt2.score_03
from 
(
select t1.*
       ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
left join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId 
union
select t2.SId
       ,t1.score_01
			 ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
right join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId ) as tt1
left join
(select SC.SId
       ,SC.score as score_03
from SC
where SC.CId = '03') as tt2
on tt1.SId = tt2.SId
order by tt1.SId) as ttt2
## 所有课程的成绩合并
on ttt1.SId = ttt2.SId) as tttt2
on tttt1.SId = tttt2.SId;
##### 34.查询任何一门课程成绩在 70 分以上的姓名、课程名称和分数
select tttt1.*
       ,tttt2.score_01
			 ,tttt2.score_02
			 ,tttt2.score_03
			 ,tttt2.avg_score
from Student as tttt1
left join
(select ttt2.*
       ,ttt1.avg_score
from 
# 平均成绩
(select SC.SId
       ,avg(SC.score) as avg_score
from SC 
group by SC.SId) as ttt1
join 
# 所有课程的成绩
(select tt1.*
       ,tt2.score_03
from 
(
select t1.*
       ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
left join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId 
union
select t2.SId
       ,t1.score_01
			 ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
right join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId ) as tt1
left join
(select SC.SId
       ,SC.score as score_03
from SC
where SC.CId = '03') as tt2
on tt1.SId = tt2.SId
order by tt1.SId) as ttt2
## 所有课程的成绩合并
on ttt1.SId = ttt2.SId) as tttt2
on tttt1.SId = tttt2.SId
where tttt2.score_01>70 or tttt2.score_02>70 or tttt2.score_03>70;

##### 35.查询不及格的课程
select tttt1.*
       ,tttt2.score_01
			 ,tttt2.score_02
			 ,tttt2.score_03
			 ,tttt2.avg_score
from Student as tttt1
left join
(select ttt2.*
       ,ttt1.avg_score
from 
# 平均成绩
(select SC.SId
       ,avg(SC.score) as avg_score
from SC 
group by SC.SId) as ttt1
join 
# 所有课程的成绩
(select tt1.*
       ,tt2.score_03
from 
(
select t1.*
       ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
left join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId 
union
select t2.SId
       ,t1.score_01
			 ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
right join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId ) as tt1
left join
(select SC.SId
       ,SC.score as score_03
from SC
where SC.CId = '03') as tt2
on tt1.SId = tt2.SId
order by tt1.SId) as ttt2
## 所有课程的成绩合并
on ttt1.SId = ttt2.SId) as tttt2
on tttt1.SId = tttt2.SId
where tttt2.score_01<60 or tttt2.score_02<60 or tttt2.score_03<60;

##### 36.查询课程编号为 01 且课程成绩在 80 分以上的学生的学号和姓名
select tttt1.*
       ,tttt2.score_01
			 ,tttt2.score_02
			 ,tttt2.score_03
			 ,tttt2.avg_score
from Student as tttt1
left join
(select ttt2.*
       ,ttt1.avg_score
from 
# 平均成绩
(select SC.SId
       ,avg(SC.score) as avg_score
from SC 
group by SC.SId) as ttt1
join 
# 所有课程的成绩
(select tt1.*
       ,tt2.score_03
from 
(
select t1.*
       ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
left join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId 
union
select t2.SId
       ,t1.score_01
			 ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
right join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId ) as tt1
left join
(select SC.SId
       ,SC.score as score_03
from SC
where SC.CId = '03') as tt2
on tt1.SId = tt2.SId
order by tt1.SId) as ttt2
## 所有课程的成绩合并
on ttt1.SId = ttt2.SId) as tttt2
on tttt1.SId = tttt2.SId
where tttt2.score_01>=80;

##### 37.求每门课程的学生人数
select  SC.CId
        ,count(*)
from SC
group by SC.CId;

##### 38.成绩不重复，查询选修「张三」老师所授课程的学生中，成绩最高的学生信息及其成绩
select tt1.*
       ,tt2.score
from Student as tt1
join 
(select * from SC where 
SC.score = 
(select max(t1.score) as max_score
from 
(select SC.CId
			,SC.score
from SC
where SC.CId=(select Course.CId from Course where Course.TId = (select Teacher.TId from Teacher 
where Teacher.Tname = "张三"))) as t1
group by t1.CId) 
and SC.CId=(select distinct SC.CId from SC
where SC.CId=(select Course.CId from Course where Course.TId = (select Teacher.TId from Teacher 
where Teacher.Tname = "张三")))) as tt2
on tt1.SId = tt2.SId

##### 39.成绩有重复的情况下，查询选修「张三」老师所授课程的学生中，成绩最高的学生信息及其成绩
select tt1.*
       ,tt2.score
from Student as tt1
join 
(select * from SC where 
SC.score = 
(select max(t1.score) as max_score
from 
(select SC.CId
			,SC.score
from SC
where SC.CId=(select Course.CId from Course where Course.TId = (select Teacher.TId from Teacher 
where Teacher.Tname = "张三"))) as t1
group by t1.CId) 
and SC.CId=(select distinct SC.CId from SC
where SC.CId=(select Course.CId from Course where Course.TId = (select Teacher.TId from Teacher 
where Teacher.Tname = "张三")))) as tt2
on tt1.SId = tt2.SId

##### 40.查询不同课程成绩相同的学生的学生编号、课程编号、学生成绩
select tttt1.*
       ,tttt2.score_01
			 ,tttt2.score_02
			 ,tttt2.score_03
			 ,tttt2.avg_score
from Student as tttt1
left join
(select ttt2.*
       ,ttt1.avg_score
from 
# 平均成绩
(select SC.SId
       ,avg(SC.score) as avg_score
from SC 
group by SC.SId) as ttt1
join 
# 所有课程的成绩
(select tt1.*
       ,tt2.score_03
from 
(
select t1.*
       ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
left join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId 
union
select t2.SId
       ,t1.score_01
			 ,t2.score_02
from 
(select SC.SId
       ,SC.score as score_01
from SC
where SC.CId = '01') as t1
right join 
(select SC.SId
       ,SC.score as score_02
from SC
where SC.CId = '02') as t2
on t1.SId = t2.SId ) as tt1
left join
(select SC.SId
       ,SC.score as score_03
from SC
where SC.CId = '03') as tt2
on tt1.SId = tt2.SId
order by tt1.SId) as ttt2
## 所有课程的成绩合并
on ttt1.SId = ttt2.SId) as tttt2
on tttt1.SId = tttt2.SId
where tttt2.score_01 = tttt2.score_02 or tttt2.score_01 = tttt2.score_03
or tttt2.score_02 = tttt2.score_03;
##### 41.查询每门课程成绩最好的前两名
select * from 
((select * from SC 
where SC.CId = '01'
order by SC.score desc
limit 2)
union
(select * from SC 
where SC.CId = '02'
order by SC.score desc
limit 2)
union
(select * from SC 
where SC.CId = '03'
order by SC.score desc
limit 2)) as t1
join Student as t2
on t1.SId = t2.SId
order by t1.CId

##### 42.统计每门课程的学生选修人数（超过 5 人的课程才统计）。
select SC.CId
       ,count(*) as cont 
from SC
group by SC.CId
having cont > 5;

##### 43.检索至少选修两门课程的学生学号
select SC.SId
			,count(*) as cont
from SC
group by SC.SId
having cont >= 2

##### 44.查询选修了全部课程的学生信息
select t1.* from Student as t1
join (
select SC.SId
			,count(*) as cont
from SC
group by SC.SId
having cont = 3) as t2
on t1.SId = t2.SId

##### 45.查询各学生的年龄，只按年份来算
select t1.*
       ,FLOOR(DATEDIFF(now(),t1.Sage) / 365) as age
from Student as t1

##### 46.按照出生日期来算，当前月日< 出生年月的月日则，年龄减1
select tt1.*
       ,tt1.age - 1 as new_age
from 
(select t1.*
			,t2.day_age
			,ceil(datediff(now(),t1.Sage) /365) as age
from 
(select *
       ,month(Student.Sage) as month_age
from Student )as t1
join 
(select *
       ,day(Student.Sage) as day_age
from Student )as t2
on t1.SId = t2.SId ) as tt1
where tt1.month_age > month(now()) or (tt1.month_age = month(now()) and tt1.day_age > day(now()))

##### 47.查询本周过生日的学生
select date_sub(now(),INTERVAL weekday(now()) day)  # weekday 返回 0123456  表示周一到周日
select date_sub(now(),INTERVAL weekday(now())-6 day) # 找周日
# date_sub 表示当前的日期减去后面的天数
select date_sub(now(),INTERVAL weekday(now())-7 day) # 找下一周的周一
select date_sub(now(),INTERVAL weekday(now())-13 day) # 找下一周的周日
# 或者可以用data_add 来加天数
select date_add(now(),interval 7 - weekday(now()) day)
select date_add(now(),interval 13 - weekday(now()) day)

# 只取年月日的几个相互配合  m% 月 y% 年 d%日
select DATE_FORMAT(now(),'%m-%d')

# 上面为补充资料
##### 47.查询本周过生日的学生
select * from 
(select *
			 , date_format(t1.Sage,'%m-%d') as birthday
from Student as t1) as tt1
where tt1.birthday
BETWEEN 
(select DATE_FORMAT((select date_sub(NOW(),interval weekday(now()) day) as day_01),'%m-%d') )
and 
(select DATE_FORMAT((select date_sub(NOW(),interval weekday(now())-6 day) as day_07),'%m-%d'))

##### 48.查询下周过生日的学生
select * from 
(select *
			 , date_format(t1.Sage,'%m-%d') as birthday
from Student as t1) as tt1
where tt1.birthday
BETWEEN 
(select DATE_FORMAT((select date_sub(NOW(),interval weekday(now())-7 day) as day_01),'%m-%d') )
and 
(select DATE_FORMAT((select date_sub(NOW(),interval weekday(now())-13 day) as day_07),'%m-%d'))

##### 49.查询本月过生日的学生
select * from 
(select *
			 , date_format(t1.Sage,'%m') as birthday
from Student as t1) as tt1
where tt1.birthday = (select DATE_FORMAT(now(),'%m'))

##### 50.查询下月过生日的学生
select * from 
(select *
			 , date_format(t1.Sage,'%m') as birthday
from Student as t1) as tt1
where tt1.birthday = (select DATE_FORMAT((select date_add(NOW(),interval 1 month)),'%m'))
```

如有不正确的欢迎大家补充和指正！！！
