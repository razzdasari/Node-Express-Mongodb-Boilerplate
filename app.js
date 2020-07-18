var express = require('express');
var app = express();
var distance = require('google-distance');
var mysql = require('mysql');
var MongoClient = require('mongodb');
var bodyParser = require('body-parser');
var useragent = require('express-useragent');

app.use(bodyParser.json()); // support json encoded bodies
app.use(useragent.express());
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.use(logErrors);
app.use('/apiv1', require('./routes/apiv1/pubappRoutes'));

function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

app.get('/', function(req, res) {
    res.send("Mobile API Server");
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Mobile API Server is listening at http://%s:%s', host, port);
});
