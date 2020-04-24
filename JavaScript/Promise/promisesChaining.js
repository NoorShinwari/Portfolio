//____________________________________Promises_chaining________________________________//

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000); //*
})
  .then(function(result) {
    // **
    alert(result); //1
    return result * 2;
  })
  .then(function(result) {
    alert(result); //2
    return result * 2;
  })
  .then(function(result) {
    alert(result); //4
    return result * 2;
  });

//A classic newbie error: technically we can also add many .then to a single promise. this is not chaining.
//_____For Example:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); //1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); //1
  return result * 2;
});

// When we do several handlers to one promise they dont pass the result to each other,
// instead they process it independently.

//_____________________________Retutning_promises_______________________________________//

// A handler, used in .then(handler) may create and return a promise.
// In that case further handlers waits until it settles,and then get its result.

new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function(result) {
    alert(result); //1

    return new Promise((resolve, reject) => {
      //(*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function(result) {
    //(**)
    alert(result); //2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function(result) {
    alert(result); // 4
  });

///////////////////////////////////////////////////////////////////////////////////////
//                     EXAMPLE: loadScript                                           //
///////////////////////////////////////////////////////////////////////////////////////

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}

loadScript('/article/promise-chaining/one.js')
  .then(function(script) {
    return loadScript('/article/promise-chaining/two.js');
  })
  .then(function(script) {
    return loadScript('/article/promise-chaining/three.js');
  })
  .then(function(script) {
    // use functions declared in scripts
    // to show that they indeed loaded
    one();
    two();
    three();
  });

//this code can be made bit shorter with arrow functions:

loadScript('/article/promise-chaining/one.js')
  .then(script => loadScript('/article/promise-chaining/two.js'))
  .then(script => loadScript('/article/promise-chaining/three.js'))
  .then(script => {
    // scripts are loaded, now we can use functions declared there
    one();
    two();
    three();
  });

//OR

loadScript('/article/promise-chaining/one.js').then(script1 => {
  loadScript('/article/promise-chaining/two.js').then(script2 => {
    loadScript('/article/promise-chaining/three.js').then(script3 => {
      // this function has access to variables script1, script2 and script3
      one();
      two();
      three();
    });
  });
});
