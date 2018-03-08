var bodyParser = require('body-parser');

var data = [{item: 'get milk', dept: 'IT'}, {item: 'walk dog'}, {item: 'balek'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

app.get('/todo', function(req, res){
	res.render('todo', {todos: data});
});

app.post('/todo', urlencodedParser, function(req, res){
	data.push(req.body);
	res.json(data);
});

app.delete('/todo/:item', function(req, res){
	data = data.filter(function(todo){
		// console.log(req.params.item);
		// console.log(todo.item !== req.params.item);
		return todo.item !== req.params.item;
	});
	res.json(data);
});
};
