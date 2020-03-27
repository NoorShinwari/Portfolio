let _ = require('lodash');

function toKebabCase(str) {
  return _.kebabCase(str);
}

console.log(toKebabCase('Hello W0rld')); // it will work even if we call console.log before declaring a function means if it
//.. it after it or at the end of the page.

// there is another way to declare a funtion, but that will not be a hoisting one, means it will not execute a console.log
// .. if it is assigned after it.

let toKebabCase = function(str) {
  return _.kebabCase(str);
};
// OR//
let toKebabCase = str => _.kebabCase(str);
let toKebabCase = _.kebabCase; // It is only for the reference. so whatever the value_.kebabCase will have, it will be assigned to the let.
