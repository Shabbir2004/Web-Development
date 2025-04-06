let heroes = ["a", "b", "c", true];

console.log(heroes[0]);
console.log(heroes[1]);
console.log(heroes[2]);
console.log(heroes[3]);

console.log(1 + "1"); //11 ---> STRANGE
console.log("1" + 1); //11 --->  SAME

let isValue = true;
console.log(Number(isValue)); // TRUE = 1 , FALSE = 0
console.log(Number(isValue + 1));

let a = "6";
let b = "7";
let c = "3abc"   // ANSWER = NAN = NOT A NUMBER

console.log(Number(a)); // GOT CONVERTED INTO NUMBER
console.log(b);   //STRING
console.log(Number(c)); 


