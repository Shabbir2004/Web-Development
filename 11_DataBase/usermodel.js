const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://shabbirabbas2004:Shabbir12345@cluster0.hjh3w.mongodb.net/PracticeDb`
);

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});

module.exports = mongoose.model("user", userSchema);
