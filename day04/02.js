// art-template  模板引擎
// 定义:   JavaScript的轻量型模板引擎,
// 特点    语法简单   易上手
// 语法    
// 原始语法
// <%%>
// 标准语法
// {{}}  

// render 
// 下载:  npm install art-template --save ,
var http=require('http');
var fs = require("fs")
var art = require("art-template")
var server=http.createServer(function(req,res){
	var list = ["首页","新闻","关于"]
	fs.readFile("./view/list.art",(err,data)=>{
			var template = data.toString()
			var str = art.render(template,{list:list})
			res.end(str)
	})

}).listen(3000)	
	