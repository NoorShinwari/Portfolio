// Error handling with promises
//When a promise rejects, the control jumps to the closest rejection handler.

fetch('https://no-such.blabla') // rejects
  .then(response => response.json())
  .catch(err => alert(err)); // TypeError: failed to fetch (the text may vary)

//Example :

fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(
    githubUser =>
      new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = 'promise-avatar-example';
        document.body.append(img);

        setTimeout(() => {
          img.remove();
          resolve(githubUser);
        }, 3000);
      })
  )
  .catch(error => alert(error.messege));

///////////////////////////////////////////////////////////////////////////////////
//                           Implicit try...catch                               //
//////////////////////////////////////////////////////////////////////////////////

new Promise((resolve, reject) => {
  throw new Error('Whoops!');
}).catch(alert); // Error: Whoops!

// works same as

new Promise((resolve, reject) => {
  reject(new Error('Whoops!'));
}).catch(alert);

/////////////////////////////////////////////////////////////////////////////////////

new Promise((resolve, reject) => {
  resolve('ok');
})
  .then(result => {
    throw new Error('Whoops!'); // rejects the promise
  })
  .catch(alert); //

new Promise((resolve, reject) => {
  resolve('ok');
})
  .then(result => {
    blabla(); // no such function
  })
  .catch(alert);

///////////////////////////////////////////////////////////////////////////////////
//                                  Rethrowing                                ////
//////////////////////////////////////////////////////////////////////////////////

//Example:
// the execution: catch -> then
new Promise((resolve, reject) => {
  throw new Error('Whoops!');
})
  .catch(function(error) {
    alert('The error is handled, continue normally');
  })
  .then(() => alert('Next successful handler runs'));
////////////////////////////////////////////////////////////////////////////

//in the example below, handler catches the error and can't handle it, so it throws it again:

// the execution: catch -> then
new Promise((resolve, rejects) => {
  throw new Error('Whoops');
})
  .catch(function(error) {
    if (error instanceof URIError) {
      // handle it
    } else {
      alert("Can't handle such error");

      throw error; // throwing this or another error jumps to the next catch
    }
  })
  .then(function() {
    /** doesn't run error */
  })
  .catch(error => {
    // (**)

    alert(`The unknown error has occurred: ${error}`);
    // don't return anything => execution goes the normal way
  });

// The execution jumps from the first .catch (*) to the next one (**) down the chain.

///////////////////////////////////////////////////////////////////////////////
//                            Unhandled rejections                           //
///////////////////////////////////////////////////////////////////////////////

new Promise(function() {
  noSuchFunction(); // Error here (no Such function)
}).then(() => {
  // successful promise handlers, one or more
});

/////////////////////////////////////////////////////////////////////////////////
