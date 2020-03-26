//Class checking: instanceof
// the instanceof operator allows to check whether an onject belongs to a certain class.
// It also takes inheritance into account.

//THE instanceof OPERATOR
// obj instanceof Class

class Rabbit {}
let rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit); // output is true;

// with constructor functions;
function Rabbit() {}
console.log(new Rabbit() instanceof Rabbit);

// with Array;
let arr = [1, 2, 3];
alert(arr instanceof Array);
alert(arr instanceof Object);

//Symbol.hasInstance ==> Class[Symbol.hasInstance](obj)
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };
alert(obj instanceof Animal);

function A() {}
function B() {}
A.prototype = B.prototype = {};
let a = new A();
console.log(a instanceof B); // true
// instanceof doesnt care about the function but the prototype.
