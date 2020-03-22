class Car {
  constructor() {
    this.wheels = 4;
    this.doors = 4;
    this.topSpeed = 100;
    this.feulCapacity = '400 Litres';
  }
  setWheels(w) {
    this.wheels = w;
  }
  setDoors(d) {
    this.doors = d;
  }
  setTopSpeed(t) {
    this.topSpeed = t;
  }
  setFeulCapacity(fc) {
    this.feulCapacity = fc;
  }
  displayCarProps() {
    console.log(`Your car has ${this.wheels} wheels,\
       ${this.doors} doors with a top speed of ${this.topSpeed}\
       and feul capacity of ${this.feulCapacity}`);
  }
}
let sportsCar = new Car();
sportsCar.setDoors(2);
sportsCar.setTopSpeed(250);
sportsCar.setFeulCapacity('600 Litres');
sportsCar.displayCarProps();

// to get rid of the repeation of the sportsCar we use another method called method chaining
class Car {
  constructor() {
    this.wheels = 4;
    this.doors = 4;
    this.topSpeed = 100;
    this.feulCapacity = '400 Litres';
  }
  setWheels(w) {
    this.wheels = w;
    return this;
  }
  setDoors(d) {
    this.doors = d;
    return this;
  }
  setTopSpeed(t) {
    this.topSpeed = t;
    return this;
  }
  setFeulCapacity(fc) {
    this.feulCapacity = fc;
    return this;
  }
  displayCarProps() {
    console.log(`Your car has ${this.wheels} wheels,\
       ${this.doors} doors with a top speed of ${this.topSpeed}\
       and feul capacity of ${this.feulCapacity}`);
  }
}

///////////////////////////
let sportsCar = new Car()
  .setDoors(2)
  .setTopSpeed(250)
  .setFeulCapacity('600 Litres')
  .displayCarProps();

////////////////////////////////////////////////////////////////////////////
class ChainAble {
  firstMethod() {
    console.log('This is the First Method');
    return this;
  }

  secondMethod() {
    console.log('This is the Second Method');
    return this;
  }

  thirdMethod() {
    console.log('This is the Third Method');
    return this;
  }
}

const chainableInstance = new ChainAble();
chainableInstance
  .firstMethod()
  .secondMethod()
  .thirdMethod();

//////////////////////////////////////////////////////////////////////////////
class Arithmetic {
  constructor() {
    this.value = 0;
  }
  sum(...args) {
    this.value = args.reduce((sum, current) => sum + current, 0);
    return this;
  }
  add(value) {
    this.value = this.value + value;
    return this;
  }
  subtract(value) {
    this.value = this.value - value;
    return this;
  }
  average(...args) {
    this.value = args.length
      ? this.sum(...args).value / args.length
      : undefined;
    return this;
  }
}
let a = new Arithmetic();
a
  .sum(1, 3, 6) // => { value: 10 }
  .subtract(3) // => { value: 7 }
  .add(4).value; // => { value: 11 } // => 11
////////////////////////////////////////////////////77777

class Arithmetic {
  // add getter for value
  get val() {
    return this.value;
  }

  // rest of the code truncated for clarity
}

a = new Arithmetic();
a
  .sum(1, 3, 6) // => { value: 10 }
  .subtract(3) // => { value: 7 }
  .add(4).val; // => { value: 11 } // <== read the result of the computation

/////////////////////////////////////////////////////////////////////7
class Arithmetic {
  constructor() {
    this.value = 0;
  }
  get val() {
    return this.value;
  }
  sum(...args) {
    this.value = args.reduce((sum, current) => sum + current, 0);
    return this;
  }
  add(value) {
    this.value += value;
    return this;
  }
  subtract(value) {
    this.value -= value;
    return this;
  }
  average(...args) {
    this.value = args.length
      ? this.sum(...args).value / args.length
      : undefined;
    return this;
  }
}

let a = new Arithmetic();
a
  .sum(1, 3, 6) // => { value: 10 }
  .subtract(3) // => { value: 7 }
  .add(4).val; // => { value: 11 } // => 11
