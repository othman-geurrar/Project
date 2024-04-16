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
  .get("/getAll",isAuthenticated, viewAllProduct)
  .get("/getOne/:id", isAuthenticated,viewOneProduct)
  .post("/newer",isAdminAuthenticated, addProduct)
  .patch("/update/:id",isAdminAuthenticated, updateProduct)
  .delete("/delete/:id", isAdminAuthenticated,deleteProduct);


module.exports = productRouter;
