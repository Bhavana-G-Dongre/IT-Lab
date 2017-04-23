var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var urlencodedParser=bodyParser.urlencoded({extended:false})
app.get('/',function(req,res){
	res.send('<h1>WElcome<h1>')
})
app.get('/8bindex.html',function(req,res){
	res.sendFile(__dirname+"/"+"8bindex.html");
})
app.get("/process_get",function(req,res){
	res.send("UserName:"+req.query["user"]+"Branch:"+req.query['branch']+"Sem:"+req.query['sem']);
})
app.post("/process_post",urlencodedParser,function(req,res){
	res.send("UserName:<b>"+req.body.user+"</b><br>Branch:<u>"+req.body.branch+"</u><br>Sem:"+req.body.sem);
})
var server=app.listen(5000,function(){
	var host=server.address().address
	var port=server.address().port
	console.log("Host:%s Port:%s",host,port);
})