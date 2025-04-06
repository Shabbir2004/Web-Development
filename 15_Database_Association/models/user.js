const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://shabbirabbas2004:Shabbir12345@cluster0.hjh3w.mongodb.net/testingthedatabase`
);

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post", // It will come from post.js
    },
  ], // Array of Id's
});

module.exports = mongoose.model("user", userSchema);
