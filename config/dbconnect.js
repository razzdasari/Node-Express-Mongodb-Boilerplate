/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

// Initialize connection once
var mongoconn = MongoClient.connect("mongodb://localhost:27017/SampleDB", function(err, database) {
  if(err) throw err;

  db = database;
  console.log("Connected to "+db.s.databaseName);
});

 exports.mongoconn = mongoconn