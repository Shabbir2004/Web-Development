function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Innova");
console.log(myCar);

let myNewCar = new Car("Tata", "Safari");
console.log(myNewCar);

// let myOldCar = Car("Tata", "Safari");
// console.log(myNewCar); // UNDEFINED

//------------------------------

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}

let teaName = new Tea("lemon tea");
console.log(teaName);
console.log(teaName.describe());

// -----------------------------

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `The ${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("Cat");
console.log(cat.sound());

// --------------------------------

function Drink(names) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.names = names;
}

let tea = new Drink("Tea");
// let coffee = Drink("Coffee");  // WILL GIVE ERROE
