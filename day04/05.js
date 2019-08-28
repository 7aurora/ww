var express=require("express")
//express = createAppllication
var app = express()
// context   执行上下文
// app.use("/"(req,res)=>{
// 		res.send({"success":"ok","data":{"list":{{id:1,name:"tom"}}}})
// })
// app.get("/",(req,res)=>{
// 	res.send("second")
// })
// app.get("/get",(req,res)=>{
// 	res.send("get")
// })

/**
 * 中间件     路由中间件    第三方中间件
 * body-parser    处理post请求     下载   npm install body-parser --save
 * 
 */
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))   // 针对post处理字符串
app.use(bodyParser.json())    //针对 post方式处理json对象

//使用静态资源
app.use(express.static("stick"))



app.get("/",(req,res)=>{
	res.send("首页")
})
app.get("/list",(req,res)=>{
	console.log(req.query)
	res.send("列表接收传输过来的username为"+req.query.username)
})

app.post("/post",(req,res)=>{
	console.log(req.body)
	res.send("dopost"+req.body.username)
})


app.listen(3000)

// express 
// 1.路由路径不区分大小写
// 2.获取动态路由参数  params--->get
// 3.use  使用
// 4.get  请求方式
// 5.post  请求方式
// 6. express支持链式调用