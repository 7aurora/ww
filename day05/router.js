//接口编写文件    负责新闻界接口的编写
 var express=require("express")
 var app=express()
 var router=express.Router()
 router.get("/login",(req,res)=>{
	 //数据库存放
	 var data={
		 username:"admin",
		 password:123
	 }
	 //数据库返回的内容
	 var result=[{"username":"admin","pasword":123,"phone":133333}]
	 if(req.query.username==data.username&&req.query.password==data.password){
		  res.send({"success":"ok","data":result})
	 }else{
		res.send({"error":"用户名错误"}) 
	 }
	
 })
module.exports=router
