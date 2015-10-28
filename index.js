
 var express = require('express');
 var app = express();

 app.get('/', function (req, res) {
   res.send('Hello World!');
 });
 
 app.get('/greet/:name', function (req, res){
    res.send("'Sup, " + req.params.name + "! How's it hangin'?")
 })

 var server = app.listen(process.env.PORT, function () { //process.env.PORT for c9
   var host = server.address().address;
   var port = server.address().port;

   console.log('Example app listening at http://%s:%s', host, port);
 });