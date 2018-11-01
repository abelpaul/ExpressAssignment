var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req,res){
    
    var sounds = {
        pig: "oink!",
        cow: "moo!",
        dog: "bow bow!",
        cat: "meow!",
        human: "yeet!",
        goldfish: "glub glub glub!"
};

var animal = req.params.animal;
    var sound = sounds[animal];
    res.send("The " + animal + " says "+ sound);
});


app.get("*",function(req,res){
    res.send("Sorry, page not found...What are you doing with your life?")
});

app.listen(3000, function(){
    console.log("Hi from Port 3000");
});