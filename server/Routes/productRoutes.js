const express = require("express");
const productRouter = express.Router();
const isAuthenticated = require("../Middleware/checkLogin");
const isAdminAuthenticated = require("../Middleware/adminLogin");
const {
  viewAllProduct,
  viewOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../Controllers/productController");

productRouter
  .get("/getAll", viewAllProduct)
  .get("/getOne/:id",viewOneProduct)
  .post("/newer", addProduct)
  .patch("/update/:id", updateProduct)
  .delete("/delete/:id", deleteProduct);


module.exports = productRouter;
