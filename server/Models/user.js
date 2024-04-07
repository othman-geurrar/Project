const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  profilePictureURL: { type: String },
  dateOfBirth: { type: String },
  UserName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String,  },
  createdAt: { type: Date, default: Date.now }
});


const Users = mongoose.model("users", userSchema);

module.exports = Users;