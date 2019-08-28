var express=require("express")
var session = require("express-session")
var app=express()
//配置session
app.use(session({
	name:"fj",//session存储的名称，默认为connect_id
	secret:"fj",//签名，防止信息被篡改
	resave:false,//强制保存为session值
	cookie:("name","value",{maxAge:90000,httpOnly:true}),
	saveUninitialized: true  //初始化
}))
app.get("/set",(req,res)=>{
	// console.log(req.session)
	req.session.username="jack"
	res.send(req.session.username)
})
app.get("/get",(req,res)=>{
	// console.log(req.session)
	if(req.session.username=="jack"){
		res.send("欢迎"+req.session.username+"光顾")
	}
})


app.listen(3000)