function person(name) {
  this.name = name;
}

person.prototype.greet = function () {
  console.log(`My name is ${this.name}`);
};

let user = new person("Shabbir");
user.greet();
