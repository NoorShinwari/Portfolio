/*Sum numbers from the visitor
importance: 5
Create a script that prompts the visitor to enter two numbers and then shows their sum.

Run the demo

P.S. There is a gotcha with types.*/
let istNum = +prompt('Enter First number');
let secndNum = +prompt('Enter Second Number');
alert(istNum + secndNum);

/**Repeat until the input is a number
importance: 5
Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

Run the demo

Open a sandbox with tests. */

function readNumber() {
  let number = +prompt('Enter a number Please');
  while (isFinite(number)) {
    if (number === '' || number === null || !number) {
      return null;
    }
  }
} // there is a bug in this code, I will ask Anthony in the morning..

/*
function readNum() {
    let num = +prompt("enter your number");
    while(num === "" || num === null || (!num)) {
    num = +prompt("enter again");
    }
    }
    Explained by Mr Sohayb
    */
