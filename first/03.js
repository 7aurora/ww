var http = require("http")
var url = require("url")
// http.createServer((req,res)=>{
// 	var a=url.parse(req.url)
// 	console.log(a)
// 	
// }).listen(3000)
// console.log(url)
//resolve  转为字符串，第二个参数的路由会替换当前路径的一级路由
// var obj=url.resolve("http://127.0.0.1:3000/a/c","/b")

var obj = url.format({
  protocol: null,
  slashes: null,
  auth: null,
  host: "http://127.0.0.1:3000",
  port: "3000",
  hostname: "http://127.0.0.1",
  hash: null,
  search: '?username=admin',
  query: 'username=admin',
  pathname: '/a/c',
  path: '/',
  href: '/'
})
//format  把对象转换为字符串
console.log(obj)