// When exporting multiple values using exports is advised

exports.add = function() {
  return Array.prototype.reduce.call(arguments, function(sum, num) {
    return sum + num; 
  });
};

exports.multiply = function() {
  return Array.prototype.reduce.call(arguments, function(product, num) {
    return product * num;
  });
};
