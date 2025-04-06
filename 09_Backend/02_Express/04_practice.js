// Initialize a project with npm
// express install
// Setting up parsers for form
// Setting up ejs for ejs pages
// --Install ejs from npm
// --setup ejs for view engine
// Setting up public static files
// Dynamic routing -->  How to get data coming from frontend at backend route
const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // PARSERS
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Sabse pehle browser par jaao
// Url likhiye apna jo aapko chahiye and enter dabaiye
// Ab us url route ko create kariye
// Res bhejiye kuch bhi
// Ab us url ko agar dynamic banana hai to realise karo konsa part dynamic hai aur us part ke aage route mein : lagodo

app.get("/profile/:dynamic", (req, res) => {
  const request = req.params.dynamic;
  res.send(`Dynamic routing is working , ${request}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
