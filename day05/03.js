//cookie-parser
var express=require("express")
//可以储存二级域名或更多
var cookie=require("cookie-parser")
var app=express()
app.use(cookie())
app.get("/set",(req,res)=>{
	res.cookie("username","admin",{maxAge:90000,httpOnly:true})
	res.send("cookie设置成功")
})
app.get("/get",(req,res)=>{
	var data=req.cookies.username
	// console.log(data)
	res.send({"data":data})
})



app.listen(3000)

/**
 * 什么是cookie?    浏览器端    maxAge ：过期时间   大小4k  页面最多出现20
 * domain   域名     path  路径   在该路径下才可以访问当前缓存
 * httpOnky  设置https或http     singed   签名  
 * Expires   时长
 * 存储空间
 * 
 * 用途：登录  注册 
 * 
 * 域名
 * www.ddd.com
 * www.ddd.com.cn
 * 
 * 
 * 
 * 
 */