////////////TIME INTERVAL//////////////////////////////////////////////

let timerId = setInterval(() => alert('tick'), 2000);
// I declared a variable and assigned a function setInterval which callback for
// a method function and  the interval time...

setTimeout(() => {
  clearInterval(timerId);
  alert('stop');
}, 5000);

// here i declared a method function setTimeout with two parameters
// first one is a method function which calls for another two functions
// one timerId and the second on is just an alert function.

//NESTED TIMEOUT////////////////////////////////////////////////////////
let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 5000);

// I tried this in the console and found out that it the first function with
//setTimeout 5sec executed only one then it went to the second one *
// and it kept going on and on like a loop but only with 2sec interval.

//// Another good example is the following in which a request is sent to the server,
// but in case of overload, it should increase the intervals to double..
// let's see how it works

let delay = 5000;

let timerId = setTimeout(function request() {
  ///...sends request....
  if ('request failed') {
    // increase the interval to the next run
    delay *= 2;
  }
  timerId = setTimeout(request, delay);
}, delay);

// NESTED setTimeout allows to set the delay between the execution more precisely than setInterval.
// for Example

let i = 1;
setInterval(function() {
  func(i++);
}, 100);
