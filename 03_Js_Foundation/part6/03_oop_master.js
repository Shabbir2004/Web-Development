let car = {
  make: "Toyota",
  model: "Camry",
  year: 2015,

  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

console.log(car.start());

// --------------------------------------------------
function Person(name, age) {
  // CAPITAL FUNCTION NAME MEANS "CONSTRUCTOR"
  this.name = name;
  this.age = age;
}

let john = new Person("John", 20);
console.log(john.name);

// --------------------------------------------
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes sound`;
};

Array.prototype.shabbir = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
console.log(myArray.shabbir());

let myNewArray = [1, 2, 3, 4, 5];
console.log(myNewArray.shabbir());

// -----------------------------------------------
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

// INHERITANCE

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());

let vehOne = new Vehicle("Hyundai", "Creta");
console.log(vehOne.make);
console.log(vehOne.model);

// ENCAPSULATION

class BankAccount {
  #balance = 100;

  deposite(amount) {
    this.#balance;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
console.log(account.balance);
console.log(account.getBalance());

// ABSTRACTION

class CoffeeMachine {
  start() {
    // CALL DATABASE
    // FILTER VALUE
    return `Starting the machine ....`;
  }

  brewCoffee() {
    // COMPLEX CALCULATIONS
    return `Brewing coffee ....`;
  }

  pressStartButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffee();
    return `${msg1} + ${msg2}`;
  }
}

let myMachine = new CoffeeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());

// POLYMORPHISM

class Bird {
  fly() {
    return `flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

// STATIC METHOD

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));  // CANNOT DO WITH STATIC  , WILL GIVE ERROR

console.log(Calculator.add(2, 3)); // WE CAN DO THIS WAY ,  BY DIRECT CALLING CLASS

// GETTERS AND SETTERS

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return "You are not allowed to see salary";
  }

  set salary(value) {
    if (value < 0) {
      console.log("Invalid salary");
    } else {
      this.#salary = value; // Correctly updating private field
    }
  }
}

// let emp = new Employee("Alice", -5000); // Throws an error
// console.error(emp.salary); // WILL GIVE ERROR

let emp2 = new Employee("Bob", 5000);
console.log(emp2.salary); // "You are not allowed to see salary"
emp2.salary = 6000; // Updates private field
