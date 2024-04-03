const express = require("express");
const LifeStyleRouter = express.Router();
const {
  viewAllLifeStyles,
  viewLifeStyle,
  addLifeStyle,
  updateLifeStyle,
  deleteLifeStyle,
  deleteAllLifeStyle,
} = require("../Controllers/LifeStyleController");

// Define routes using appropriate HTTP methods
LifeStyleRouter.get("/lifestyles", viewAllLifeStyles)
  .get("/lifestyle/:id", viewLifeStyle)
  .post("/lifestyle", addLifeStyle)
  .put("/ls/:id", updateLifeStyle)
  .delete("/lifestyle", deleteAllLifeStyle)
  .delete("/lifestyle/:id", deleteLifeStyle);

//i need to add here post for every ls (get("ls/:id")) to make the admin if he want to update the post he must enter to the indiividual post
module.exports = LifeStyleRouter; // Export the router directly, not as an object
