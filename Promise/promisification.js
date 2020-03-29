//                                       PROMISIFICATION                                    //
/////////////////////////////////////////////////////////////////////////////////////////////

/**
 * "Promisification" => is a long word for a simple transformation.
 * It is the consersion of a function that accepts a callback into a function that returns a promise.
 */

//For Example:

function load(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// loadScript('pathe/script.js', (err, script)=> {/*... */})

//====> promisify it.

let loadScriptPromise = function(src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
};

//usage:
//loadScriptPromise('path/script.js).then(...)

//_______________________________________________________________________________________
// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));

//   document.head.append(script);
// }
//_______________________________________________________________________________________

function promisify(f) {
  return function(...args) {
    // return a wrapper-function
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        // our custom callback for f
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback); // append our custom callback to the end of f arguments

      f.call(this, ...args); // call the original function
    });
  };
}

let loadScriptPromise = promisify(loadScript);
loadScriptPromise(/*...*/).then(/*... */);

// i did't get this at all........
// it is clear now after another hour of studing ...args from developer.mozilla.org

//________________________________________________________________________________________

//More advance version of promisify:
// pomisify(f, true), promise result will be an array of callbacks results [res1, res2, ...]

function promisify(f, manyArgs = false) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) {
        // our custom callback for f
        if (err) {
          reject(err);
        } else {
          // resolve with all callback results if manyArgs is specified
          resolve(manyArgs ? results : results[0]);
        }
      }

      args.push(callback);
      f.call(this, ...args);
    });
  };
}

//Usage:

f = promisify(f, true);
//f(...).then(arrayOfResults => ..., err => ...)
