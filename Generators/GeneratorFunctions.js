//////////////                              Generators                                  ///////////
//////////////////////////////////////////////////////////////////////////////////////////////////

//Regular function return only one, single value or nothing.
//Generators can return("yield") multiple values, one after another, on demand.

///                         Generator functions                                     ///////

// to create a generator, we need a special syntax construct: function*:

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// Generator function when called, it doesnt run its code, instead it return a special object called "generator object".

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

//"generator function" creates "generator object".
let generator = generateSequence();
alert(generator);

//The main method of a generator is next(). When called, it runs the execution until the nearest yield<value>.
// (value can be omitted, then it's undefined).
// then the function execution pauses, and the yielded value is returned to the outer code.

/// The result of next() is always an object with two properties:
/**
 * value: the yielded value.
 * done: true if the function code has finished, otherwise false.
 */

//E.g:

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

let one = generator.next();

alert(JSON.stringify(one));

let two = generator.next();

alert(JSON.stringify(two));

let three = generatorSequence();

alert(JSON.stringify(three));

//_________________________________________________________________________________________________
//_________________________________________________________________________________________________

//                              Generators are iterable                                          //

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

for (let value of generator) {
  alert(value);
}

//The above example shows 1, then 2, it doesn't show 3!
// it's because for..of iteration ignores the last value, when done: true.
// we must return them with yield:

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generateSequence();

for (let value of generator) {
  console.log(value);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                          Using generators for iterables                                         ////
///////////////////////////////////////////////////////////////////////////////////////////////////////

let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

console.log([...range]);

/// With generator function..

let range = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

alert([...range]);

/////////////////////////////////////////////////////////////////////////////////////////////

//                              Generator composition                                     ///
/////////////////////////////////////////////////////////////////////////////////////////////

//Generator composition is a special feature of generators that allows to trasnparently "embed"
// generators in each other.

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

///////////////////////////////////////////////////////////////////////////////
// The composed generator;

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {
  yield* generateSequence(48, 57);
  yield* generateSequence(65, 50);
  yield* generateSequence(97, 122);
}

let str = '';

for (let code of generatePasswordCodes()) {
  str += String.fromCodePoint(code);
}

////////////////////////////////////////////////////////////////////////////////////
// the yield* directive delegates the execution to another generator.
// yield* gen means it iterates over the generator gen and forwards its yields outside.
//As if the values were yielded by the outer generator.
//////////////////////////////////////////////////////////////////////////////////////

// it is the same;

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {
  // yield* generateSequence(48,57);
  for (let i = 48; i <= 57; i++) yield i;
  // yield* generateSequence(65,90):
  for (let i = 65; i <= 90; i++) yield i;
  // yield* generateSequence(97,122);
  for (let i = 97; i <= 122; i++) yield i;
}

let str = '';

for (let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}
alert(str);

//\\////////////////////////////////////////////////////////////////////////////////////////
//\\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// "yield" is a two-way street
// it not only returns the resullt to the outside but can pass the value inside the generator.
// we do it with generator.next(arg), that argument becomes the result of yield.

function* gen() {
  let result = yield '2+2=?';
  alert(result);
}

let generator = gen();
let question = generator.next().value;
generator.next(4);

//////////////////////////////////////////////////////////////////////////////////////////

function* gen() {
  let ask1 = yield '2 + 2 = ?';
  alert(ask1);
  let ask2 = yield '3 * 3 = ?';
  alert(ask2);
}

let generator = gen();

console.log(generator.next().value);
console.log(generator.next(4).value);
console.log(generator.next(9).done);

//////////////////////////////////////////////////////////////////////////////////////////

//                                    generator.throw                                  ///
//////////////////////////////////////////////////////////////////////////////////////////

function* gen() {
  try {
    let result = yield '2 + 2 = ?';
    alert(
      'The execution does not reach here, because the exception is thrown above'
    );
  } catch (e) {
    alert(e);
  }
}

let generator = gen();

let question = generator.next().value;

generator.throw(new Error('The answer is not found in my database'));

////////////////////////////////////////////////////////////////////////////////////////////

function* pseudoRandom(seed) {
  let value = seed;

  while (true) {
    value = (value * 16807) % 2147483647;
    yield value;
  }
}

let generator = pseudoRandom(1);

alert(generator.next().value);
alert(generator.next().value);
alert(generator.next().value);
// i dont understand how does modulo work:::
