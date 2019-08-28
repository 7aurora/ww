var http=require('http');
var fs=require('fs')
var a = require("./07.js")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	if(req.url.substr(0,6)=="/index"){
		a.showIndex(req,res);
	}else if(req.url.substr(0,6)=="/about"){
		a.showAbout(req,res);
	}else if(req.url.substr(0,5)=="/news"){
		a.showNews(req,res)
	}
}).listen(3000)
