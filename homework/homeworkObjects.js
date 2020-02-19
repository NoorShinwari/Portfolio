/*
Syntax check
importance: 2
What is the result of this code?

let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()
P.S. There’s a pitfall :)
*/
/////////// The answer of this code is => John///////////////OOOOPPPS sorry i was wrong, on line 9 semicolon is missing.
//////////////////all is good, just line 9 after the curly braces a semicolon;

/*
Explain the value of "this"
importance: 3
In the code below we intend to call obj.go() method 4 times in a row.

But calls (1) and (2) works differently from (3) and (4). Why?

let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined
solution
*/

/*Using "this" in object literal
importance: 5
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // What's the result?
solution
*/
/*
Create a calculator
importance: 5
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt('a?');
    this.b = +prompt('b?');
  }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
