require("dotenv").config();
const express = require("express");
const session = require("express-session");
const LifeStyleRouter = require("./Routes/LifeStyleRoute");
const { ConnectDB } = require("./Config/database");
const EventRouter = require("./Routes/eventRoute");
const PORT = process.env.PORT;
const app = express();
ConnectDB();
app.use(express.json());
app.use("/admin", LifeStyleRouter);
app.use("/admin", EventRouter);
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.listen(PORT, () => {
  console.log("app listening on port 3000!");
});
