/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var appmdl = require('../../models/dbmodel');

//get users
exports.getUsersLst_get = function(req, res) {
   appmdl.getUsersLst(function(err, results) {
        if (err) {
            console.log("err " + err);
            res.send(500, "Server Error");
            return;
        }
        console.log(results);
        res.send(results);
    });
}

//get users by Id
exports.getUsersById_get = function(req, res) {
    var id = req.params.id;
    appmdl.getUsersById(id,function(err, results) {
        if (err) {
            console.log("err " + err);
            res.send(500, "Server Error");
            return;
        }
        res.send(results);
    });
}

//ADD  Users
exports.addUser_post = function(req, res) {
    console.log(req.body);
    var data = {
        "id":req.body.id,
        "name":req.body.name
    };
    appmdl.addUser(data,function(err, results) {
        if (err) {
            console.log("err " + err);
            res.send(500, "Server Error");
            return;
        }
        res.send(results);
    });
}
