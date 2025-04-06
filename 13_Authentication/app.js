const cookieParser = require("cookie-parser");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");  

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("shabbir", salt, function (err, hash) {
      // Salt is a random string
      // You can check by thid
      console.log(hash); // This is the changed password
      // Store hash in your password DB.
    });
  });
});

// app.get("/", (req, res) => {
//   res.cookie("name", "shabbir");
//   res.send("done");
// });

// app.get("/read", (req, res) => {
//   console.log(req.cookies);
//   res.send("read page");
//   // App browser se kisi bhi route pe jaoge to cookie chipak ke jayegi , phir chaahe aapne likha ho ya nhi
// });

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
