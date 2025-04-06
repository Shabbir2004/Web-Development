let computer = {
  cpu: 12,
  ram: 16,
};

let lenevo = {
  screen: "HD",
  __proto__: computer, // BY THIS WE CAN ACCESS
};

let tomHardware = {};

console.log(computer);
console.log(`computer`, computer.__proto__); // TO ACCESS PROTOTYPE

console.log(`lenovo`, lenevo.__proto__); // 1st METHOD

let genericCar = {
  tyres: 4,
};

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar); // IN THE "tesla" I WANT TO ACCESS ALL THE PROPERTY OF "genericCar"

console.log(`genericCar`, tesla);
console.log(`tesla`, tesla.tyres);
console.log(`tesla`, Object.getPrototype(tesla)); // 2nd METHOD
