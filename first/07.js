var fs = require("fs")
function showIndex(req,res){
	fs.readFile("./index.html",(err,data)=>{
		res.end(data)
	})
}
function showAbout(req,res){
	fs.readFile("./about.html",(err,data)=>{
		res.end(data)
	})
}
function showNews(req,res){
	fs.readFile("./news.html",(err,data)=>{
		res.end(data)
	})
}
module.exports={
	showIndex:showIndex,
	showAbout:showAbout,
	showNews:showNews
}
