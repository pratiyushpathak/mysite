var express = require('express');
var path=require('path');
var app = express();

//server configuration
app.use(express.static(path.join(__dirname,'Public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/Index.html'));
 });

 app.get('/contact', function (req, res) {
  res.sendFile(path.join(___dirname + '/Contact.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(___dirname + '/login.html'));
});


var server = app.listen(8888, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:8888", host, port)
});