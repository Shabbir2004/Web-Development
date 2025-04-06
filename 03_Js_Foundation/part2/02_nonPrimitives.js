const username = {
  firstname: "shabbir",
  isLoggedin: true,
  "middlename": "zahir",
  "first name":"shab"
};

username.firstname = "abbas"; //CHANGED
username.lastname = "agharia";

console.log(username['first name']);
console.log(username['middlename']);
console.log(username.firstname);
console.log(username.lastname);
console.log(username);
console.log(typeof username);

let today = new Date();
console.log(today);
console.log(today.getDate());



