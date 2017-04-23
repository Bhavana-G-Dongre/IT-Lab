var express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.get('/',function(req,res){
	res.send("<h1>Welcome to detail entry page</h1>");
})
app.get('/6bindex.html',function(req,res){
	res.sendFile(__dirname+"/"+"6bindex.html");
})
app.get('/process_get',function(req,res){
	var regex=/^[0-9]+$/;
	if(req.query.name=="")
	res.send("Name should not be null");
	else if(!req.query.marks.match(regex))
	res.send("Marks should be integer");
	else
	res.send("USN="+req.query.usn+"<br>Name="+req.query.name+"<br>Branch="+req.query.branch+"<br>Marks="+req.query.marks)
})
var server=app.listen(5000,function(){
	var host=server.address().address
	var port=server.address().port
	console.log("Host=%s Port=%s",host,port);
})