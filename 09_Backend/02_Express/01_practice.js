import express from "express";

const app = express(); //

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/shabbir", (req, res) => {
  res.send("Hello Shabbir");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
