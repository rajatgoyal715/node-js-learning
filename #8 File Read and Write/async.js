var fs = require('fs');

var file = fs.readFile('sample.txt','utf8',function(err,data){
  fs.writeFile('output.txt',data);
  console.log(data);
});

console.log('This is an instruction outside the sync file system. This line gets printed earlier because of async.');

// to delete the file
fs.unlink('output.txt');
