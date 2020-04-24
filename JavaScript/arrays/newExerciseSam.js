/*
  Scrivi un programma che stampa i numeri da 1 a 100.
  Quando incontri un numero multiplo di 3 stampa "Frizz" invece del numero
  e quando è multiplo di 5 allora stampa "Buzz".
  Per i numeri che sono multipli di 3 e 5 allora stampa "FizzBuzz".

  `1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz...`
*/

let num = 100;

const print = num => {
  let array = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
    } else if (i % 3 === 0) {
      array.push('Fizz');
    } else if (i % 5 === 0) {
      array.push('Buzz');
    } else {
      array.push(i);
    }
  }
  return array;
};

const result = print(num);
console.log(result);
