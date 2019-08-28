var mongoClient=require("mongodb").MongoClient
var url="mongodb://127.0.0.1:27017";
// MongoDB默认端口：27017
// mysql默认端口：3306
function ConnectDB(callback){
	//客户端链接
	mongoClient.connect(url,(err,mongo)=>{
		//客户端
		// console.log(mongo)
		//创建数据库
		var dbName=mongo.db("adminuser")
		if(err){
			callback(err,null)
		}
		callback(err,mongo,dbName)
	})
}


exports.add= function (collectionName,json,callback){
	ConnectDB(function (err,mongo,dbName){
		dbName.collection(collectionName).insert(json,function(err,result){
			if(err){
				callback(err,null)
			}
			callback(err,result)
			mongo.close()
		})
	})
}
	
	
	
exports.find=function(collectionName,json,callback){
	ConnectDB(function(err,mongo,dbName){
		//因为插入数据里面试以数组的形式存在
		dbName.collection(collectionName).find(json).toArray(function(err,result){
			if(err){
				callback(err,null)
			}
			callback(err,result)
			mongo.close()
		})
	})
}




