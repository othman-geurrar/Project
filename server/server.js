require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const userRouter=require("./Routes/userRoutes")
const PORT = process.env.PORT ;

const app = express();
app.use(express.json());


app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true
  }))




  const URI = "mongodb+srv://osay:osay2024@osay.xqz5tah.mongodb.net/OSAY?retryWrites=true&w=majority&appName=OSAY"
  ;


  mongoose
  .connect(URI)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log('Error connecting to database: ', error);
  });
  app.use('/users',userRouter)


  app.listen(3000, () => {
    console.log('app listening on port 3000!');
  });