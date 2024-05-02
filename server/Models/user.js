const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String , unique: true},
  GoogleId: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  profilePictureURL: {
    type: String,
    default:
      "https://st4.depositphotos.com/2208684/20873/i/450/depositphotos_208734482-stock-photo-portrait-middle-aged-businessman-wearing.jpg",
  },
  dateOfBirth: { type: String },
  UserName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, required: true, default: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
