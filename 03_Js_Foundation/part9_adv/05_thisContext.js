const person = {
  name: "Shabbir",
  greet() {
    console.log(`Hi , I am ${this.name}`);
  },
};

person.greet();

// const greetFunction = person.greet;
// greetFunction(); // ERROR ------------ UNDEFINED

const extra = person.greet.bind({ name: "Abbas" });
extra();


//  SELF-STUDY ON ----->   BIND  , CALL AND APPLY