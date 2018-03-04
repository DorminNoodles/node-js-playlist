// var http = require('http');
// var fs = require('fs');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/profile/:name', function(req, res){
	var data = {age: 29, job: 'ninja',hobbies: ['eating', 'fishing', 'fighting']};
	res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
console.log('Yo, now listening to port 3000');
