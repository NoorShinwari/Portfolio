//                                  Async/await                                 //
/////////////////////////////////////////////////////////////////////////////////
//Async functions
//Syntax

async function f() {
  return 1;
}

//Usage:

f().then(alert); // the answer is one.

// We could explicitly return a promise, which would be the same:

async function f() {
  return Promise.resolve(1);
}
f().then(alert);

//////////////////////////////////////////////////////////////////////////////7
//                              Await                                        //
//////////////////////////////////////////////////////////////////////////////

//The syntax:

// works only inside async functions
let value = await promise;

// the keyword await makes JavaScript wait until that promise settles and returns its result.

//E.g:

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done'), 1000);
  });

  let result = await promise;

  alert(result);
}

f();

///////////////////////////////////////////////////////////////////////////////////////////////
//await only works within an async function!!!!!!
///////////////////////////////////////////////////////////////////////////////////////////////

//Another Example:

async function showAvatar() {
  let response = await fetch('/articles/promise-chaining/user.json');
  let user = await response.json();

  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = 'promise-avatar-example';
  document.body.append(img);

  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  img.remove();
  return githubUser;
}

showAvatar();

////////////////////////////////////////////////////////////////////////////////////////////////
//await won't work in the top-level code
//for example

let response = await fetch('....');
let user = await response.json();
// say it wont work but it worked apart from node.js

(async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/users/2');
  let user = await response.json();
})();

//// await accepts "thenables".

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    setTimeout(() => resolve(this.num * 2), 1000);
  }
}

async function f() {
  let result = await new Thenable(1);
  alert(result);
}

f();

//////////////////////////////////////////////////////////////////////////////////////////
//                            Async class methods                               //////////
/////////////////////////////////////////////////////////////////////////////////////////

class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}
new Waiter().wait().then(alert);

///////////////////////////////////////////////////////////////////////////////////
//                            Error Handling                                    //
//////////////////////////////////////////////////////////////////////////////////

async function f() {
  await Promise.reject(new Error('Whoops!'));
}

// is same as:

async function f() {
  throw new Error('Whoops!');
}

////////////////////////////////////////////////////////////////////////////////////////

//                  Real Situation example

async function f() {
  try {
    let response = await fetch('http://no-such-url');
  } catch (err) {
    alert(err);
  }
}

f();
////////////////////////////////////////////////////////////////////////////////////////

async function f() {
  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch (err) {
    alert(err);
  }
}

f();
////////////////////////////////////////////////////////////////////////////////////////

async function f() {
  let response = await fetch('http://no-such-url');
}

f().catch(alert);

////////////////////////////////////////////////////////////////////////////////////////

//async/await works well with Promise.all
