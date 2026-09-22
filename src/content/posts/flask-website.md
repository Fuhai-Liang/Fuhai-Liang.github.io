---
title: "用flask写一个自己的网站吧"
description: "实现页面跳转、注册、登录，并用 Excel 保存用户数据。"
category: project
project: other
badge: "项目"
tags: []
date: "2022-11-17"
pinned: false
draft: false
---

简介  
 **实现了页面的跳转，注册，登陆等简单的功能，并且可以保存用户登陆的数据信息。因为数据量不大所以使用了Excel保存了用户数据。如果有需要可以使用mysql来保存用户数据**

## 主界面修饰路由

比较简陋，只为了实现功能，有兴趣可以自己进行美化

```
@app.route('/')
def index():
    return render_template('index.html')
```

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>学生信息表网站</title>
</head>
<body>
<h2>欢迎访问学生信息网站</h2>
<h3>请登陆查看信息!</h3>
<a href="{{url_for('login')}}">登录</a>
<a href="{{url_for('register')}}">注册</a>

</body>
</html>
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/3f6e91270761e4864860e05fbb6abf69.png#pic_center)  
 比较简陋，只为了实现功能，有兴趣可以自己进行美化

## 登陆界面

```
'''
登陆部分的代码
'''
@app.route('/login',methods = ['GET','POST'])
def login():
    error = None

    # 提前打开excel文件用于比对信息
    workbook=xlrd.open_workbook(r'/Users/liangshilin/Desktop/用户信息.xls')
    sheet=workbook.sheet_by_name('信息')

    # 获取excel中的用户名 并将这些用户名放进一个列表中
    users=sheet.col_values(0)
    users=users[1:]

    # 获取excel中的密码 并将这些密码放在一个列表中
    password=sheet.col_values(1)
    passwords=password[1:]

# 用户名列表与密码列表两者是一一对应关系  （用户名列表第一个用户名的密码就是密码列表
    # 中的第一个密码）
    if request.method == 'POST':

        # 获取用户在网页中输入的用户名与密码
        user=request.form['username']
        pwd=request.form['password']
        # 将用户输入的用户名与密码进行一一比对
        for user1 in users:
            for password in passwords:
                # 有效用户名与密码
                if user!=user1 or pwd!=password:
                    error = '无效的用户名和密码，请再次尝试！'
                else:
                # 无效用户名与密码
                    flash('您已成功登录！')
                    return redirect(url_for('choice'))
    return render_template('login.html',error = error)
```

登陆界面代码

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>10.login</title>
</head>
<body>
<form action="http://127.0.0.1:50037/login" method="post">
  <table>
    <tr>
      <td>用户名</td>
      <td><input type="username" name="username"></td>
    </tr>
    <tr>
      <td>密码</td>
      <td><input type="password" name="password"></td>
    </tr>
    <tr>
      <td><input type="submit" value="提交"></td>
    </tr>
  </table>
</form>
{% if error %}
<!--<strong>代表强调字体-->
<p><strong>错误</strong>:{{error}}</p>
{% endif %}
</body>
</html>
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/84ccf079517cf4fa64919ab71b9d7f97.png#pic_center)

## 注册代码

```
'''
注册部分的代码
'''
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'GET':
        return render_template('register.html')
    else:
        username = request.form.get('username')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')
        print(username, password1, password2)
        # 将此次用户输入的信息保存在全局列表中

        if password2 != password1:
            return render_template('register2.html')
        else:
            U.append(username)
            P.append(password1)
            print(U)
            print(P)

            # 将原来excel列表中的内容先读取出来
            workbook=xlrd.open_workbook(r'/Users/liangshilin/Desktop/用户信息.xls')
            sheet=workbook.sheet_by_name('信息')
            U1=sheet.col_values(0)
            U1=U1[1:]
            P1=sheet.col_values(1)
            P1=P1[1:]
            # 在与新输入的用户信息合并一下
            U.extend(U1)
            P.extend(P1)
            # 先写excel中的第一行
            workbook = xlwt.Workbook(encoding='utf-8')
            sheet = workbook.add_sheet('信息')
            sheet.write(0, 0, 'user')
            sheet.write(0, 1, 'password')

            # 利用for循环将U与P中的内容按行写入excel中
            for i in range(len(U)):
                sheet.write(i+1,0,U[i])
                sheet.write(i+1,1,P[i])
            # 保存excel信息到桌面
            workbook.save('/Users/liangshilin/Desktop/用户信息.xls')
            print('已将数据保存至excel！')
            return redirect('success')
```

注册界面代码

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>注册</title>
</head>
<body>

{% block body_part %}
<h3>注册</h3>
<form class="form" action="" method="POST">
    <div class="input-group input-group-lg">
      <span class="input-group-addon" id="sizing-addon1">用户</span>
      <input type="text" class="form-control" placeholder="请输入用户名" aria-describedby="sizing-addon1" name="username">
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-addon" id="sizing-addon1">密码</span>
      <input type="password" class="form-control" placeholder="请输入密码" aria-describedby="sizing-addon1" name="password1">
    </div>
    <div class="input-group input-group-lg">
      <span class="input-group-addon" id="sizing-addon1">密码</span>
      <input type="password" class="form-control" placeholder="请再次确认密码" aria-describedby="sizing-addon1" name="password2">
 </div>
    <div class="register-button">
        <button type="submit" class="btn btn-primary btn-lg btn-block">注册</button>
    </div>
</form>
{% endblock %}
</body>
</html>
```

样式  
 ![请添加图片描述](https://i-blog.csdnimg.cn/blog_migrate/3d095c60c8895d5478b426e2ee7e2cd3.png)

## 登陆成功界面

```
'''
选择查看班级的表单
'''
@app.route('/choice')
def choice():
    return '请选择你要查看的班级：<br><b><a href = "/student_info">2019级大数据班级</a></b>' \
           '<br><b><a href = "/caiguan">2019级财管三班</a></b>'
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/01951e2675e0e5fb9381b9d12157fc77.png#pic_center)

