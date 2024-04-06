const orderRouter = require("express").Router();

const {
  addOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} = require("../Controllers/orderController");

orderRouter
  .post("/addOrder", addOrder)
  .get("/getOrders", getOrders)
  .patch("/updateOrder/:id", updateOrder)
  .delete("/deleteOrder/:id", deleteOrder);

module.exports = orderRouter;
