////////////////////////////////////////Tasks////////////////////////////////////////
//Rewrite using async/await instead of .then/catch:

function loadJson(url) {
  return fetch(url).then(response => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson('no-such-user.json').catch(alert); // Error: 404

/////////////////////////////////////////////////////////////////////////////

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}
loadJson('no-such-user.json').catch(alert); // Error: 404

////////////////////////////////////////////////////////////////////////////////////////

//                        Rewrite "rethrow" with async/await                         ///
////////////////////////////////////////////////////////////////////////////////////////

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url).then(response => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  });
}

function demoGithubUser() {
  let name = prompt('Enter a name?', 'iliakan');

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert('No such user, please reenter.');
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();

//______________________________________________
//                                  ________________________________________________//
//______________________________________________

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt('Enter a name?', 'iliakan');
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert('No such user, please reenter.');
      } else {
        throw err;
      }
    }
  }

  alert(`Full name: ${user.name}.`);
  return user;
}

demoGithubUser();

//////////////////////////////////////////////////////////////////////////////////////////////////

//Call async from non-async
//We have a “regular” function. How to call async from it and use its result?

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...what to write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
}

//___________________________________________________________________________________

function f() {
  wait().then(result => alert(result));
}
f();

//                                            ____________________________________________
//___________________________________________
//                                          ____________________________________________
//_______________________________________________
//                                       ________________________________________________
//___________________________________________________
//                                     __________________________________________________
//____________________________________
