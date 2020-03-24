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

/////////////////////////////////////////////////////77
//ZERO DELAY setTimeout////////////////////

let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // remember delay from the previous call

  if (start + 100 < Date.now()) alert(times);
  // show the delays after 100ms
  else setTimeout(run); // else re-schedule
});

///////////////////////////////////////////////////////////////////////////////////////7777
//77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777

/*Output every second
importance: 5
Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

Make two variants of the solution.

Using setInterval.
Using nested setTimeout.*/

function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}
/////////////////USING NESTED setTimeout
function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}
//If we also want the function to run immediately, then we can add an additional call on a separate line, like this:

function printNumbers(from, to) {
  let current = from;

  function go() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }

  go();
  let timerId = setInterval(go, 1000);
}

A; /*ny setTimeout will run only after the current code has finished.

The i will be the last one: 100000000.*/

let i = 0;

setTimeout(() => alert(i), 100); // 100000000

// assume that the time to execute this function is >100ms
for (let j = 0; j < 100000000; j++) {
  i++;
}
