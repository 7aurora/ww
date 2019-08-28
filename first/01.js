// var http =  require("http")
// // console.log(http)
// http.createServer(function(req,res){
// 	res.end("seccess")
// }).listen(3000)


var http = require("http")
// 创建服务器
http.createServer(function(req,res){
	// res.end((1+2+3+4+5).toString())
	//解决中文乱码问题
	res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
	res.end("我也爱中国")
}).listen(3000)
// listent监听端口





// 	var http = require('http');
	// 	var fs = require('fs');
	// 	var server = http.createServer();
	// 	server.listen(9001, function() {
	// 		console.log('服务器正在端口号：9001上运行......');
	// 	})
	// 	server.on('request', function(request, response) {
	// 				var url = request.url;
	// 				if (url === '/') {
	// 					response.writeHead(200, {
	// 						'Content-Type': 'text/html'
	// 					})
	// 					fs.readFile('./first/black.html', 'utf-8', function(err, data) {
	// 						if (err) {
	// 							throw err;
	// 						}
	// 						response.end(data);
	// 					});
	// 				} else if (url === '/login') {
	// 					response.writeHead(200, {
	// 						'Content-Type': 'text/html'
	// 					});
	// 					fs.readFile('./first/black.html', 'utf-8', function(err, data) {
	// 						if (err) {
	// 							throw err;
	// 						}
	// 						response.end(data);
	// 					});
	// 				} else if (url === '/index') {
	// 					response.writeHead(200, {
	// 						'Content-Type': 'text/html'
	// 					});
	// 					fs.readFile('./first/white.html', 'utf-8', function(err, data) {
	// 						if (err) {
	// 							throw err;
	// 						}
	// 						response.end(data);
	// 					});
	// 				} else {
	// 					response.writeHead(200, {
	// 						'Content-Type': 'text/html'
	// 					});
	// 					fs.readFile('./first/black.css','utf-8',function(err,data){
	// 			if(err){
	// 				throw err ;
	// 			}
	// 			response.end(data);
	// 		});
	// 	}
	// });