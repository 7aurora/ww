var http = require("http")
var fs = require("fs") //file system 文件系统 作用:操作文件
http.createServer(function(req,res){
		//响应头
	res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
	if(req.url == "/"){
		res.end("首页")
	}else if(req.url =="/black"){
		//readFile  读文件
		fs.readFile("./black.html",function(err,data){
			res.end(data)
		})
	}else if(req.url =="/white"){
		fs.readFile("./white.html",function(err,data){
			res.end(data)
		})
	}else if(req.url=="/black.css"){
		res.writeHead(200,{"Content-type":"text/css"})
		fs.readFile("./black.css",function(err,data){
			res.end(data)
		})
	}else if(req.url =="/liuyuxi.jpg"){
		res.writeHead(200,{"Content-type":"image/jpg"})
		fs.readFile("./liuyuxi.jpg",function(err,data){
			res.end(data) 
		})
	}
}).listen(3000,function(){
		console.log("listen挂起")
})
	

