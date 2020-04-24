let john = {
  name: 'John',
  sayHi: function() {
    alert('Hi buddy!');
  }
};

john.sayHi();

let str = 'Hello';
alert(str.toUpperCase());

alert(typeof 0); // "number"

alert(typeof new Number(0)); // "object"!

let zero = new Number(0);

if (zero) {
  // zero is true, because it's an object // see line n. 17.
  alert('zero is truthy!?!');
}
