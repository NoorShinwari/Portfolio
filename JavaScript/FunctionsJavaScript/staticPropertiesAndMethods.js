// Static Properties and Methods////////////////////////////////////////77
//we can assign a method to the class function itself, not to its "protprype"
// such methos are called static..
//they are prepended by static keyword

class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // it gives true

///OR//////
class User {}
User.staticMethod = function() {
  alert(this === User);
};

User.staticMethod(); // it gives true too..
/////////////////////////////////////////////////////////////////////

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

//USAGE

let articles = [
  new Article('HTML', new Date(2020, 03, 26)),
  new Article('CSS', new Date(2020, 1, 26)),
  new Article('JavaScript', new Date(2020, 2, 1))
];

articles.sort(Article.compare);
alert(articles[0].title);

//Another Example...
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static createTodays() {
    return new this("Today's digest", new Date());
  }
}

let article = Article.createTodays();
alert(article.title);

//// STATIC PROPERTIES
class Article {
  static publisher = 'Noor Shinwari';
}
alert(Article.publisher); // Noor Shinwari Or Articles.publisher = "Noor Shinwari";

//Inheritance of static properties and methods
//Static properties and methods are inherited.

class Animal {
  static planet = 'Earth';
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

//______________________________________________________________
//--------------------------------------------------------------
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbits = [new Rabbit('White Rabbit', 10), new Rabbit('Black Rabbit', 5)];

rabbits.sort(Rabbit.compare);
rabbits[0].run();
alert(Rabbit.planet);
