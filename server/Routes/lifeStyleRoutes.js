const express = require("express");
const LifeStyleRouter = express.Router();
const {
  viewAllLifeStyles,
  viewLifeStyle,
  viewLifeStyleName,
  addLifeStyle,
  updateLifeStyle,
  deleteLifeStyle,
} = require("../Controllers/LifeStyleController");

LifeStyleRouter.get("/getAll", viewAllLifeStyles)
  .get("/getLifeStyle/:id", viewLifeStyle)
  .post("/addLifeStyle", addLifeStyle)
  .put("/update/:id", updateLifeStyle)
  .get("/getLifeStyleName/:LifeStyleName", viewLifeStyleName)
  .delete("/delete/:id", deleteLifeStyle);

module.exports = LifeStyleRouter;