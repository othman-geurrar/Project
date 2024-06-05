const { addItemToCart, removeItemFromCart, getCartByUserId , updateItemQuantityInCart } = require("../Controllers/cartController");

const cartRouter = require("express").Router();




cartRouter
  .post("/add" , addItemToCart)
  .delete("/remove" , removeItemFromCart)
  .get("/:userId" , getCartByUserId)
  .put("/update" , updateItemQuantityInCart).js
  



module.exports = cartRouter;