var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var urlencodedParser=bodyParser.urlencoded({extended:false})
app.get('/',function(req,res){
	console.log("Got get request");
	res.send('Welcome');
})
app.get('/4bindex.html',function(req,res){
	res.sendFile(__dirname+"/"+"4bindex.html");
})
app.get('/process_get',function(req,res){
	res.send("first:"+req.query['first_name']+"last name:"+req.query['last_name']);
	
})
app.get('/welcome',function(req,res){
	res.send('<h1>Welcome to MSRIT</h1>');
})
app.get('/first',function(req,res){
	res.send('FOC<br>Maths<br>Physics<br>');
})
app.get('/second',function(req,res){
	res.send('Chemistry<br>Mechnical<br>Electronics<br>');
})
app.get('/third',function(req,res){
	res.send('Data Structures<br>Algorithms<br>TOC<br>');
})
var server=app.listen(5000,function(){
var host=server.address().address
var port=server.address().port
console.log("Example app at %s %s",host,port);
})