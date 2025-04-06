// CHECKING IF A NUMBER IS GREATER THAN ANOTHER NUMBER

let num1 = 5;
let num2 = 8;
console.log("I am regular upper code");

if (num1 > num2) {
  console.log("Num1 is greater than num2");
} else {
  console.log("Num2 is greater than num1");
}

console.log("I am regular bottom code");

// CHECK IS A STRING IS EQUAL TO ANOTHER

let user1 = "shabbir";
let user2 = "abbas";

if (user1 == user2) {
  console.log("Pick another username");
} else {
  console.log("Usernames are valid");
}

// CHECK IS A VARIABLE IS A NUMBER OR NOT

let score = 44;

if (typeof score === "number") {
  console.log("Yes this is a number");
} else {
  console.log("This is not a number");
}

// CHECKING IF A BOOLEAN VALUE IS TRUE OR FALSE

let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is ready");
} else {
  console.log("Tea is not ready");
}

// CHECK IF ARRAY IS EMPTY OR NOT

let item = ["shoes"];
console.log(item.length);

if (item.length == 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}
