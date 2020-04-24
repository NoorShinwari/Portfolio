// making a simple coffee machine class..
class CoffeeMachine {
  waterAmount = 0;
  constructor(power) {
    this.power = power;
    alert(`Created a coffee-machine, power: ${power}`);
  }
}

let coffeeMAchine = new CoffeeMachine(100);
coffeeMAchine.waterAmount = 200;
// the properties waterAmount and power are public...

//protected properties are usually prefixed with an underscore _.
// so our property will be called _waterAmount:

class CoffeeMachine {
  _waterAmount = 0;
  set waterAmount(value) {
    if (value < 0) throw new Error('Negative water');
    this._waterAmount = value;
  }
  get waterAmount() {
    return this._waterAmount;
  }
  constructor(power) {
    this._power = power;
  }
}

let coffeeMAchine = new CoffeeMachine(100);
coffeeMAchine.waterAmount = -10;

//Read-only "power"

class CoffeeMachine {
  //..

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }
}
let coffeeMachine = new CoffeeMachine(100);

alert(`Power is: ${coffeeMAchine.power}W`); // Power is: 100W
coffeeMachine.power = 25; // it didnt give me an error but it didnt change the property

//Getter/setter functions
class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) throw new Error('Negative water');
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}
new CoffeeMachine().setWaterAmount(100);
