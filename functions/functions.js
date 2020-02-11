/*Is "else" required?

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
Is there any difference in the behavior of these two variants?
*/
///////////////////////////////////////////NO DIFFERENCE////////////////////////////////////////////////
/*
Rewrite the function using '?' or '||'

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||
*/

function checkAge(age) {
    return (age > 18) ? true: confirm('Did parents allow you?');
} 
///////////////////////OR////////////////////////////
function checkAge(age) {
    return (age > 18) || confirm ('Did parents allow you?');
}


//////////////////////////////Turn it into a function//////////////////////////////////
/*
switch (browser) {
  case "Edge":
      alert("You've got the Edge!");
      break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
      alert("okay we support these browsers too");
      break;

  default:
      alert("We hope that this page looks ok!")
}
*/
////HERE WE GO:
function detectBrowser(browser) { // We turn it into a function by adding fuction then any name but camelCase, parathesis, inside paranthesis
  switch (browser) {                  //..... declare a default value of browser then middle bracket start, code inside then at the end '}'closes.
    case "Edge":
        alert("You've got the Edge!");
        break;

    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        alert("okay we support these browsers too");
        break;

    default:
        alert("We hope that this page looks ok!")
  }
}


/*
Function pow(x,n)

Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

Run the demo

P.S. In this task the function should support only natural values of n: integers up from 1.
*/

function pow(x,n){
  return x**n
}


/*

Context: Devil May Cry
Stylish Rankings

1 = Dull!
5 = Cool!
10 = Bravo!
15 = Awesome!
20 = Stylish!

Create a function that, 
given the amount of damage you inflict to enemies,
 will return the related stylish rankings string

 Hint: use the switch statement.
*/


function rank(number) { 
  
  switch (number) {
    case 1:
      return ("Dull!");
    case 5:
      return ("Cool!");
    case 10:
      return ("Bravo!");
    case 15:
      return ("Awesome!");
    case 20:
      return ("Stylish");
  }
}