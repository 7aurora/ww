var express=require("express")
var app=express()
//链接mongodb客户端
// var mongodb=require("mongodb")
var mongoClient=require("mongodb").MongoClient
// console.log(mongodb)
app.get("/add",(req,res)=>{
	mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
		//创建数据库
		var dbName=db.db("adminuser")
		//链接集合
		dbName.collection("text").insert({"陆怀瑾":"姬无命"},function(err){
			if(err){
				throw err
			}
			res.send("插入成功")
			db.close()
			
		})
	})
})


// app.get("/del",(req,res)=>{
// 	mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
// 		//创建数据库
// 		var dbName=db.db("adminuser")
// 		//链接集合
// 		dbName.collection("text").deleteOne({"陆怀瑾":"姬无命"},function(err){
// 			if(err){
// 				throw err
// 			}
// 			res.send("删除成功")
// 			db.close()
// 			
// 		})
// 	})
// })
// 




app.listen(3000)