var express = require('express');

var app = express();

// set view engine - ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  // send a message
  // res.send('This is the homepage');
  
  // send a file
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html');
});

// dynamic route parameters
app.get('/profile/:id', function(req, res) {
  // res.send('Requested to see profile with id of : ' + req.params.id);
  
  // dynamic rendering of HTML page
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {id: req.params.id, data: data});
});

app.listen(3000);