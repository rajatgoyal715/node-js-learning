var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// set view engine - ejs
app.set('view engine', 'ejs');

// set middleware
// any request to localhost:3000/assets is going to map to static folder now
app.use('/assets', express.static('assets'));
app.get('/', function(req, res){
  // send a message
  // res.send('This is the homepage');

  // send a file
  // res.sendFile(__dirname + '/index.html');

  res.render('index');
});

app.get('/contact', function(req, res) {
  // res.sendFile(__dirname + '/contact.html');

  // console.log(req.query);
  res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res) {
  console.log(req.body);
  res.render('contact-success', {data: req.body});
});

// dynamic route parameters
app.get('/profile/:id', function(req, res) {
  // res.send('Requested to see profile with id of : ' + req.params.id);

  // dynamic rendering of HTML page
  var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {id: req.params.id, data: data});
});

app.listen(3000);
