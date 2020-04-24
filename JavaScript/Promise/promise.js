/////////////////////////////////////////////////////////////////////////////
//_____________________________PROMISE_____________________________________//
////////////////////////////////////////////////////////////////////////////

/**
 * A promise is a special JavaScript object that links the "producing code" and the "consuming code" together.
 * The "producing code" takes whatever time it needs to produce the promised result
 * and the "promise" makes that result available to all of the subscribed code when it's ready.
 */

// the constructor syntax for a promise object is:

let promise = new Promise(function(resolve, reject) {
  //// executor (the producing code)
});

// The function passed to new Promise is called the executor.
// when new Promise is created, the executor runs automatically.

// in arguments resolve and reject are callbacks provided by JavaScript itself.

/**
 * when the executor obtain the result, it should call one of these callbacks:
 * resolve(value) »» if the job finished successfullt, with result value.
 * reject(error) »» if an error occurred, error is the error object.
 */

//////////////////////////////////////////////////////////////////////7
// the promise object returned by the new Promise constructor has these internal properties:
/**
  * state »» initially "pending", then changes to either "fulfilled" when resolve is called
    or "rejected" when reject is called.
  * result »» initially undefined, then changes to value when resolve(value) called
    or error when reject(error) is called.
  */
///////////////////////////////////////////////////////////////////////7

//__________________________EXAMPLE___________________________________//

let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve('done'), 1000);
}); //fulfilled promise

let promise = new Promise(function(resolve, reject) {
  // after 1 second signal that the job is finished with as error
  setTimeout(() => reject(new Error('whoops!'), 1000));
}); // rejected state.

// A promise that is either resolved or rejected is called settled,
// as opposed to an initially pending promise.
////////////////////////////////////////////////////////////////////////////////

// there can be only a single result or an error...

// the exector should call only one resolve and one reject..
// for example:

let promise = new Promise(function(resolve, reject) {
  resolve('done');

  reject(new Error('...')); //...
});

//Immediately calling resolve/reject;

let promise = new Promise(function(resolve, reject) {
  // not taking our time to do the job
  resolve(123); // immediately give the result:123
});

// the state and result are internal
// the properties state and result of the Promise object are internal.
// we can't directly access them. we can use the methods .then/ .catch/ .finally for that.
// go to the thenCatchFinally.js
