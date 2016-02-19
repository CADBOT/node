var fs = require('fs');
fs.readFile('./input.txt', 'utf8', function(err, data) {
  // will the file contents print out first?
  console.log(data);
});

// or will the below line?
console.log('log from outside callback');
