// Jab bhi server request accept karta hai waha se route ke beech pahuchne tak agar aap us request ko beech me rokte ho and kuch perform karte ho , to ye element middleware kehlata hai

import express from "express";

const app = express(); //

app.use((req, res, next) => {
  // "NEXT" IS MIDDLEWARE
  console.log("MIDDLEWARE IS WORKING");
  next(); // ye function ko call karta hai , means that req is send to url
});

app.use((req, res, next) => {
  // "NEXT" IS MIDDLEWARE
  console.log("MIDDLEWARE 2 IS WORKING");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/shabbir", (req, res) => {
  res.send("Hello Shabbir");
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something Went Wrong");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
