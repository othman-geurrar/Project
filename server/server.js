require("dotenv").config();
const express = require("express");
const session = require("express-session");
const productRouter = require("./Routes/productRoutes");
const connectDB = require("./Config/database");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

connectDB();
app.listen(PORT, () => {
  console.log("app listening on port 3000!");
});

app.use("/product", productRouter);
