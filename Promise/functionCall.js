//                                  Function.prototype.call()                               //
/////////////////////////////////////////////////////////////////////////////////////////////

//the call() method calls a function with a given 'this' value and arguments provided individually.

// the call() method calls a function with a given this value and arguments provided individually.

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}
console.log(new Food('cheese', 5).name);

/////////////////////////////////////////////////////////////////////////

// Syntax

//func.call([thisArg[, arg1,arg2, ...argN]])

//EXAMPLES:

//We can use call to chain constructors for an object(similar to Java);

//Two other functions, Food and Toy, invode Product, passing this, name and price.
//Product initializes the properties name and price, both specialized functions define the category.

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

const cheese = new Food('feta', 5);
const fun = new Toy('robot', 40);

///////////////////////////////////////////////////////////////////////////////////////////
// in this example, we create an anonymous function and use call to invode it on every object in an array.
/////////////////////////////////////////////////////////////////////////////////////////////

const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (let i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species + ':' + this.name);
    };
    this.print();
  }.call(animals[i], i));
}

////////////////////////////////////////////////////////////////////////////////////////////////
//Using call to invode a function and specifying the context for 'this'                       //
////////////////////////////////////////////////////////////////////////////////////////////////

function greet() {
  const reply = [
    this.animal,
    'typically sleep betwwen',
    this.sleepDuration
  ].join(' ');
  console.log(reply);
}

const obj = {
  animal: 'cats',
  sleepDuration: '12 and 16 hours'
};

greet.call(obj); // cats typically sleep between 12 and 16 hours.

////////////////////////////////////////////////////////////////////////////////////////////////
//___________________________________________________________________________________________//
/////////////////////////////////////////////7777777777777777777//////////////////////////////

//USIng call to invoke a function and without specifying the first argument:

var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', this.sData);
}

display.call();
//////////////////////////////////////////////////////////////////////////////////////////////
