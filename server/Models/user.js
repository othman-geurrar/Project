const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  GoogleId: { type: String },
  profilePictureURL: {
    type: String,
    default:
      "http://res.cloudinary.com/duvf9j212/image/upload/v1717599749/Cloudinary-React/zul9k8ppniqjaqziuopa.jpg",
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
