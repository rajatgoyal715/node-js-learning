var bodyParser = require('body-parser');

var mongoose = require('mongoose');
﻿
// Use native promises
mongoose.Promise = global.Promise;

//mongodb uri set up locally
var mongodbUri = 'mongodb://127.0.0.1:27017/todo_list_rajat';

//Connect to the database
mongoose.connect(mongodbUri);

//Create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

//Create a model named 'Todo' based on schema 'todoSchema'
var Todo = mongoose.model('Todo', todoSchema);

// Add an item to the model with an error handling function on save method
// var itemOne = Todo({item: 'buy flowers'}).save(function(err){
//   if (err) throw err;
//   console.log('item saved');
// });

// var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'do some coding'}];

var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){

  app.get('/todo', function(req, res){
    //get data from mongodb and pass it to view
    Todo.find({}, function(err, data){
      if(err) throw err;
      res.render('todo', {todos: data});
    });

  });

  app.post('/todo', urlencodedParser, function(req, res){
    // get data from the view and add it to mongodb
    var newTodo = Todo(req.body).save(function(err, data){
      if(err) throw err;
      res.json(data);
    });

    // add the new item into data array
    // data.push(req.body);

    // send the data to the success function of todo-list.js
    // res.json(data);
  });

  app.delete('/todo/:item', function(req, res){
    // delete the requested item from the mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
      if(err) throw err;
      res.json(data);
    });

    // data = data.filter(function(todo){
    //   return todo.item.replace(/ /g, '-') !== req.params.item;
    // });
    // res.json(data);
  });

};
