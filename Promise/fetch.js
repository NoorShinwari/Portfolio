//                             BIGGER EXAMPLE                                   //

// the syntax

let promise = fetch(url);
////////////////////////////////////////////////////////////////////////////////////

fetch('/article/promise-chaining/user.json')
  // .then below runs when the remote server responds
  .then(function(response) {
    // response.text() returns a new promise that resolve with the full response text
    // when it loads
    return response.text();
  })
  .then(function(text) {
    // ... and ther's the content of the remote file
    alert(text);
  });

////////////////////////////////////////////////////////////////////////
////                            Example with loaded USer           ////
///////////////////////////////////////////////////////////////////////

//Make a request for user.json
fetch('/article/promise-chaining/user.json')
  // Load it as json
  .then(response => resoponse.json())
  // Make a request to Github
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  // Load the response as json
  .then(response => response.json())
  // Show the avatar image(githubUser.avatar_url) for 3 seonds (maybe animate it)
  .then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    Image.className = 'promise-avatar-example';
    document.body.append(img);

    setTimeout(() => img.remove(), 3000); // (*)
  });

////////////////////////////////////////////////////////////////////////////////

fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => response.json())
  .then(response => response.json())
  .then(
    githubUser =>
      new Promise(function(resolve, reject) {
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
  .then(githubUser => alert(`Finished showing ${githubUser.name}`));

///////////////////////////////////////////////////////////////////////////////

// Splitting the code into reusable functions:

function loadJson(url) {
  return fetch(url).then(response => response.json());
}

function loadGithubUser(name) {
  return fetch(`https://api.github.com/users/${user}`).then(response =>
    response.json()
  );
}

function showAvatar(githbUser) {
  return new Promise(function(resolve, reject) {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  });
}

//Usage

loadJson('/article/promise-chaining/user.json')
  .then(user => loadGithubUser(user.name))
  .then(showAvatar)
  .then(githubUser => alert(`Finished showing ${githubUser.name}`));
