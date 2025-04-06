const express = require("express");
const app = express();
const userModel = require("./usermodel.js");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name: "Tauqeer Agharia",
    email: "tauqeer@gmail.com",
    username: "tauqeer_303",
  });

  res.send(createduser);
});

app.get("/update", async (req, res) => {
  //   userModel.findOneUpdate(findone, update, { new: true });

  let userupdate = await userModel.findOneAndUpdate(
    { username: "shabbir_303" },
    { name: "Shabbirabbas Agharia" },
    { new: true }
  );
  res.send(userupdate);
});

app.get("/read", async (req, res) => {
  const readUser = await userModel.find();
  res.send(readUser);
});

app.get("/delete", async (req, res) => {
  let deleteUser = await userModel.findOneAndDelete({
    username: "tauqeer_303",
  });
  res.send(deleteUser);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
