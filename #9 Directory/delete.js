var fs = require('fs');

fs.unlink('./stuff/output.txt', function(){
  fs.rmdir('stuff');
});
