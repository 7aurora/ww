var http = require("http")
var fs = require("fs")
var url = require("url")
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
	if(req.url == "/"){
		res.end("首页")
	}else if(req.url =="/denglu"){
		//readFile  读文件
		fs.readFile("./denglu.html",function(err,data){
			res.end(data)
		})
	}else if(req.url =="/white"){
		fs.readFile("./white.html",function(err,data){
			res.end(data)
		})
	}else if(req.url=="/denglu.css"){
		res.writeHead(200,{"Content-type":"text/css"})
		fs.readFile("./denglu.css",function(err,data){
			res.end(data)
		})
	}
}).listen(3000,function(){
		console.log("listen挂起")
})
	
