// Can bring in the whole "library" and refer to each
// method via library.function
var calculator = require('./calculator');

console.log(calculator.add(1,1,4));
console.log(calculator.multiply(2,2,4));

// Or we can bring in just the specific function we are interested
// in, and have it top level
var add = require('./calculator.js').add;
console.log(add(1, 1));
