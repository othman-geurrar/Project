require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const productRouter = require("./Routes/productRoutes");
const connectDB = require("./Config/database");
const adminRouter = require("./Routes/adminRoutes");
const orderRouter = require("./Routes/orderRoutes");
const LifeStyleRouter = require("./Routes/lifeStyleRoutes");
const EventRouter = require("./Routes/eventRoutes");
const userRouter = require("./Routes/userRoutes");
const paymentRouter = require("./Routes/payementRoutes");
const passport = require("passport");
const cartRouter = require("./Routes/cartRoutes");
const StripeRouter=require("./Routes/stripestripe")

const PORT = process.env.PORT || 4000;

require("./strategies/userLocal");
require("./strategies/adminLocal");
require("./strategies/google");

const app = express();

app.use(
  cors({
    origin: "https://osay.vercel.app",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

connectDB();
app.get("/", (req, res) => {
  res.send("Hello, World!");
})
app.use("/stripe",StripeRouter)
app.use("/admin", adminRouter);
app.use("/orders", orderRouter);
app.use("/product", productRouter);
app.use("/lifeStyle", LifeStyleRouter);
app.use("/events", EventRouter);
app.use("/users", userRouter);
app.use("/payments", paymentRouter);
app.use("/auth", userRouter);
app.use("/cart" , cartRouter);

app.listen(PORT, () => {
  console.log("app listening on port 3000!");
});
