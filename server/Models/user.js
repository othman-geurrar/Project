const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  firstName:{type: String},
  LastName:{type:String,require},
  ProfilePictureURL:{type:String},
  DateOfBirth:{type:String},
  UserName: { type: String, require: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
