/**
 * Created by veenanairv on 4/21/2017.
 */
var express = require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());

app.post('/api/message',function(req,res){
  console.log(req.body);
  res.status(200);

});
var server=app.listen(5000,function(){
  console.log('Listening on port', server.address().port);
});
