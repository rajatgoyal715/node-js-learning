var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('Request was made: ' + req.url)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/input.txt', 'utf8');
  // stream send as response
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Listening now ');
