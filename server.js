var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
    console.log("Requested route: /");
});

app.listen(80);
