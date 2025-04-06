const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://shabbirabbas2004:Shabbir12345@cluster0.hjh3w.mongodb.net/authtestapp`
);

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
});

module.exports = mongoose.model("user", userSchema);
