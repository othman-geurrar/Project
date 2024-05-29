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
  ProductsLifeStyle,
} = require("../Controllers/productController");

productRouter
  .get("/getAll", viewAllProduct)
  .get("/getOne/:id", viewOneProduct)
  .post("/newer", addProduct)
  .patch("/update/:id", updateProduct)
  .delete("/delete/:id", deleteProduct)
  .get("/getProductsStyle/:LifeStyleName", ProductsLifeStyle);
module.exports = productRouter;