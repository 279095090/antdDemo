# 前端API文档
[TOC]
## obs:开放授权业务
###用户授权
请求地址  `POST /oauth/token`  
**header**
```
Context-Type: application/x-www-form-urlencoded
```
**body**
```
authType:PASSWORD
username:admin
password:OA==
grant_type:password
client_id:scm_web_manage
verifyCode:1
``` 
响应
**header**
```
Context-Type:application/json; charset=utf-8
```
**body**
```
{
	status: true,
	code: '200',
	data: {
	  access_token: 'aaaaaaa',
	  token_type: 'Bearer',
	  refresh_token: 'bbbbbbb',
	  expires_in: '2018-1-1',
	  scope: 'admin'
	},
	msg: ''
}
```
###获取验证码
**请求地址**
登陆时手机验证码`POST obs/business/ubm/smsService/send`
注册时手机验证码`POST obs/business/ubm/smsService/sendReg`
**head**
```
Context-Type:application/json; charset=utf-8
```
**body**
```javascript
{
	tel: "#电话号码 e.q:18101037224"
}
```
**响应**
**header**
```
Context-Type:application/json; charset=utf-8
```
**body**
```javascript
{
	status:true,
	code:200,
	data:{}
}
```
###验证码图片请求地址
账号登陆获取图片请求地址`GET obs/getfile/ubm/imgService/getAccVCode`
手机登陆获取图片请求地址`GET obs/getfile/ubm/imgService/getMobVCode`
获取忘记密码图片验证码请求地址`GET obs/getfile/ubm/imgService/getFPSVCode`


###忘记密码
+ 账号验证请求 `GET /obs/business/ubm/ForgetPs/valAccount`
**head**
```
Context-Type:application/json; charset=utf-8
```
**body**
```javascript
{
	name:'#账号/手机号 e.q  peng25peng', 
	verifyCode:'#图片验证码 1234'
}
```
**响应**
**header**
```
Context-Type:application/json; charset=utf-8
```
**body**
```javascript
{
	status:true,
	code:200,
	data:[
	 {
	    name:peng25peng,
		tel:18100000000
	]
}
```
+通过手机号验证手机验证码`POST obs/business/ubm/smsService/sendFindPs`
**head**
```
Context-Type:application/json; charset=utf-8
```
**body**
```javascript
{
	tel: "#电话号码 18101037224"
}
```
**响应**
**header**
```
Context-Type:application/json; charset=utf-8
```
**body**
```javascript
{
	status:true,
	code:200,
	data:{},
	msg:''
}
```
+ 验证账号和手机验证码 `POST /obs/business/ubm/ForgetPs/valVerifyCode`
**head**
```
Context-Type:application/json; charset=utf-8
```
**body**
```javascript
{
	verifyCode: "#验证码 e.q 1234",
	name: "#账号 e.q peng25peng",
	tel: "#电话号码 18101037224"
}
```
**响应**
**header**
```
Context-Type:application/json; charset=utf-8
```
**body**
```javascript
{
	status:true,
	code:200,
	data:{
		name:'#账号 peng25peng',
		tel:'#电话号码 18100000000'
	},
	msg:''
}
```
+ 保存密码 `POST /obs/business/ubm/ForgetPs/saveNewPassword`
**head**
```
Context-Type:application/json; charset=utf-8
```
**body**
```javascript
{
	password: "#base64加密后的密码 d2FuZ3Blbmc=",
	name: "peng25peng",
	tel: "18101037224"
}
```
**响应**
**header**
```
Context-Type:application/json; charset=utf-8
```
**body**
```javascript
{
	status:true,
	code:200,
	data:{},
	msg:''
}
```
###获取菜单
**请求地址** `GET business/ubm/menu/get`
**head**
```
Authorization: #authtype #token //详情查看授权请求
Context-Type:application/json; charset=utf-8
```
**body**
```javascript
{
	tel: "#电话号码 e.q 18101037224"
}
```
**响应**
**head**
```
Context-Type:application/json; charset=utf-8
```
**body**
```javascript
{
	status:true,
	code:200,
	data:[
	 {
      name: '#菜单名 e.q 表单页',
      icon: '#图标 e.q form',
      path: '#路径 e.q form',
      children: [{ //子页面 深度不可超过3层
        name: '#菜单名',
        path: '#路径'
      },
      ...
	]
}
```


#前端开发规范
##开发准备
**库地址**` https://git.paas.sinopec.com/N005000SCM/scm-web-manage.git`
```powershell
cd scm-web-manage\scm-webmanage-all\scm-webmanage-antdesign\prodemo
npm install #下载依赖包
npm start	#运行程序
```
##开发
**前端代码目录结构**
```
-mock			#前端开发模拟数据目录
-public			#静态文件目录
-src			#代码目录
--common		#共用类
--compontents	#纯组件
--e2e			#测试用力
--layouts		#布局目录
--models		#服务器交互
--routes		#业务组件
---Exception	#异常处理组件
---#otheer business route
--services		#api地址目录
--utils			#工具目录
--#static file like router.js
-tests			#跑测试的启动文件
-readme.md		
-#other files
```
**注意：**我们开发的业务组件要放在`src/routes/#业务`目录中，业务目录名字自行定义，目录名称**首字母大写**
>所有js文件大小写敏感，但注意不要在同一目录中出现同名的文件
>

**工作流**
>git分支分别是master,dev,
>开发业务是请从pull `dev`分支，然后创建自己的分支来做业务，分支命名格式为`名字缩写_业务名称`，开发完成自己业务部分自测通过后，提交分支并合并到`dev`分支。