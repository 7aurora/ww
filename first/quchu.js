
let http=require('http');
let fs=require('fs')
let server=http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html;charset=UTF8"})
    fs.readdir('./first',function(err,files){
      var wenjianjia=[];
   (function iterator(i){
      if(i==files.length){
         console.log(wenjianjia);
         return;
      }
      fs.stat("../first/"+files[i],function(err,stats){
         if(stats.isDirectory()){
            wenjianjia.push(files[i])
         }
         iterator(i+1)
      })
   })(0)
    })
    res.end('ok')
})
server.listen(3000);


// var http=require("http")
// var fs=require("fs")
// var url=require("url")
// http.createServer((req,res)=>{
// 	res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
// 	function readFileList(path,filesList){
// 		var files = fs.readdirSync(path)
// 		files.forEach(function(itm,index){
// 			var stat = fs.statSync(path+itm)
// 			if(stat.isDirectory()){
// 				readFileList(path+itm+"/",filesList)
// 			}else{
// 				var obj = {}
// 				obj.path = path
// 				obj.filename = itm
// 				filesList.push(obj)
// 			}
// 		})
// 	})
// 	var getFiles={
// 		getFileList:function(path){
// 			var filesList = []
// 			readFileList(path,filesList)
// 			return filesList
// 		}
// 	}
// }).listen(3000)




    