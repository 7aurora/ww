var express=require("express")
var app = express()
app.all("*",(req,res,next)=>{
	
	res.header("Access-Control-Allow-origin","*")
	//定义内容类型
	res.header("Access-Control-Allow-Headers","content-type")
	//允许跨域访问的请求方式
	res.header("Access-Control-Allow-Methods","GET","POST","PATCH","DELETE","OPTIONS")
	//继续执行
	
	next()
})



app.listen(3000)