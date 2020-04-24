function myFunction() {
  var a = 4;
  return a * a;
}

// A function can also access the outer variable
var a = 4;
function myFunction() {
  return a * a;
}
//////////////////////A COUNTER DILEMMA///////////////////////////////////////
// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3
// No I tried and it is not, i think because the function is not returning any value

////////////////////////////////JAVASCRIPT CLOSURE/////////////////////////////////
var add = (function() {
  var counter = 0;
  return function() {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();
// The variable add is assigned the return value of a self-invoking function.

// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

// This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
