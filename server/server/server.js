require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());


app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true
  }))




  const URI = process.env.MONGO_KEY;


  mongoose
  .connect(URI)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log('Error connecting to database: ', error);
  });

  app.listen(PORT, () => {
    console.log('app listening on port 3000!');
  });