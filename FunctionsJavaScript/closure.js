/*Does a function pickup latest changes?
importance: 5
The function sayHi uses an external variable name.
 When the function runs, which value is it going to use?
 */

let name = 'John';

function sayHi() {
  alert('Hi, ' + name);
}

name = 'Pete';

sayHi(); // what will it show: "John" or "Pete"?
// 'Pete' Functions use the most recent values.

/*
Which variables are available?
importance: 5
The function makeWorker below makes another function and returns it. 
That new function can be called from somewhere else.

Will it have access to the outer variables from its creation place,
 or the invocation place, or both?*/

function makeWorker() {
  let name = 'Pete';

  return function() {
    alert(name);
  };
}

let name = 'John';

// create a function
let work = makeWorker();

// call it
work(); // what will it show?
//Which value it will show? “Pete” or “John”?

// it will show the inner variable. if inner variable is available first, it will use it first,
// otherwise outer one.

/*Are counters independent?
importance: 5
Here we make two counters: counter and counter2 using the same makeCounter function.

Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?
*/

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // ?
alert(counter2()); // ? */
//0,1

/*Counter object
importance: 5
Here a counter object is made with the help of the constructor function.

Will it work? What will it show?*/

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert(counter.up()); // ? 1
alert(counter.up()); // ? 2
alert(counter.down()); // ? 1
//because they share the same count variable value.

/*Function in if
Look at the code. What will be the result of the call at the last line?

*/
let phrase = 'Hello';

if (true) {
  let user = 'John';

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
// ERROR because sayHi() is a function inside the paranthesis of if and is not accessable outside.
////NO, It is not, I tried it myself and it works just fine....

/*Sum with closures
importance: 4
Write function sum that works like this: sum(a)(b) = a+b.

Yes, exactly this way, using double parentheses (not a mistype).

For instance:

sum(1)(2) = 3
sum(5)(-1) = 4
*/

function sum(a) {
  return function(b) {
    return a + b;
  };
}

/*Is variable visible?
importance: 4
What will be the result of this code?*/

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
//P.S. There’s a pitfall in this task. The solution is not obvious.

// An error, it clear many of my doubts and misunderstandings
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

/*Filter through function
importance: 5
We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f.
If it returns true, then that element is returned in the resulting array.

Make a set of “ready to use” filters:

inBetween(a, b) – between a and b or equal to them (inclusively).
inArray([...]) – in the given array.
The usage must be like this:

arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].
For instance:

/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// function inBetween(a) {
//   return function(b) {
//     return arr.splice(a, b);
//   };
// }
// I TRIED BUT FAILED BUT I AM LEARNING FROM MY MISTAKES

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
} // THIS IS VERY CHANLLANGING!!!!!!!!!!!! ////LET'S TRY/////////
// I am starting to understand it already, Yuhooooooo!!!!!!!!!

/*Sort by field
importance: 5
We’ve got an array of objects to sort:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
The usual way to do that would be:

// by name (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// by age (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
Can we make it even less verbose, like this?

users.sort(byField('name'));
users.sort(byField('age'));
So, instead of writing a function, just put byField(fieldName).

Write the function byField that can be used for that. */ function byField(
  fieldName
) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}
//// if a > b then return 1, if b > a then -1, if a=b then 0.

/*Army of functions
importance: 5
The following code creates an array of shooters.

Every function is meant to output its number. But something is wrong…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // shooter function
      alert( i ); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...
Why do all of the shooters show the same value? Fix the code so that they work as intended. */

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() {
      // shooter function
      alert(j); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();
///Or i can use the for method.
// the answer in the question didnt work because of the variable declared out side the function,
// shooter has no local variable so it will take the value of outer variable, which by the time
// when makeArmy will execute will hava a value of 10, so we need to declare a local variable
