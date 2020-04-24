// A function is called “nested” when it is created inside another function.

function sayHiBye(firstName, lastName) {
  function getFullName() {
    return firstName + ' ' + lastName;
  }
  console.log('Hello, ' + getFullName());
  console.log('Bye, ' + getFullName());
}

// A nested function can be returned either as a property of a new object
// Or as a result by itself... lets see how

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

/////////////////////////////////////////////////////////////////////////////
////////////////////////////////LEXICAL ENVIRONMENT//////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////FUNCTIONAL DECLARATION///////////////////////
/////////////////////////////////////////////////////////////////////////////
// A function is also a value, like a variable.
// The difference is that a Function Declaration is instantly fully initialized.

function f() {
  let value = Math.random();

  function g() {
    debugger; // in console: type alert(value); No such variable!
  }

  return g;
}

let g = f();
g();
