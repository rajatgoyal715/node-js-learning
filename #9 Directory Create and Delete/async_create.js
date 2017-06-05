var fs = require('fs');

// create directory and then write to a file while reading from the input.txt file
fs.mkdir('stuff', function() {
  fs.readFile('input.txt', 'utf-8', function(err, data) {
    fs.writeFile('./stuff/output.txt', data);
  });
});