最后点击进去就可以查看所需要学生信息（非常简陋！！！！！）

## 全部代码：

```
import xlrd
from flask import Flask,flash,redirect,render_template,request,url_for
import re,xlwt

app = Flask(__name__,template_folder='templates')
app.secret_key = 'random string'

'''
全局列表
'''
U=[]
P=[]

'''
主界面修饰路由
'''
@app.route('/')
def index():
    return render_template('index.html')

'''
选择查看班级的表单
'''
@app.route('/choice')
def choice():
    return '请选择你要查看的班级：<br><b><a href = "/student_info">2019级大数据班级</a></b>' \
           '<br><b><a href = "/caiguan">2019级财管三班</a></b><br><b><a href = "/guyangli">蹦跳视屏</a></b>'

@app.route('/guyangli')
def guyangli():
    return render_template('视屏.html')

'''
在这里添加班级的表单
'''
# 大数据班级
@app.route('/student_info')
def student_info():
        No = ['']
        Name = ['']
        Gender = ['']

        return render_template('大数据student_info.html',
                           No = No,
                           Name = Name,
                           Gender = Gender,
                               )

@app.route('/caiguan')
def caiguan():
    No=['']
    Name=['']

    return render_template('财管student_info.html',
                           No=No,
                           Name=Name,)

'''
注册部分的代码
'''
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'GET':
        return render_template('register.html')
    else:
        username = request.form.get('username')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')
        print(username, password1, password2)
        # 将此次用户输入的信息保存在全局列表中

        if password2 != password1:
            return render_template('register2.html')
        else:
            U.append(username)
            P.append(password1)
            print(U)
            print(P)

            # 将原来excel列表中的内容先读取出来
            workbook=xlrd.open_workbook(r'/Users/liangshilin/Desktop/用户信息.xls')
            sheet=workbook.sheet_by_name('信息')
            U1=sheet.col_values(0)
            U1=U1[1:]
            P1=sheet.col_values(1)
            P1=P1[1:]
            # 在与新输入的用户信息合并一下
            U.extend(U1)
            P.extend(P1)
            # 先写excel中的第一行
            workbook = xlwt.Workbook(encoding='utf-8')
            sheet = workbook.add_sheet('信息')
            sheet.write(0, 0, 'user')
            sheet.write(0, 1, 'password')

            # 利用for循环将U与P中的内容按行写入excel中
            for i in range(len(U)):
                sheet.write(i+1,0,U[i])
                sheet.write(i+1,1,P[i])
            # 保存excel信息到桌面
            workbook.save('/Users/liangshilin/Desktop/用户信息.xls')
            print('已将数据保存至excel！')
            return redirect('success')

@app.route('/register2', methods=['GET', 'POST'])
def register2():
    if request.method == 'GET':
        return render_template('register2.html')
    else:
        username = request.form.get('username')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')
        print(username, password1, password2)
        # 将此次用户输入的信息保存在全局列表中

        if password2 != password1:
            return render_template('register2.html')
        else:
            U.append(username)
            P.append(password1)
            print(U)
            print(P)

            # 将原来excel列表中的内容先读取出来
            workbook=xlrd.open_workbook(r'/Users/liangshilin/Desktop/用户信息.xls')
            sheet=workbook.sheet_by_name('信息')
            U1=sheet.col_values(0)
            U1=U1[1:]
            P1=sheet.col_values(1)
            P1=P1[1:]
            # 在与新输入的用户信息合并一下
            U.extend(U1)
            P.extend(P1)
            # 先写excel中的第一行
            workbook = xlwt.Workbook(encoding='utf-8')
            sheet = workbook.add_sheet('信息')
            sheet.write(0, 0, 'user')
            sheet.write(0, 1, 'password')

            # 利用for循环将U与P中的内容按行写入excel中
            for i in range(len(U)):
                sheet.write(i+1,0,U[i])
                sheet.write(i+1,1,P[i])
            # 保存excel信息到桌面
            workbook.save('/Users/liangshilin/Desktop/用户信息.xls')
            print('已将数据保存至excel！')
            return redirect('success')

@app.route('/success')
def success():
    return render_template('注册成功界面.html')

'''
登陆部分的代码
'''
@app.route('/login',methods = ['GET','POST'])
def login():
    error = None

    # 提前打开excel文件用于比对信息
    workbook=xlrd.open_workbook(r'/Users/liangshilin/Desktop/用户信息.xls')
    sheet=workbook.sheet_by_name('信息')

    # 获取excel中的用户名 并将这些用户名放进一个列表中
    users=sheet.col_values(0)
    users=users[1:]

    # 获取excel中的密码 并将这些密码放在一个列表中
    password=sheet.col_values(1)
    passwords=password[1:]

# 用户名列表与密码列表两者是一一对应关系  （用户名列表第一个用户名的密码就是密码列表
    # 中的第一个密码）
    if request.method == 'POST':

        # 获取用户在网页中输入的用户名与密码
        user=request.form['username']
        pwd=request.form['password']
        # 将用户输入的用户名与密码进行一一比对
        for user1 in users:
            for password in passwords:
                # 有效用户名与密码
                if user!=user1 or pwd!=password:
                    error = '无效的用户名和密码，请再次尝试！'
                else:
                # 无效用户名与密码
                    flash('您已成功登录！')
                    return redirect(url_for('choice'))
    return render_template('login.html',error = error)

if __name__ == '__main__':
    app.run(port='0',debug=True)
```

## 结尾

写作不易，多多支持呀～～～
