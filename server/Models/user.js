const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  GoogleId: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  Address: { type: String },
  PhoneNumber: { type: String },
  ZipCode: { type: Number },
  City: { type: String },
  profilePictureURL: {
    type: String,
    default:
      "https://static.vecteezy.com/ti/vecteur-libre/t2/4607791-homme-visage-emotif-icone-souriant-caractere-masculin-en-bleu-chemise-plat-vector-illustration-isole-sur-blanc-heureux-humain-psychologique-portrait-positif-emotions-utilisateur-avatar-pour-app-web-design-vectoriel.jpg",
  },
  dateOfBirth: { type: String },
  UserName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  role: { type: String, required: true, default: "User" },
  FullName: { type: String },
  zipcode: { type: String },
  city: { type: String },
  Street: { type: String },
  orders: [{ type: Number }],
  createdAt: { type: Date, default: Date.now },
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
