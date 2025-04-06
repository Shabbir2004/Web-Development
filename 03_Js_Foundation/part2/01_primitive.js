// NUMBER
let balance = 120;
let anotherbalance = new Number(120);

console.log(typeof balance);
console.log(anotherbalance);
console.log(typeof anotherbalance);

// BOOLEAN
let isActive = true;
let isReallyActive = new Boolean(true); //NOT RECOMMENDED

console.log(isActive);
console.log(isReallyActive);

// NULL AND UNDEFINED
let firstname;
let middlename = null;
console.log(firstname);

console.log(middlename);

//STRING
let myString1 = "hello";
let myString2 = "world";

let oldGreet = myString1 + "Shabbir";
console.log(oldGreet);

let greetMessage = `hello ${myString2} !`;
let demoOne = `Value is ${2 * 2}`;

console.log(greetMessage);
console.log(demoOne);

let symbol1 = Symbol();  // GUARANTEED TO BE UNIQUE
let symbol2 = Symbol();
console.log(symbol1 == symbol2);
console.log(symbol1);

let symbol3 = Symbol("shabbir"); 
let symbol4 = Symbol("shabbir");
console.log(symbol3 == symbol4);  // GUARANTEED TO BE UNIQUE



