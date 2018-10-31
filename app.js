var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment!");
})

app.listen(3000, function(){
    console.log("Hi from Port 3000");
})