const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  firstName : {
    type: String,
    
  },
  lastName : { 
    type: String,
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "Admin",
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  adminImage: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/560/560199.png",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
