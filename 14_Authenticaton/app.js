// create user account
//  - mongoose
//  - schema
//  - model
//  usercreate -> password -> hash
//  jwt token -> cookie
// Login -> token -> decrypt -> email

const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("./models/user.js");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/create", (req, res) => {
  let { username, email, password, age } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createdUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });

      let token = jwt.sign({ email }, "shhhhhhh");
      res.cookie("token", token);
      res.send(createdUser);
    });
  });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (!user) return res.send("User not found");
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: user.email }, "shhhhhhh");
      res.cookie("token", token);
      res.send("Yes you can login");
    } else {
      res.send("Invalid password");
    }
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", ""); // Token will be deleted
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
