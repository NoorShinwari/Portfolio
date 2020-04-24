//Delay with a promise
/**
 * the built in function setTimeout uses callbacks.
 * Create a promise-based alternative.
 * the function delay(ms) should return a promise.
 * The promise should resolve after ms milliseconds,
 * so that we can add .then to it, like this
 * function delay(ms) { code }
 * delay(3000).then(()=>alert('run after 3 seconds));
 *
 */

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
