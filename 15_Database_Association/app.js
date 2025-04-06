const express = require("express");
const userModel = require("./models/user.js");
const postModel = require("./models/post.js");
const app = express();

app.get("/", (req, res) => {
  res.send("Heyy");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "shabbir",
    age: 25,
    email: "shabbir@gmail.com",
  });

  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "Hello Kaise ho",
    user: "67b3a0c68e1916e2cc1eb681",
  });

  let user = await userModel.findOne({ _id: "67b3a0c68e1916e2cc1eb681" });
  user.posts.push(post._id);
  await user.save();
  res.send({
    post,
    user,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
