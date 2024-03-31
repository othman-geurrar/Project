const productModel = require("../Models/product");
const express = require("express");
const app = express();
app.use(express.json());

const getProduct = (req, res) => {
  productModel
    .find()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
};

const addProduct = (req, res) => {
  const productData = req.body;
  productModel
    .create(productData)
    .then((data) => {
      console.log("product created successfully", data);
    })
    .catch((err) => {
      console.log("error creating product", err);
    });
  res.status(200).send(productData);
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const assignProduct = req.body;
  productModel
    .findOneAndUpdate({ id }, assignProduct, { new: true })
    .then((product) => {
      if (product) {
        res.status(200).send(product);
      } else {
        throw new Error("Couldn't find post");
      }
    })
    .catch((error) => {
      res.status(404).json(error.message);
    });
};

const deleteProduct = async (req, res) => {
  try {
    const removeProduct = await productModel.findOneAndDelete({
      id: req.params.id,
    });
    if (!removeProduct) {
      return res.status(404).json({ message: "NO PRODUCT FOUND" });
    }

    console.log("Removing product", removeProduct);
    return res
      .status(200)
      .json({ message: "PRODUCT DELETED SUCCESSFULLY", removeProduct });
  } catch (error) {
    console.error("Error found", error);
    return res.status(500).json({ message: "SERVER ERROR" });
  }
};

module.exports = { getProduct, addProduct, updateProduct, deleteProduct };
