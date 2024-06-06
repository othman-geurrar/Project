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
  ProductType
} = require("../Controllers/productController");

productRouter
  .get("/getAll", viewAllProduct)
  .get("/getOne/:id", viewOneProduct)
  .get("/New" , ProductType)
  .post("/newer", addProduct)
  .patch("/update/:id", updateProduct)
  .delete("/delete/:id", deleteProduct)
  .get("/getProductsStyle/:LifeStyleName", ProductsLifeStyle);
module.exports = productRouter;