// server.js
var express = require('express');

var app = module.exports = express();

app.configure(function(){

  app.use(express.static("public"));
  app.use(app.router);
});

// This will ensure that all routing is handed over to AngularJS
app.get('*', function(req, res){
        res.sendfile('./public/index.html');
});

app.listen(4000);