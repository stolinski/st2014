// server.js
var express = require('express');

var app = module.exports = express();



app.use(express.static("public"));
// app.use(favicon(__dirname + '/public/favicon.ico', { maxAge: 2592000000 }));

// This will ensure that all routing is handed over to AngularJS
app.get('/about', function(req, res){
        res.sendfile('./public/about.html');
        res.redirect('/#about');
});

app.get('/contact', function(req, res){
        res.sendfile('./public/index.html');
        res.redirect('/#contact');
});


app.get('/projects', function(req, res){
        res.sendfile('./public/index.html');
        res.redirect('/#projects');
});



app.get('*', function(req, res){
        res.sendfile('./public/index.html');
});




app.listen(4000);