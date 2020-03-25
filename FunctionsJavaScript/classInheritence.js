//The “extends” keyword
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}
let animal = new Animal('My animal');

//The syntax to extend another class is:
// class Child extends Parent.

// creating a class Rabbit that inherits from Animal:
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}
let rabbit = new Rabbit('White Rabbit');

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides

//////////////////////////////////////////////////////////////
////////////////Any expression is allowed after extends///////
////////////////////////////////////////////////////////////////

function f(phrase) {
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}
class User extends f('hello') {}
new User().sayHi();
///////////////////////////////////////////////////////////////
////////////////////Overriding a method///////////////////////
/////////////////////////////////////////////////////////////////
class Rabbit extends Animal {
  stop() {
    /*this will be used for rabbit.stop()
    insted of stop() from class Animal */
  }
}
////////////////Super keyword//////////////////////////////////
// super.method(...)¹ to call a parent method, super(...)² to call a parent constructor(inside our constructor only.)
// For Example:::::

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stands stil.`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit('White Rabbit');

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!
//Now Rabit has the stop method that calls the parent super.stop() in the process

/////////////////////////////////////////////////////////////////////////////7
///////////////////////////ARROW FUNCTIONS HAVE NO SUPER/////////////////////7
/////////////////////////////////////////////////////////////////////////////7

//I didnt get this part........................................

///////////////////////////////////////////////////////////////
///////////Overriding constructor/////////////////////////////
//If a class extends another class and has no constructor, then the
//following "empty" constructor is generated:
class Rabbit extends Animal {
  // generated for extending classes without own constructors
  constructor(...arg) {
    super(...arg);
  }
}

////parent constructor passing it all the arguments.

/////////////////////////////////////////////////////////////////////////////////////7///
//Adding a custom constructor to Rabbit. ==> earLength

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  //...................
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }
}

// It didn't work. says must call super constructor in .....
// here is the fix

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  //...............
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
  //.......
}

let rabbit = new Rabbit('White Rabbit', 10);
console.log(rabbit.name); // White Rabbit
console.log(rabbit.earLength); // 10
// it worked just fine...

//SUPER: Internals, [[HomeObject]]//////////////77
//When a function is specified as a class or object method, its [[HomeObject]] == animal

let animal = {
  name: 'Animal',
  eat() {
    // animal.eat.[[HomeObject]] == animal
    alert(`${this.name} eats.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: 'Rabbit',
  eat() {
    //rabbit.eat.[[HomeObject]] == rabbit
    super.eat();
  }
};
let longEar = {
  __proto__: rabbit,
  name: 'Long Ear',
  eat() {
    // longEar.eat.[[HomeObject]] ==longEar
    super.eat();
  }
};

longEar.eat(); // Long Ear eats...

////////////////////////////////////////////////////////////////////7
//////////////////////////Methods are not "free"////////////////////7
/**Functions are free, not bound to objects in JavaScript.
 * So they can be copied between objects and called with another this.
 * The very Existence of [[HomeObject]] violates that principle, because
 * methoths remember their objects.
 * the only place in language where [[HomeObject]] is used - is super.
 */

let animal = {
  sayHi() {
    console.log("I'm an animal");
  }
};

let rabbit = {
  __proto__: animal,
  sayHi() {
    super.sayHi();
  }
};
let plant = {
  sayHi() {
    console.log("I'm al plant");
  }
};
let tree = {
  __proto__: plant,
  sayHi: rabbit.sayHi //
};
tree.sayHi();

////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
