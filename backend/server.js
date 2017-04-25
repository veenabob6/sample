/**
 * Created by veenanairv on 4/21/2017.
 */
var express = require('express');
var app=express();
var bodyParser=require('body-parser');
// var mongo=require('mongodb').MongoClient;
var mongoose=require('mongoose');
app.use(bodyParser.json());


var Message=mongoose.model("Message",{msg:String});
app.use(function(req,res,next){

  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Content-Type, Authorization");
  next();
});
app.get('/api/message',getMessages);
app.post('/api/message',function(req,res){
  console.log(req.body);
  var message=new Message(req.body);
  message.save();
 // database.collection('messages').insertOne(req.body);
  res.status(200);

});
function getMessages(req,res)
{
  Message.find({}).exec(function(err, result){
    res.send(result);
  })
}

mongoose.connect('mongodb://localhost:27017/test',function(err,db){
  if(!err){
    console.log("we are connected to mongo");
   }
});

var server=app.listen(5000,function(){
  console.log('Listening on port', server.address().port);
});
