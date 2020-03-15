/*Sum all numbers till the given one
importance: 5
Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

For instance:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Make 3 solution variants:

Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula.
An example of the result:

function sumTo(n) { /*... your code ...  }

alert( sumTo(100) ); // 5050
P.S. Which solution variant is the fastest? The slowest? Why?

P.P.S. Can we use recursion to count sumTo(100000)? 
*/

function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
    console.log(sum);
  }
  console.log(sum);
  return sum;
}
// Using recursion
function sumTO(n) {
  if (n == 1) return 1;
  return n + sumTO(n - 1);
}
/*Iterative thinking: the for loop:

function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert( pow(2, 3) ); // 8
Recursive thinking: simplify the task and call self:

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) ); // 8
*/

// Recursing is usually shorter
function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////7
let company = {
  sales: [
    {
      name: 'John',
      salary: 1000
    },
    {
      name: 'Alice',
      salary: 1600
    }
  ],

  development: {
    sites: [
      {
        name: 'Peter',
        salary: 2000
      },
      {
        name: 'Alex',
        salary: 1800
      }
    ],

    internals: [
      {
        name: 'Jack',
        salary: 1300
      }
    ]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}
console.log(sumSalaries(company));

/*
Calculate factorial
importance: 4
The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two",
 and so on till 1. The factorial of n is denoted as n!

We can write a definition of factorial like this:

n! = n * (n - 1) * (n - 2) * ...*1
Values of factorials for different n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
The task is to write a function factorial(n) that calculates n! using recursive calls.

alert( factorial(5) ); // 120
P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6
*/
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}
/// I tried it and it worked HAHAHA

/*function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  this is solution of the website
 */

/*
 Fibonacci numbers
importance: 5
The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, 
the next number is a sum of the two preceding ones.

First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

Write a function fib(n) that returns the n-th Fibonacci number.

An example of work:

function fib(n) { /* your code }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.
 
 */

function fib(n) {
  return n != 1 ? fib(n - 1) + fib(n - 2) : n;
}
//// this was quite close to the solution but it gives an error.

//solution is as follow
/*function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
*/
// my mistake is that i should have written n greater than 1, but still i am confuse that y it didnt work.
function fiboN(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
// this method is amazing, i cant believe if human can think like this.
// i feel as a very stupid person.

/*
Output a single-linked list
importance: 5
Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Write a function printList(list) that outputs list items one-by-one.

Make two variants of the solution: using a loop and using recursion.

What’s better: with recursion or without it?

*/

function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}
// other method
function printListSec(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}
