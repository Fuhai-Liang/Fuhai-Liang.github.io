---
title: "【MySQL 20题练习 包含：select,join,union,where 等复合语句】"
description: "MySQL 专精 20 题复合语句练习。"
category: note
badge: "笔记"
tags: []
date: "2023-12-03"
pinned: false
draft: false
---

## 数据介绍

* 员工信息表emp

字段：  
 员工id,员工名字,工作岗位,部门经理,受雇日期,薪水,奖金,部门编号

英文名：emp\_no,ename,job,mgr,hire\_date,sal,bonus,dept\_no

* 部门信息表dept

字段：部门编号,部门名称,部门地点  
 英文名：dept\_no,dept\_name,dept\_addr

## 一：基于数据结构编写每张表建表语句

```
create table IF NOT EXISTS emp(
    emp_no int
    ,ename varchar(255)
    ,job varchar(255)
    ,mgr int 
    ,hire_date DATE
    ,sal int
    ,bonus int
    ,dept_no int
);

create table IF NOT EXISTS dept(
    dept_no int
    ,dept_name varchar(255)
    ,dept_addr varchar(255)
)
```

## 二：将下列数据加载到MySQL中

* 员工数据：

```
7369,SMITH,CLERK,7902,1980-12-17,800,null,20
7499,ALLEN,SALESMAN,7698,1981-02-20,1600,300,30
7521,WARD,SALESMAN,7698,1981-02-22,1250,500,30
7566,JONES,MANAGER,7839,1981-04-02,2975,null,20,
7654,MARTIN,SALESMAN,7698,1981-09-28,1250,1400,30
7698,BLAKE,MANAGER,7839,1981-05-01,2850,null,30
7782,CLARK,MANAGER,7839,1981-06-09,2450,null,10
7788,SCOTT,ANALYST,7566,1987-04-19,3000,null,20
7839,KING,PRESIDENT,null,1981-11-17,5000,null,10
7844,TURNER,SALESMAN,7698,1981-09-08,1500,0,30
7876,ADAMS,CLERK,7788,1987-05-23,1100,null,20
7900,JAMES,CLERK,7698,1981-12-03,950,null,30
7902,FORD,ANALYST,7566,1981-12-03,3000,null,20
7934,MILLER,CLERK,7782,1982-01-23,1300,null,10
```

* 部门数据：

```
10,ACCOUNTING,NEW YORK
10,ACCOUNTING,shanghai
20,RESEARCH,DALLAS
30,SALES,CHICAGO
40,OPERATIONS,BOSTON
```

## 三、使用SQL完成下面需求

薪水 = SAL  
 薪金 = 12*SAL加奖金  
 年工资 = 年薪 = 12*SAL

### 1． 列出至少有一个员工的所有部门。

```
select 	e.dept_no
        ,count(*) as cnt
from emp e 
group by e.dept_no
having cnt > 4;
```

### 2． 列出薪金比“SMITH”多的所有员工。

```
select 	ename
		,sal*12+e.bonus as total
from emp e 
where (sal*12+e.bonus) > (select sal*12+e.bonus from emp e where e.ename='SMITH');
```

### 3． 列出所有员工的姓名及其直接上级的姓名。

```
select 	e.ename as yg_name
		,em.ename as sj_name
from emp e
left join emp em
on e.mgr=em.emp_no;
```

### 4． 列出受雇日期早于其直接上级的所有员工。

```
select 	*
from emp e
left join emp em
on e.mgr=em.emp_no
where e.hire_date < em.hire_date;

select 	*
from emp e,emp em
where e.mgr=em.emp_no and e.hire_date < em.hire_date;
```

### 5． 列出部门名称和这些部门的员工信息，同时列出那些没有员工的部门。

```
select t1.dept_name
			,t2.*
from 
    (select 	distinct d.dept_no
                    ,d.dept_name 
    from dept d) t1
left join emp t2
on t1.dept_no=t2.dept_no;
```

### 6． 列出所有“CLERK”（办事员）的姓名及其部门名称。

```
select distinct emp.ename
				,dept.dept_name 
from emp 
join dept 
on emp.dept_no=dept.dept_no 
where job='CLERK';

select distinct emp.ename
				,dept.dept_name 
from emp ,dept 
where emp.dept_no=dept.dept_no 
and job='CLERK';
```

### 7． 列出最低薪水大于1500的各种工作。

```
select job
			,min(sal) as min_sal
from emp 
group by job
having min_sal>1500;
```

### 8． 列出在部门“SALES”（销售部）工作的员工的姓名，假定不知道销售部的部门编号

```
select * 
from emp,dept 
where emp.dept_no=dept.dept_no and dept.dept_name='SALES';
```

### 9． 列出薪金高于公司平均薪金的所有员工。

```
select 	ename
		,sal*12+e.bonus as total
from emp e 
where (sal*12+e.bonus) > (select avg(sal*12+bonus) from emp);
```

### 10．列出与“SCOTT”从事相同工作的所有员工。

```
select * from emp where job = 
(select job from emp where ename='SCOTT') and ename!='SCOTT';
```

### 11．列出薪水等于部门30中员工的薪水的所有员工的姓名和薪水。

```
select * from emp where sal in (
select sal from emp e where e.dept_no=30) and dept_no!=30;
```

### 12．列出薪金高于在部门30工作的所有员工的薪金的员工姓名和薪金。

```
select * from emp where (12*sal+bonus) > (
select max(12*sal + bonus) from emp e where e.dept_no=30) and dept_no!=30;
```

### 13．列出在每个部门工作的员工数量、平均工资和平均服务期限。

```
select 	e.dept_no
				,count(*) as cnt
				,avg(sal)
				,avg(DATEDIFF(NOW(),e.hire_date))
from emp e
group by e.dept_no
```

### 14．列出所有员工的姓名、部门名称和工资。

```
select 	e.ename
				,de.dept_name
				,e.sal
from emp e
join dept de
on e.dept_no=de.dept_no;
```

### 15．列出所有部门的详细信息和部门人数。

```
select distinct t1.dept_no
				,t1.dept_name
				,t2.cnt
from dept t1
join (select dept_no,count(*) as cnt from emp group by dept_no) t2
on t1.dept_no=t2.dept_no;
```

### 16．列出各种工作的最低工资。

```
select job,min(sal) from emp group by job
```

### 17．列出各个部门的MANAGER（经理）的最低薪金。

```
select 	dept_no
				,min(sal*12+bonus) as min_total
from emp
where job='MANAGER'
group by dept_no;
```

### 18．列出所有员工的年工资,按年薪从低到高排序。

```
select *,12*sal as total
from emp
order by total
```

### 19. 列出每个部门薪水前两名最高的人员名称以及薪水。

```
select t2.*
from 
	(select 	dept_no
					,max(sal) as max_sal
	from emp 
	where sal not in (
		select max(sal) max_sal 
		from emp 
		group by dept_no)
	group by dept_no
	union 
	select dept_no
					,max(sal) max_sal 
	from emp 
	group by dept_no) as t1
join emp t2
on t1.dept_no = t2.dept_no and t1.max_sal=t2.sal
```

### 20. 列出每个员工从受雇开始到2018-12-12 为止共受雇了多少天。

```
select * ,DATEDIFF('2018-12-12',hire_date)
from emp
```
