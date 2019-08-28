// var sd =require("silly-datetime")
// var time = sd.format(new Date(),"YYYYMMDDHHmmss")  //时间
// console.log(time)




var http=require('http');
var fs=require('fs')
var path = require("path")
var fd = require("formidable")
var sd=require("silly-datetime")
var server=http.createServer(function(req,res){
	if(req.url=="/send"&&req.method.toLowerCase()=="post")
	//实例化
	var form = new fd.IncomingForm()
    var dir = 	form.uploadDir="./uploads"
	// console.log(form)
	//form   uploadDir  上传目录
	//fields  文本域（接收文本）  files  文件域（接收文件）
	form.parse(req,function(err,fields,files){
			var oldpath=files.pic.path
			var extname = path.extname(files.pic.name)
			var tt=sd.format(new Date(),"YYYYMMDDHHmmss")
			var newpath = tt+extname
			fs.rename(oldpath,newpath,(err)=>{
				if(err){
					throw err
				}
				console.log("success")
				// res.end()
			})
			console.log(newpath)

			// console.log(files)
			// files   path  name 
			// var username = fields.username
	})
	// return
}).listen(3000)


// var path = require("path")
// console.log(path)
// ///extname后缀名（扩展名）
// var obj=path.extname("./form.html")
// console.log(obj)
// //path 提供一些工具函数,主要用来处理文件和目录
// var base = path.basename("a/b/v/d/q.html")
// console.log("base")
// var base1=path.basename("a/b/v/d/q","html")
// console.log("base1")
//basename 返回一个真实路径的最后一段


// normalize   规范路径的输出
// 
// var obj = path.normalize("/a/b/c/d")
// console.log(obj)


// isabsolute  判断是否是绝对路径    true  false 


// join  拼接完整的路径
// var obj =path.join("/a","/b","/c")
// console.log(obj)


// dirname  返回当前文件所在的目录名称
// var obj = path.dirname("/a/b/c/d.txt")
// console.log(obj)

// format   root  dir   base       -->把对象转化为字符串，路径读取时会读取dir和base
// var obj = path.format({
// 	root:"/aaa",    //root根
// 	dir:"/b/c",      //目录
// 	base:"/1.txt"    //文件路径
// })
// console.log(obj)


// var obj = path.parse("/a/b/c")
// console.log(obj)

// resolve   从右向左依次解析，直到返回一个完整的路径
// var obj = path.resolve("/a/b","./c","./d")
// console.log(obj)