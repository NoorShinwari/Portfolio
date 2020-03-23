////////////////////////Function object, NFE///////////////////////////////////////
//What type is a function, a function is an object.... OR you can call them
//// "Action Objects"

function f(
  sayHi = function() {
    console.log('noor');
  }
) {
  console.log(sayHi.name, sayHi());
}
undefined;
f();
//noor
// sayHi

/////////////////////////////THE LENGTH PROPERTY/////////////////////////////////

function ask(question, ...handlers) {
  let isYes = confirm(question);

  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler(); //// i couldn't fully understand this part. it says polymorphism, i couldnt get it.
    } else {
      handler(isYes);
    }
  }
}

// for positive answer, both handlers are called
// for negative answer, only the second one
ask(
  'Question?',
  () => alert('You said yes'),
  result => alert(result) //// then this part, it is acually calling the result as a function without parathesis
);

//Named Function Expression
//Named Function Expression, or NFE, is a term for Function Expressions that have a name.

//For instance, let’s take an ordinary Function Expression:

let sayHi = function(who) {
  alert(`Hello, ${who}`);
};
//And add a name to it:

let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};

//This func(who) doesnt make it function declaration and because it is still created
//as a part of that assignment expression.
//Now watch this....

let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func('Guest'); // use func to re-call itself
  }
};

sayHi(); // Hello, Guest

// But this won't work:
func(); // Error, func is not defined (not visible outside of the function)

//There are two special things about the name func, that are the reasons for it:

//1. It allows the function to reference itself internally.
//2. It is not visible outside of the function.

// the above method we can use as follow and it will work just fine however,,**

let sayHi = function(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi('Guest');
  }
};

//,,**The problem with that code is that sayHi may change in the outer code.
//If the function gets assigned to another variable instead,
// the code will start to give errors:

let sayHi = function(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi('Guest'); // Error: sayHi is not a function
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Error, the nested sayHi call doesn't work any more!

/*That happens because the function takes sayHi from its outer lexical environment. 
There’s no local sayHi, so the outer variable is used. 
And at the moment of the call that outer sayHi is null.

The optional name which we can put into the Function Expression 
is meant to solve exactly these kinds of problems.
Lets have a look in the coming example*/

let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func('Guest'); // Now all fine
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (nested call works)
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*                   //LET'S DO SOME EXERCISES//
Set and decrease for counter
importance: 5
Modify the code of makeCounter() so that
 the counter can also decrease and set the number:

counter() should return the next number (as before).
counter.set(value) should set the counter to value.
counter.decrease() should decrease the counter by 1.
See the sandbox code for the complete usage example.

P.S. You can use either a closure or the function property to keep the current count. Or write both variants.
*/
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => (count = value);

  counter.decrease = () => count--;

  return counter;
}

// then we declare it to a variable like
// let something = makeCounter()
// and we can call the function something();
// then something.set(value); something.decrease();

/*Sum with an arbitrary amount of brackets
importance: 2
Write function sum that would work like this:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
*/

function sum(a) {
  let currentSum = a;
  function f(b) {
    currentSum += b;
    return f;
  }
  f.toString = function() {
    return currentSum;
  };
  return f;
}
/**Please note that the sum function actually works only once.
 *  It returns function f.

Then, on each subsequent call,
 f adds its parameter to the sum currentSum, and returns itself.

There is no recursion in the last line of f.

Here is what recursion looks like:*/

function f(b) {
  currentSum += b;
  return f(); // <-- recursive call
}
//And in our case, we just return the function, without calling it:

function f(b) {
  currentSum += b;
  return f; // <-- does not call itself, returns itself
}
/*This f will be used in the next call, again return itself,
 so many times as needed. 
 Then, when used as a number or a string – the toString returns the currentSum.
 We could also use Symbol.toPrimitive or valueOf here for the conversion. */
