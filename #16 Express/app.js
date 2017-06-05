var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('This is the homepage');
});

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html');
});

// dynamic route parameters
app.get('/profile/:id', function(req, res) {
  res.send('Requested to see profile with id of : ' + req.params.id);
});

app.listen(3000);