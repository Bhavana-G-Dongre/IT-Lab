var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var urlencodedParser=bodyParser.urlencoded({extended:false})
app.get('/',function(req,res){
	console.log("Got get request");
	res.send('Welcome');
})
app.get('/9bindex.html',function(req,res){
	res.sendFile(__dirname+"/"+"9bindex.html");
})
app.get('/welcome',function(req,res){
	res.send('<h1>Welcome to Flipcart</h1>');
})
app.get('/Kitchen',function(req,res){
	res.send('Cooker<br>Crockery<br>Vessels<br>');
})
app.get('/Clothes',function(req,res){
	res.send('Jeans<br>Tops<br>Kurthis<br>');
})
app.get('/Furniture',function(req,res){
	res.send('Sofa<br>Diwan<br>Dining Table<br>');
})
var server=app.listen(5000,function(){
var host=server.address().address
var port=server.address().port
console.log("Example app at %s %s",host,port);
})