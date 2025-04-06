// COOKIE PARSER
// Hum log kuch bhi data frontend par browser par rkh skte hai and jab aap kuch bhi request backend par karoge wo frontend par saved data automatically backend par chala jaayeha
//Used for not logging again and again

// Jab bhi server request accept karta hai waha se route ke beech pahuchne tak agar aap us request ko beech me rokte ho and kuch perform karte ho , to ye element middleware kehlata hai

import express from "express";

const app = express(); //

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Tumne to bheja tha plain text , par server ko mila "blob" which is not directly readable , ab is chiz ko handle krna padega ki hum is blob ko waapas se readable kr sake

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
