const { name } = require("ejs");
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://shabbirabbas2004:Shabbir12345@cluster0.hjh3w.mongodb.net/Testapp`
);

const userSchema = mongoose.Schema({
  image: String,
  email: String,
  name: String,
});

module.exports = mongoose.model("user", userSchema);
