const URI = process.env.MONGO_KEY;
const mongoose = require("mongoose");
exports.ConnectDB = () => {
  mongoose
    .connect(URI)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log("Error connecting to database: ", error);
    });
};
