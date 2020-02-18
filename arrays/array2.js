let array = [1, 2, 3, 4, 5, 6];
let arrDouble = array.concat(array);

function evenNumber(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arr.push(array[i]);
    }
  }
  return arr;
}

evenNumber(arrDouble);

function oneEvenNumber(array) {
  let evenNumber = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumber = true;
    }
  }
  return evenNumber;
}

function firstEvenNumber(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arr.push(array[i]);
    }
  }
  return arr;
}
