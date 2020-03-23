//Object-oriented programming "OOP"— the basics//
//he basic idea of OOP is that we use objects to model real world things
// that we want to represent inside our programs,
//and/or provide a simple way to access functionality
//that would otherwise be hard or impossible to make use of.

//INSTANTIATION//////////////////////////////////////////
//When an object instance is created from a class,
// the class's constructor function is run to create it.
// This process of creating an object instance from a class is called instantiation
// — the object instance is instantiated from the class.
///////////////////////////////////////////////////////////////

///////Constructors and object instances///////////////////
///////////////EXAMPLES//////////////////////////////////

function createNewPerson(name) {
  const obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert("Hi! I'm " + obj.name + '.');
  };
  return obj;
}
// Now I can create a new person by calling this function --
const salva = createNewPerson('Salva');
salva.name;
salva.greeting();

///Lets try the constructor functions///////////
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert("Hi! I'm " + this.name + '.');
  };
}
///Please note that constructor function is JavaScript's version of a class.
//It has all the features of the function but it doesnt return anthing or create an object
//It basically defines properties and methods, also the [this] keyword used here.
// Now lets see ho to call a constructor to create some objects?

let person1 = new Person('Bob');
let person2 = new Person('Sarah');

/////////////////CREATING OUR FINISHED CONSTRUCTOR/////////////////////////////
/////////lET'S COME TO THE REAL WORLD///////////////////////////////

function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(
      this.name.first +
        ' ' +
        this.name.last +
        ' is ' +
        this.age +
        ' years old. He likes ' +
        this.interests[0] +
        ' and ' +
        this.interests[1] +
        '.'
    );
  };
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
////////////////////////////////////////////////////////////////////

// Now changing the above function pronoun,,,,,,,

function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    let string =
      this.name.first +
      ' ' +
      this.name.last +
      ' is ' +
      this.age +
      ' years old. He likes ' +
      this.interests[0] +
      ' and ' +
      this.interests[1] +
      '.';
    let pronoun;
    if (
      this.gender === 'male' ||
      this.gender === 'Male' ||
      this.gender === 'm' ||
      this.gender === 'M'
    ) {
      pronoun = 'He likes ';
    } else if (
      this.gender === 'female' ||
      this.gender === 'Female' ||
      this.gender === 'f' ||
      this.gender === 'F'
    ) {
      pronoun = 'She likes ';
    } else {
      pronoun = 'They like ';
    }
    string += pronoun;
    if (this.interests.length === 1) {
      string += this.interests[0] + '.';
    } else if (this.interests.length === 2) {
      string += this.interests[0] + ' and ' + this.interests[1] + '.';
    } else {
      for (let i = 0; i < this.interests.length; i++) {
        if (i === this.interests.length - 1) {
          sring += this.interests[i] + ', ';
        } else {
          string += this.interests[i] + ', ';
        }
      }
    }
    alert(string);
  };
  this.greeting = function() {
    alert("Hi! I'm " + this.name.first + '.');
  };
}

let person1 = new Person('Tammi', 'Smith', 32, 'neutral', [
  'music',
  'skiing',
  'kickboxing'
]);

///THE OBJECT CONSTUCTOR
let person1 = new Object({
  name: 'Chris',
  age: 38,
  greeting: function() {
    alert("Hi! I'm " + this.name + '.');
  }
});

//// Using the create() method;
let person2 = Object.create(person1);
person2.name;
person2.greeting();
