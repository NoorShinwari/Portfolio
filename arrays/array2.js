// let array = [1, 2, 3, 4, 5, 6];
// let arrDouble = array.concat(array);

// function evenNumber(array) {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       arr.push(array[i]);
//     }
//   }
//   return arr;
// }

// evenNumber(arrDouble);

// function oneEvenNumber(array) {
//   let evenNumber = false;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       evenNumber = true;
//     }
//   }
//   return evenNumber;
// }

// function firstEvenNumber(array) {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       arr.push(array[i]);
//     }
//   }
//   return arr;
// }

// // function sumOfAll(array) {
// //   let sum = +[];
// //   for (let i = 0; i < array.length; i++) {
// //     sum += array[i];
// //   }
// //   return sum;
// // }

// function sumOfAll(array) {
//   let sum = 0;
//     let arr1 = [];
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }arr1.push(sum)
//   return arr1;
// }

// function evenSumSquare(array) {
//   let even = [];
//   let sum = +[];
//   let square = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       even.push(array[i]);
//       sum += array[i];
//       square.push(array[i] * array[i]);
//     }
//   }
//   console.log(even);
//   console.log(sum);
//   console.log(square);
// }

function evenSumSquare(array) {
  let even = [];
  let sum = +[];
  let square = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i]);
      square.push(array[i] * array[i]);
      sum += square;
    }
  }
  return `[${even}]
[${square}])
[${sum}]`;
}
// function sumOfAll(array) {
//   let sum = [];
//   for (let i = 0; i < array.length; i++) {
//     sum.push(array[i]);
//   }
//   return sum;

const isEven = num => num % 2 === 0;
const square = num => num ** 2;
const sum = (a, b) => a + b;

const sumSquareOfEvens = array
  .filter(isEven)
  .map(square)
  .reduce(sum, 0);

function sumSquareOfEvens(array) {
  let acc = 0;
  for (let item of array) {
    if (isEven(item)) {
      acc = sum(acc, square(item));
    }
  }
  return acc;
}
