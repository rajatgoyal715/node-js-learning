// This file is completely a module for getmodule.js file.

// a function expression is made here.
var counter = function(arr) {
    return 'The length of array is ' + arr.length;
};

console.log(counter(['Hey', 'this', 'is', 'a', 'random', 'array']));

// Adding more modules
var adder = function(a,b) {
    return 'On adding the two number it gives ' + (a + b);
}

var pi = 3.1535;

// module.exports is the important part, it makes the counter available for other modules!
module.exports.counter = counter ;
module.exports.adder = adder;
module.exports.pi = pi;

// Another way to define
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
