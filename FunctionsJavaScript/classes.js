// THE CLASS SYNTAX:::
class MyClass {
  //class methods
  constructor() {
    /*... */
  }
  method1() {
    /*... */
  }
  method2() {
    /*... */
  }
  method3() {
    /*... */
  }
} ///////////////////////////////////////////////////////////////////7
// For example

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}
////Now how to use it..
let user = new User('John'); //===> this new will call the constructor

// What is a class?
//In JavaScript, a class is a kind of function.

class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

alert(typeof User); // function. ==> proof: User is a function;

///////////////////////////////////////////////////////////////////////77
// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass name is visible only inside the class
  }
};

new User().sayHi(); // works, shows MyClass definition

alert(MyClass); // error, MyClass name isn't visible outside of the class

//Getters/setters, other shorthands

class User {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert('Name is too short.');
      return;
    }
    this._name = value;
  }
}

let user = new User('John');
alert(user.name); // John

user = new User(''); // Name is too short.

// an Example with a computed property name in brackets...
class User {
  ['say' + 'Hi']() {
    alert('Hello');
  }
}

new User().sayHi();

/////////////////////////CLASS PROPERTIES////////////////////////
class MyClass {
    prop = value; // property
  
    constructor(...) { // constructor
      // ...
    }
  
    method(...) {} // method
  
    get something(...) {} // getter method
    set something(...) {} // setter method
  
    [Symbol.iterator]() {} // method with computed name (symbol here)
    // ...
  }

  /////////////////////////////////////////////////////////////////
  ////////////////EXERCISE/////////////////////////////////
  
class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
