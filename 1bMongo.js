var express=require('express')
var bodyParser=require('body-parser')
var ejs=require('ejs')
var MongoClient=require('mongodb').MongoClient;
var app=express()
var urlencodedParser=bodyParser.urlencoded({extended:false})
MongoClient.connect("mongodb://127.0.0.1/cardb",function(err,db){
	if(!err)
	{
		console.log("Connected!!");
		app.get('/',function(req,res){
			console.log("Got GET request for the homepage");
			res.send("<h1>Welcome to E-Cars</h1>");
		})
		app.get('/1bindex.html',function(req,res){
			res.sendFile(__dirname+"/"+"1bindex.html")
		})
		app.get('/process_get',function(req,res){
			var c=req.query;
			console.log(c);	
			db.collection('car').insert(c,function(err,doc){
				if(err)
				console.log("Failed to create new data");
				else
				res.status(201).json(doc.ops[1])
			})
			console.log("Sent data are (GET):Registration number:"+req.query.regno+" Model:"+req.query.model+" Color:"+req.query.color)
			res.send('Car inserted<br>Registration no='+req.query['regno']+"<br>Model="+req.query['model']+"<br>Color="+req.query['color'])
		})
		app.get('/1bsearch.html',function(req,res){
			res.sendFile(__dirname+"/"+"1bsearch.html")
		})
		app.get('/search',function(req,res){
			var carmodel=req.query.model;
			db.collection('car').find({model:carmodel}).toArray(function(err,docs){
				if(err)
				console.log("Failed")
				else
				res.status(200).json(docs)
			})
		})
		app.get('/about',function(req,res){
			res.send("About car Sales")
		})
		var server=app.listen(5000,function(){
			var host=server.address().address
			var port=server.address().port
			console.log("Host %s Port %s",host,port)
		})
	}
	else
	{
		db.close()
	}
})