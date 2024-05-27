const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  GoogleId: { type: String },
  profilePictureURL: {
    type: String,
    default:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
  },
  dateOfBirth: { type: String },
  UserName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  PhoneNumber: { type: Number },
  FullName: { type: String },
  zipcode: { type: String },
  city: { type: String },
  Street: { type: String },
  role: { type: String, required: true, default: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
