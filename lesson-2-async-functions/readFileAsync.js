var fs = require('fs');
// error first is a common node async callback pattern
fs.readFile('./input.txt', 'utf8', function (err, data) {
  console.log(data);
});
