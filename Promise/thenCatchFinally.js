// Consumers: then, catch, finally
/**
 * A Promise object serves as a link between the executor (the "producing code") and
 * the consuming function, which will recieve the result or error.
 * Consuming functions can be registered(subscribed) using methods
 * .then, .catch and .finally
 */

//////////////////////////////then//////////////////////////////////////

// the most important, fundamental one is .then
// the syntax:

promise.then(
  function(result) {
    /**handle a successful result */
  },
  function(error) {
    /** handle an error */
  }
);

// the first argument of .then is a function that runs whrn the promisr is resolved and recieves the result.
//the 2nd argument of .then is a function that runs when the promise iss rejected and reciees the error.

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('done'), 1000);
});

//resolve runs the first function in .then

promise.then(
  result => alert(result),
  error => alert(error)
);

//In the case of a rejection, the second one:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error('Whoops')), 1000);
});

promise.then(
  result => alert(result), // doesn't run
  error => alert(error) //shows "Error: Whoops!" after 1 sec.
);

//if only interested in successful completions, then only one function argument to. then

let promise = new Promise(resolve => {
  setTimeout(() => resolve('done'), 1000);
});

promise.then(alert);

////////////////////////////////////////////////////////////////////////////////////
//                              catch                                           ///
///////////////////////////////////////////////////////////////////////////////////

//If we're interested only in errors, then we can use null as the first argument: .thne(null, errorHandleingFunction).
//or we can use .catch(errorHandlingFunction), which is exactly the same:

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});

//.catch(f) is the same as promise.then(null, f)
promise.catch(alert);

// The call .catch(f) is a complete analog of .then(null, f)..

/////////////////////////////////////////////////////////////////////////////////
//                           finally                                           //
////////////////////////////////////////////////////////////////////////////////

new Promise((resolve, reject) => {
  /* do something that takes times, and then call resolve/reject */
});
// runs when the promise is settled, doesn't matter successfully or not
//  .finally(() => stop loading indicator)
//.then(result => show result, err => show error)

new Promise((resolve, reject) => {
  setTimeout(() => resolve('result'), 2000);
})
  .finally(() => alert('Promise ready'))
  .then(result => alert(result)); //then handles the result

// And here there's an error in the promise, passed through finally to catch:

new Promise((resolve, reject) => {
  throw new Error('error');
})
  .finally(() => alert('Promise ready'))
  .catch(err => alert(err));

//On settled promises handlers run immediately

let promise = new Promise(resolve => resolve('done!'));
promise.then(alert);

///////////////////////////////////////////////////////////////////////////////////////
//                              EXAMPLE:loadScript                                  ///
//////////////////////////////////////////////////////////////////////////////////////

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.oneerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

//let's rewrite it using Promises

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}

//______________________________________________________________________________//
//                              USAGE                                           //
/////////////////////////////////////////////////////////////////////////////////

let promise = loadScript(
  'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js'
);

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.messege}`)
);

promise.then(script => alert('Another handler...'));
