function sayHi() {
  var phrase = 'Hello'; // local variable, "var" instead of "let"

  alert(phrase); // Hello
}

sayHi();

alert(phrase); // Error, phrase is not defined,
//From the first sight, var behaves similar to let. That is, declares a variable.

/*“var” has no block scope
Variables, declared with var, are either function-wide or global. They are visible through blocks.

For instance:*/

if (true) {
  var test = true; // use "var" instead of "let"
}

alert(test); // true, the variable lives after if

/*As var ignores code blocks, we’ve got a global variable test.

If we used let test instead of var test, then the variable would only be visible inside if:
*/
if (true) {
  let test = true; // use "let"
}

alert(test); // Error: test is not defined

/*The same thing for loops: var cannot be block- or loop-local:
 */
for (var i = 0; i < 10; i++) {
  // ...
}

alert(i); // 10, "i" is visible after loop, it's a global variable

//If a code block is inside a function, then var becomes a function-level variable:

function sayHi() {
  if (true) {
    var phrase = 'Hello';
  }

  alert(phrase); // works
}

sayHi();
alert(phrase); // Error: phrase is not defined (Check the Developer Console)

//As we can see, var pierces through if, for or other code blocks.
//That’s because a long time ago in JavaScript blocks had no Lexical Environments.
//And var is a remnant of that.

function sayHi() {
  phrase = 'Hello';

  console.log(phrase);

  var phrase;
}
sayHi();
// it will return: Hello

// Now if i use let instead of var
function sayHi() {
  phrase = 'Hello';

  console.log(phrase);

  let phrase;
}
sayHi();
/*VM233:2 Uncaught ReferenceError: Cannot access 'phrase' before initialization
      at sayHi (<anonymous>:2:10)
      at <anonymous>:8:1
  sayHi @ VM233:2
  (anonymous) @ VM233:8
*/
// WHY? Here is the explanation....
/*“var” declarations are processed at the function start
var declarations are processed when the function starts (or script starts for globals).

In other words, var variables are defined from the beginning of the function,
 no matter where the definition is (assuming that the definition is not in the nested function).
 */
// Ways to create IIFE Immediately invoked function expression

(function() {
  alert('Parentheses around the function');
})();

(function() {
  alert('Parentheses around the whole thing');
})();

!(function() {
  alert('Bitwise NOT operator starts the expression');
})();

+(function() {
  alert('Unary plus starts the expression');
})();
