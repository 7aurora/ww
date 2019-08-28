var http=require('http');
var ejs = require("ejs")
var fs = require("fs")
var server=http.createServer(function(req,res){
	var list=["首页","新闻","关于"]
	//var str="我想买一个iPhone<%= num %>s"
	fs.readFile("./view/index.ejs",(err,data)=>{
		var template = data.toString()
		var str = ejs.render(template,{list:list})
		res.end(str)
	})	
}).listen(3000,function(){
	console.log("服务已经挂起")
})


//ejs   模板引擎
// 定义  嵌入JavaScript的模板引擎
// 特点:

// render   渲染
// compile  编译
// template  模板
// 
// ejs.render(tempalte,data)     模板   数据   index.ejs  数据的类型必须是对象
// <% %>编译
// <%=%>输出
// <%# %>注释
// <%_ %>去除首位空格
// <% _%>去除末位空格
// include  包含