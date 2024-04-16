const express = require("express");
const isAdminAuthenticated = require("../Middleware/adminLogin");
const isAuthenticated = require("../Middleware/checkLogin");

const LifeStyleRouter = express.Router();
const {
  viewAllLifeStyles,
  viewLifeStyle,
  addLifeStyle,
  updateLifeStyle,
  deleteLifeStyle,
} = require("../Controllers/lifeStyleController");

LifeStyleRouter.get("/getAll",isAuthenticated, viewAllLifeStyles)
  .get("/getLifeStyle/:id", isAuthenticated,viewLifeStyle)
  .post("/addLifeStyle",isAdminAuthenticated, addLifeStyle)
  .put("/update/:id", isAdminAuthenticated,updateLifeStyle)
  .delete("/delete/:id", isAdminAuthenticated,deleteLifeStyle);

module.exports = LifeStyleRouter;
