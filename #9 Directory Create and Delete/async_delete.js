var fs = require('fs');

// first delete output.txt file and then the folder
fs.unlink('./stuff/output.txt', function(){
  fs.rmdir('stuff');
});
