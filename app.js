
var express = require ("express");

var app = express();


app.set("view engine", "ejs");
response.render("calc.ejs")

app.get("/add/:num1/:num2", function(request, response){
	var result = request.params.num1 + request.params.num2;
	response.render("math", {number:result});
});

app.get("/subract/:num1/:num2", function(request, response){
	var result = request.params.num1 - request.params.num2;
	response.render("math", {number:result});
});

app.get("/multiply/:num1/:num2", function(request, response){
	var result = request.params.num1 * request.params.num2;
	response.render("math", {number:result});
});

app.get("/divide/:num1/:num2", function(request, response){
	var result = request.params.num1 / request.params.num2;
	response.render("math", {number:result});
});



app.listen(3000, function(){
	console.log("Server starting on port 3000");
})
