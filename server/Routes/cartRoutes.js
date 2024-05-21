const { addItemToCart, removeItemFromCart, getCartByUserId } = require("../Controllers/cartController");

const cartRouter = require("express").Router();




cartRouter
  .post("/add" , addItemToCart)
  .post("/remove" , removeItemFromCart)
  .get("/:useId" , getCartByUserId)



module.exports = cartRouter;