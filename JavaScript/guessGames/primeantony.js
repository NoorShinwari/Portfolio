// Print all prime numbers up to NUM.
// Siece of Erathostenes.
// 2 3 4 5 6 78 8 9 10.
// Is 2 prime; yes, then 3; yes, then 4; no, and {2, 3, x, 5,...}.

const NUM = 10;

for (let i = 2; i <= NUM; i++) {
  let isPrime = i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0;
  if (isPrime) {
    console.log(i);
  } else if (i == 2 || i == 3 || i == 5 || i == 7) {
    console.log(i);
  }
} // { answer is 2,3,5,7}

let card = 'Q';
let value;
switch (card) {
  case 'A':
    value = 1;
    break;
  case 'J':
    value = 11;
    break;
  case 'Q':
    value = 12;
    break;
  case 'K':
    value = 13;
    break;
  default:
    value = Number(card);
}
console.log(card, value);

//Functions
function printHello() {
  console.log('Hello World!');
}
