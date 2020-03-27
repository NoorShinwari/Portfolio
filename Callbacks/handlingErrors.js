//Handling Errors
// improved version of loadScript from previous exercises i.e callback.js, callbackInCallback.js
function loadScript(src, callback) {
    let script =document.createElement("script";
    script.src = src;
    script.onload = () => callback(null,script);
    script.onerror= () => callback(new Error(`Script load error for ${src} `));
    document.head.append(script);
}

// It calls callback(null, script) for successful load and callback(error) otherwise.

loadScript('/my/script.js', function(error,script){
    if (error) {
        //handle error
    } else {
        //script loaded successfully
    }
})

// it is called the "error-first callback" style:
/**
 * The convection is:
 * 1. the first argument of the callback is reserved for an error if it occurs.
 * then callback(err) is called.
 * 2. the second argument (and the next ones if needed) are for the successful result.
 * then callback(null, result1, result2..) is called
 * the single callback function is used both for reporting errors and passing back results.
 */