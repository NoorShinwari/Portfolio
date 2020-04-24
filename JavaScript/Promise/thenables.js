/////////                            Thenables                                    ////
// Examle:

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve); // function() { native code}
    // resolve with this.num*2 after the 1 second
    setTimeout(() => resolve(this.num * 2), 1000); // (**)
  }
}

new Promise(resolve => resolve(1))
  .then(result => {
    return new Thenable(result);
  })
  .then(alert);

// new Promise(function(resolve, reject) {
//   reject(new Error('Whhops'));
// })
//   .then(result => {
//     return new Thenable(result);
//   })
//   .then(alert);

// i was only practicing with reject only.
// i tried it with null but it gave an error then i asked my Teacher, his comments are follows
//resolve and reject are parameter names, null is a value.
//You can replace resolve with any name, even _,
//but I wouldn't put a value such as 0, '', null or undefined
