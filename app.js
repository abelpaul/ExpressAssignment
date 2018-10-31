var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment!");
})


app.get("*",function(req,res){
    res.send("Sorry, page not found...What are you doing with your life?")
})
app.listen(3000, function(){
    console.log("Hi from Port 3000");
})