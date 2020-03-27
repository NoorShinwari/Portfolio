// Callbacks
/**Many functions are provided by JavaScript host envionments
 * that allow you to schedule asynchronous actions.
 * in other words, actions that we initiate now,but they finish later.
 * for example. setTimeout function.
 */

function loadScript(src) {
  //create a <script> tag and append it to the page.
  //this causes the script with given src to start loading
  // and run when complete
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}

// i there is any code below loadScript(...), it doesnt wait until the script loading finishes.

loadScript('/my/script.js'); // this script has function newFunction(){}
newFunction(); // no such functions!

//lets add a callback function as a second argument to loadScript that should
//execute when the script loads:

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}
//if we want to call new functions from the script, we should write that in the callback

loadScript('/my/script.js', function() {
  // the callback runs after the script is loaded
  newFunction();
});
// the idea is: the second argument is a function that runs when the action is completed.
// Example::

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript(
  'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
  script => {
    alert(`Cool, the script ${script.src} is loaded `);
    alert(_);
  }
);
// This is a "callback-based" style of asynchronous programming.
// A function that does something asynchronously should provide a
// callback argument where we put the function to run after it's complete.
