const orderRouter = require("express").Router();
const isUserAuthenticated = require("../Middleware/userLogin");
const isAdminAuthenticated = require("../Middleware/adminLogin");
const isAuthenticated = require("../Middleware/checkLogin");

const {
  addOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../Controllers/orderController");

orderRouter
  .post("/addOrder",isAuthenticated, addOrder)
  .get("/getOrders", getOrders)
  .get("/getOrder/:id",isAuthenticated, getOrderById)
  .patch("/updateOrder/:id",isAdminAuthenticated, updateOrder)
  .delete("/deleteOrder/:id", deleteOrder);

module.exports = orderRouter;
