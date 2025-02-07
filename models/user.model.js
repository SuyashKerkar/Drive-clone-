const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [3, "Username must be at least 3 characters long"],
  },

  email: {
    type: String,
    required: true,
    trim: true,
    minlength: [13, "Email msut be atleast 13 characters long"],
  },

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "Password must be atleast 3 characters long"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
