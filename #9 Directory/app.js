var fs = require('fs');

//sync methods

// create directory
fs.mkdirSync('stuff');
// delete directory
fs.rmdirSync('stuff');

// async methods
fs.mkdir('stuff', function() {
  fs.readFile('input.txt', 'utf-8', function(err, data) {
    fs.writeFile('./stuff/output.txt', data);
  });
});
