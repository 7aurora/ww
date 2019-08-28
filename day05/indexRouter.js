//接口编写文件    负责首页接口的编写
 var express=require("express")
 var app=express()
 var router=express.Router()
 router.get("/login",(req,res)=>{
	 res.send({"success":"ok","data":[{"username":"rose","age":12}]})
 })
module.exports=router