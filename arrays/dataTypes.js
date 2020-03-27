/*Tasks
Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.
*/
let str = 'Hello';
let str2 = str.toUpperCase(str);
console.log(str2);

str.test = 5;

console.log(str.test);

/*
Sum numbers from the visitor
importance: 5
Create a script that prompts the visitor to enter two numbers and then shows their sum.

Run the demo

P.S. There is a gotcha with types.
*/
function sum(a, b) {
  this.a = +prompt('Enter 1st number?');
  this.b = +prompt('Enter second number?');
  return this.a + this.b;
}

function sum(a, b) {
  this.a = +prompt('Enter 1st number?');
  this.b = +prompt('Enter second number?');
  let sum = this.a + this.b;
  alert(sum);
}
sum();
