//fs
var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
	//读文件readFile   (url,options,callback)   异步
	fs.readFile("./u.txt",(err,data)=>{
		res.end(data)
	})
	//fs.readFileSync()   同步
	//写文件  writeFile(url,option,data,callback)
	//flag  a  append   r   read     w  write
	
	//rename   改名
	// fs.rename("./u.txt","")
	
	// unlink  删除文件
	// fs.unlink("")
	
	//创建文件夹   mkdir
	// fs.mkdir("")
	
	//删除文件夹  fs.rmdir
	
	//读取文件夹   readdir
	
	//判断是否是文件夹  exists
	
	// fs.exists("./aa",(exists)=>{
	// 	if(exists){
	// 		console.log("文件夹已存在")
	// 	}else{
	// 		fs.mkdir("./aa",(err)=>{
	// 			res.end("success")
	// 		})
	// 	}
	// })
	
	//stat   判断是文件夹还是文件
	// fs.stat("./u.txt".(err,stats)=>{
	// 	console.log(stats.isFile())
	// 	res.end("222")
	// })
	// isDirectory
	// isFile
	fs.writeFile("./i.txt","我是内容你能咋地",{"flag":"a"},(err)=>{
		if(err){
			//throw   抛出
			throw err
		}
		res.end("success")
	})
}).listen(3000)