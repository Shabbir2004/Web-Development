const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userModel = require("./models/user.js");
const postModel = require("./models/post.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const path = require("path");

const upload = require("./config/multerconfig.js");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/images/upload");
//   },
//   filename: function (req, file, cb) {
//     crypto.randomBytes(12, (err, bytes) => {
//       const fn = bytes.toString("hex") + path.extname(file.originalname);
//       cb(null, fn);
//     });
//   },
// });

// const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/profile/upload", (req, res) => {
  res.render("profileupload.ejs");
});

app.post("/upload", isLoggedIn, upload.single("image"), async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  user.profilepic = req.file.filename;
  await user.save();
  res.redirect("/profile");
});

// app.get("/test", (req, res) => {
//   res.render("test.ejs"); // DUMMY PAGE JUST FOR UNDERSTANDING
// });

app.get("/login", (req, res) => {
  res.render("login.ejs"); // Load login page
});

app.get("/profile", isLoggedIn, async (req, res) => {
  //   console.log(req.user);
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("posts");

  res.render("profile.ejs", { user }); // Load login page
});

app.get("/like/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");
  if (post.likes.indexOf(req.user.userid) === -1) {
    post.likes.push(req.user.userid);
  } else {
    post.likes.splice(post.likes.indexOf(req.user.userid), 1);
  }
  await post.save();
  res.redirect("/profile"); // Load login page
});

app.get("/edit/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOne({ _id: req.params.id }).populate("user");
  res.render("edit.ejs", { post });
});

app.post("/update/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOneAndUpdate(
    { _id: req.params.id },
    { content: req.body.content }
  );
  res.redirect("/profile");
});

app.post("/post", isLoggedIn, async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.user.email });

    if (!req.body.content || req.body.content.trim() === "") {
      return res.status(400).send("Post content cannot be empty.");
    }

    const post = await postModel.create({
      user: user._id,
      content: req.body.content,
    });
    user.posts.push(post._id);
    await user.save();

    res.redirect("/profile");
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).send("Error creating post.");
  }
});

app.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).send({ message: "User Doesn't Exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid Password" });
    }

    let token = jwt.sign({ email: email, userid: user._id }, "shhhhh");
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/profile");
    // res.status(200).send("You can login");
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.post("/register", async (req, res) => {
  try {
    let { email, password, username, name, age } = req.body;

    let existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let newUser = new userModel({
      username,
      email,
      age,
      name,
      password: hashedPassword,
    });

    await newUser.save();

    let token = jwt.sign({ email: email, userid: newUser._id }, "shhhhh");
    res.cookie("token", token, { httpOnly: true });

    res.redirect("/profile");
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

// app.post("/upload", upload.single("image") ,(req, res) => {
//   console.log(req.file);
// });

function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") {
    res.redirect("/login");
  } else {
    let data = jwt.verify(req.cookies.token, "shhhhh");
    req.user = data;
    next();
  }
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
