var fs = require('fs'); // no relative path this time
var content = fs.readFileSync('./input.txt', 'utf8');
console.log(content);
