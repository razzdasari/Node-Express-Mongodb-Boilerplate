/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
router = express.Router();
//Include Controller
var pubappFunctions = require('../../controllers/apiv1/pubappFunctions');

router.get('/GetUsers',pubappFunctions.getUsersLst_get);

router.get('/GetUsersById/:id',pubappFunctions.getUsersById_get);

router.post('/AddUser',pubappFunctions.addUser_post);

module.exports = router
