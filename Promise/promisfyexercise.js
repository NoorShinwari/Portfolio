function promisify(f, manyArgs = false) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) {
        // our custom callback for f
        if (err) {
          return reject(err);
        } else {
          // resolve with all callback results if manyArgs is specified
          resolve(manyArgs ? results : results[0]);
        }
      }

      args.push(callback);

      console.log('this:', this.toString());

      f.call(this, ...args);
    });
  };
}

function test(a, b) {
  console.log(`Hello world! a:${a} b:${b}`);
}
let f = promisify(test, true);
f('Canada', 'Finland').then(
  arrayOfResults => {
    console.log('arrayOfResults:', arrayOfResults);
  },
  err => {
    console.log('err:', err);
  }
);
