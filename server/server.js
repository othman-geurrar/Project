require("dotenv").config();
const passport = require("passport");
const express = require("express");
const session = require("express-session");

const productRouter = require("./Routes/productRoutes");
const connectDB = require("./Config/database");
const adminRouter = require("./Routes/adminRoutes");
const orderRouter = require("./Routes/orderRoutes");
const LifeStyleRouter = require("./Routes/lifeStyleRoutes");
const EventRouter = require("./Routes/eventRoutes");
const userRouter = require("./Routes/userRoutes");
const paymentRouter = require("./Routes/payementRoutes");
const PORT = process.env.PORT || 4000;
require("./strategies/userLocal");

const app = express();

app.use(express.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());

app.use(passport.session());

connectDB();

app.use("/admin", adminRouter);
app.use("/orders", orderRouter);
app.use("/product", productRouter);
app.use("/lifeStyle", LifeStyleRouter);
app.use("/events", EventRouter);
app.use("/users", userRouter);
app.use("/payments", paymentRouter);

app.listen(PORT, () => {
  console.log("app listening on port 3000!");
});
