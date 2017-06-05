var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/input.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/output.txt');


myReadStream.on('data', function(chunk){
  console.log('New chunk received: ');
  myWriteStream.write(chunk);
});
