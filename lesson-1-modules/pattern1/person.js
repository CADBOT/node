// Pattern 1: Extract one and only value. Can be anything, but very often is a constructor function

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.getInfo = function() {
  return this.name + ' is ' + this.age 
                   + ' old' + ' and ' + this.gender;
}

// MUST use module.exports not exports when exporting one 
// unnamed value
module.exports = Person;
