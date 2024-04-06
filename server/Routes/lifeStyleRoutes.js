const express = require("express");
const LifeStyleRouter = express.Router();
const {
  viewAllLifeStyles,
  viewLifeStyle,
  addLifeStyle,
  updateLifeStyle,
  deleteLifeStyle,
} = require("../Controllers/lifeStyleController");

LifeStyleRouter.get("/getAll", viewAllLifeStyles)
  .get("/getLifeStyle/:id", viewLifeStyle)
  .post("/addLifeStyle", addLifeStyle)
  .put("/update/:id", updateLifeStyle)
  .delete("/delete/:id", deleteLifeStyle);

module.exports = LifeStyleRouter;
