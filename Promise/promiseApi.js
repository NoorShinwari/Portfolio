//_________________________________Promise API___________________________________//

//Promise.all:
//When we want many promises to execute in parallel and wait until all of them are ready..
//We use Promise.all

//The syntax is:

let promise = Promise.all([
  /*...promises... */
]);

//For Example:

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)),
  new Promise(resolve => setTimeout(() => resolve(2), 2000)),
  new Promise(resolve => setTimeout(() => resolve(3), 1000))
]).then(alert);

///////////////////////////////////////////////////////////////////////////////
// To map an array and then wrap that into Promise.all:
//////////////////////////////////////////////////////////////////////////////

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved:
Promise.all(requests).then(responses =>
  responses.forEach(response => alert(`${response.url}: ${response.status}`))
);

////////////////////////////////////////////////////////////////////////////////////////

let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // all responses are resolved successfully
    for (let response of responses) {
      alert(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  }) //map arrat of responses into an array of response.json() to read their content
  .then(responses => Promise.all(responses.map(r => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then(users => users.forEach(user => alert(user.name)));

//////////////////////////////////////////////////////////////////////////////////////
//If any of the promises is rejected, the promise returned by Promise.all immediatly rejects with that error.

//For instance:

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise(
    (resolve, reject) => setTimeout(() => reject(new Error('Whoops!'), 2000)) //(*)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(alert); // Error: Whoops!

// (*) the 2nd promise rejects in two seconds, => immediate rejection of Promise.all,
// so .catch executes: the rejection error becomes the outcome of the entire Promise.all.

//Promise.all(iterable) allows non-promise "regular" values in iterable.
//Promise.all(...) accepts an itrable(in most cases of array) of promises.
//But if any of those objects is not a promise, it's passed to the resulting array "as is".

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  }),
  2,
  3
]).then(alert);

//                                 Promise.allSettled                                       //
Promise.all([
  fetch('/templete.html'),
  fetch('/style.css'),
  fetch('/data.json')
]).then(render); // render method needs results or all fetches

//Promise.allSettled_____ just waits for all promises to settle, regardless of the result.
/**
 * {status:"fulfilled", value: result} for successful responses,
 * {status : "rejected", reason: error} for errors.
 */

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];
Promise.allSettled(urls.map(url => fetch(url))).then(results => {
  results.forEach((result, num) => {
    if (result.status == 'fulfilled') {
      alert(`${urls[num]}: ${result.value.status}
                `);
    }
    if (result.status == 'rejected') {
      alert(`${urls[num]}: ${result.reason}`);
    }
  });
});

////////////              Polyfill                                      /////////////

//If the browser doesn't support Promise.allSettled, it's easy to polyfill:

if (!Promise.allSettled) {
  Promise.allSettled = function(promises) {
    return Promise.all(
      promises.map(p =>
        Promise.resolve(p).then(
          value => ({
            state: 'fulfilled',
            value
          }),
          reason => ({ state: 'rejected' }, reason)
        )
      )
    );
  };
}

//Now we can use Promise.allSettled to get the results of all given promises, even if some of them rejects.

////////////////////////////////////////////////////////////////////////////////////////////
//                          Promise.race                                        ////////////
////////////////////////////////////////////////////////////////////////////////////////////

//Similar to Promise.all, but waits only for the first settled promise and gets its result(or error)
// The syntax is:

let promise = Promise.race(iterable);

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)), //(*)
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Whoops!')), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert);

//(*) the first promise is fastes, so it became the result and wins the race, all further results/errors are ignored

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//                            Promise.resolve/reject                                        //

//////////////////////////////////////////////////////////////////////////////////////////////

//Promise.resolve

//Promise.resolve(value) creates a resolved promise with the result value, same as:

let promise = new Promise(resolve => resolve(value));
//EXAMPLE:
let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); //(*)
  }
  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url, text);
      return text;
    });
}
///////////////////////////////////////////////////////////////////////////////////////////
//                          Promise.reject                                               //
//////////////////////////////////////////////////////////////////////////////////////////

//Promise.reject(error) creates a rejected promise with error:

let promise = new Promise((resolve, reject) => reject(error)); //Syntax
