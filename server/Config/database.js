
const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGO_KEY;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};

module.exports = connectDB;
