var express = require("express")
var app = express()

app.get('/', function(req,res){
    res.send("hello world")
})


app.listen(8080, function (request, response){
    console.log("server on 8080")
})