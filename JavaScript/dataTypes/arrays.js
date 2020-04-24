/*Sum input numbers
importance: 4
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero. */

function sumInput() {
  let array = [];
  while (true) {
    let value = +prompt('Enter a number');
    if (value === '' || value === null) {
      break;
    }
    array.push[+value];
  }
  let sum = 0;
  for (let values of array) {
    sum += values;
    return sum;
  }
}
