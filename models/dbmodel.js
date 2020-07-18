/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var sqldb =  require('../config/dbconnect');

exports.getUsersLst = function(callback) {
 db.collection("users").find(function(err, cursor) {
 	cursor.toArray(callback);
 	//db.close();
 	});
};

exports.getUsersById = function(id,callback) {
	console.log(id);
 db.collection("users").find({"id" : id},function(err, cursor) {
 	cursor.toArray(callback);
 	//db.close();
 	});
};

exports.addUser = function(data,callback){
    var id = data.id;
    var name = data.name;
    console.log(id+' '+name);
    db.collection("users").insert({"id":id,"name":name},function(err, cursor) {
 	if(err){console.log(err); callback(true); return;}
 	if(!err){callback(false, "Successfully Inserted");}
 	});
};