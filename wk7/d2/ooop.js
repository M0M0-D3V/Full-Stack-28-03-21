// before ES6
// function Vehicle(manufacturer, model, color) {
//   this.manufacturer = manufacturer;
//   this.model = model;
//   this.color = color;
// }
// Inheritance & Super
// parent Vehicle class
class Vehicle {
  constructor(manufacturer, model, color) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.km = 0;
  }
  drive() {
    this.km += 10;
    console.log(
      `You drove your ${this.constructor.name} and it now has ${this.km} km on it.`
    );
  }
  carName() {
    console.log(
      `Your car is a ${this.color}, ${this.manufacturer}, ${this.model} `
    );
  }
  // simple method in the parent class
  parentFunction() {
    return "This is coming from the parent!";
  }
}
// invoking parent class
let lambo = new Vehicle("Lamborghini", "666", "black");
let tesla = new Vehicle("Tesla", "S", "white");

lambo.carName();
lambo.drive();

// child M5 class
// python: class M5(Vehicle):
class M5 extends Vehicle {
  constructor(color) {
    //   new Vehicle = ("BMW", "M5", color)
    super("BMW", "M5", color);
    this.hp = 616;
  }
  // simple function in the child class
  childFunction() {
    // by using super, we can call the parent method
    const message = super.parentFunction();
    console.log(message);
  }
  //   drive() {
  //     this.miles += 10;
  //     console.log(
  //       `You drove your ${this.constructor.name} and it now has ${this.miles} miles on it.`
  //     );
  //   }
  //   carName() {
  //     console.log(
  //       `Your car is a ${this.color}, ${this.manufacturer}, ${this.model} `
  //     );
  //   }
  //   // simple method in the parent class
  //   parentFunction() {
  //     return "This is coming from the parent!";
  //   }
}
// invoking child class of Vehicle
let newM5 = new M5("green");
console.log(newM5.manufacturer);
newM5.carName();
newM5.drive();
newM5.parentFunction();
newM5.childFunction();

class Lamborghini extends Vehicle {
  constructor() {
    super("Lamborghini", "666", "black");
  }
  //   drive() {
  //     this.km += 100;
  //     console.log(
  //       `You drove your ${this.constructor.name} and it now has ${this.km} km on it.`
  //     );
  //   }
}

let newLambo = new Lamborghini();
newLambo.drive();

class PreOwnedCar extends Vehicle {
  constructor(manufacturer, model, color, km) {
    super(manufacturer, model, color);
    this.datePurchased = new Date();
    this.km = km;
  }
}

let myNewWhip = new PreOwnedCar("Toyota", "Camry", "Gray", 50000);
myNewWhip.carName();
myNewWhip.drive();

// below is additional review for assignment
// Human
class Human {
  constructor(name) {
    this.name = name;
    this.hitPoints = 100;
  }
  sayMyName() {
    console.log(`I am ${this.name}!`);
  }
  displayHealth() {
    console.log(`${this.name}: ${this.hitPoints}`);
  }
}

//   extend Human to other sub classes: Warrior, Barbarian, Wizard, Hobbit
class Hobbit extends Human {
  constructor(name) {
    super(name);
  }

  // override functions
  trickTheEnemy(target) {
    console.log(
      `The Hobbit ${this.name} tricks ${target.name}! And also steals their money muahhahaha`
    );
  }
}

let sam = new Hobbit("Sam");
let badGuy = new Human("Lord Of The Rings");

sam.trickTheEnemy(badGuy);
