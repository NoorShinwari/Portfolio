//Pyramid of Doom.....
// Example::

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

loadScript('1.js', function(error, script) {
  if (error) {
    handleError(error);
  } else {
    //..
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        //..
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            //.. continue agter all scripts are loaded(*)
          }
        });
      }
    });
  }
}); //_________________________________________________________________// //___________________This is Called:________________________________///
/**
 * In the code above:
 * 1. We load 1.js, then if there's no error.
 * 2. We load 2.js, then if there's no error.
 * 3. We load 3.js, then if there's no error- do something else(*).
 */ /////////////CALLBACK HELL or PYRAMID OF DOOM/////////////////////////
//__________________________________________________________________//

// We can try to alleviate the proble by making every action a standalone function, like this:

loadScript('1.js', step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    //..
    loadScript('2.js', step2);
  }
}
function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    //...
    loadScript('3.js', step3);
  }
}
function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    //...continue after all scripts are loaded (*)
  }
}
