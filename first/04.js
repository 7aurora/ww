var http = require("http")
var url = require("url")
// console.log(url)
http.createServer((req,res)=>{
	res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
	if(req.url=="/favicon.ico"){
		return
	}
	var obj = url.parse(req.url,true).query
	console.log(obj)
	res.end("接收前端传输的用户名为"+obj.username)
	// if(req.ur;=="/send"){
	// 	console.log("已经接受到前端发送的请求")
	// 	console.log(req)
	// 	res.end(req)
	// }
}).listen(3000)