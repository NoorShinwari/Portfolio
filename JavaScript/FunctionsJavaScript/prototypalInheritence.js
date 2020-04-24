let animal = {
  eats: true,
  walk() {
    alert('Animal walk');
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////77
let animal = {
  eats: true,
  walk() {
    alert('Animal walk');
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)
////////////////////////////////////////////////////////////////////////////////////////////////////777

let animal = {
  eats: true,
  walk() {
    /* this method won't be used by rabbit */
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.walk = function() {
  alert('Rabbit! Bounce-bounce!');
};

rabbit.walk(); // Rabbit! Bounce-bounce!
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let user = {
  name: 'John',
  surname: 'Smith',

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = 'Alice Cooper'; // (**)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////The value of “this”/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: 'White Rabbit',
  __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////7777777////////////77777
//////////////////////////////for...in loop//////////////////////////////////////////////////
// for ... in loop also iterates over the inherited properties of an objects, example below,,,,,,,,,,

let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  _proto_: animal
};

console.log(Object.keys(rabbit)); ///jumps

for (let prop in rabbit) console.log(prop); // jumps, then eats
// for.. in loops over both own and inherited keys

let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}

/*Searching algorithm
importance: 5
The task has two parts.

Given the following objects:*/

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};
/*
Use __proto__ to assign prototypes in a way that any property lookup will follow the path:
 pockets → bed → table → head.
  For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed. */
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;
