var express=require("express")
var app=express()
//引入db数据库
var db=require("./db")
//使用路由中间件
var router=express.Router()
//处理post请求
var bodyParser=require("body-parser")
//处理post中json的请求
app.use(bodyParser.json())
//处理post中字符窜的请求
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('static'))
//使用路由
app.use(router)
//注册接口
router.post("/register",(req,res)=>{
	/**
	 * 1.接收前端传过来的值  body
	 * */
	 var regUser={
		 username:req.body.username,
		 password:req.body.password,
		 createAt:new Date(),
		 updateAt:new Date(),
		 phone:req.body.phone,
		 email:req.body.email,
		 tokenId:1
	 }
	 db.add("userData",regUser,(err,result)=>{
		 if(err){
			 throw err
		 }
		 res.send({"success":"ok"})
	 })	
})
//登录接口
router.get("/login",(req,res)=>{
	/**
	 * 1.接收前端传过来的值   query
	 * 2.根据前端传过来的值与数据库里的用户数据进行对比（find）
	 * 	2.1判断是否存在用户
	 *  2.2再与数据库里面的数据进行对比
	 *  2.3一致时返回成功
	 * 3前端进行登录成功的跳转
	 * */
	 //接收前端传入的值
	 var userData={
		 username:req.query.username,
		 password:req.query.password
	 }
	 //进行数据库的检索     result  数组  length
	 //先把数据库里面所有的数据取出
		 db.find("userData",userData,(err,result)=>{
		 		 if(result.length==0){
					 res.send({"error":"用户名或密码错误"})
				 }else if(result.length!=0&&result[0].password===req.query.password){
					 res.send({"success":"登录成功"})
				 }
		 })
})

app.listen(3000)





