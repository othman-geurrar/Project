const Product = require("../Models/product");
const express = require("express");
const app = express();
app.use(express.json());

const ProductsLifeStyle = async (req, res) => {
  try {
    const { LifeStyleName } = req.params;
    const products = await Product.find({ LifeStyleName: LifeStyleName });
    res.status(201).json(products);
  } catch (err) {
    res.status(404).json(err);
  }
};

const viewAllProduct = (req, res) => {
  const page = parseInt(req.query.p || 1);
  const search = req.query.search || '';
  const limite = parseInt(req.query.min || 1000);
  // const maxPrice = req.query.maxprice ;
  const minPrice = parseInt(req.query.minprice || 50); 
  const maxPrice = parseInt(req.query.maxprice || 999999); 

  const options = {
    page: page,
    limit: limite,
  };

  const searchQuery = {};

  if (search) {
    searchQuery.$or = [
      { name: { $regex: new RegExp(search, 'i') } },
      { category: { $regex: new RegExp(search, 'i') } },
      { color: { $regex: new RegExp(search, 'i') } },
    ];
  }

  searchQuery.newPrice = { $gte: minPrice, $lte: maxPrice };

  Product.paginate(searchQuery, options)
    .then((data) => {
      console.log('Paginated Data:', data);
      res.status(201).send(data);
    })
    .catch((err) => {
      console.error('Error:', err);
      res.status(401).send(err);
    });
};


const viewOneProduct = (req, res) => {
  Product.findOne({ id: req.params.id })
    .then((data) => res.status(201).send(data))
    .catch((err) => res.status(401).send(err));
};

const addProduct = async (req, res) => {
  const productData = req.body;
  try {
    const productCount = Math.floor(Math.random() * 9000) + 1000;
    const productID = `${1000 + productCount}`;
    productData.id = productID;
    const product = await Product.create(productData);
    res.status(201).send(product);
  } catch (err) {
    res.status(401).send({ message: "Error adding product" });
  }
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  const assignProduct = req.body;
  Product.findOneAndUpdate({ id }, assignProduct, { new: true })
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
    const removeProduct = await Product.findOneAndDelete({
      id: req.params.id,
    });
    if (!removeProduct) {
      return res.status(404).json({ message: "NO PRODUCT FOUND" });
    }
    return res
      .status(200)
      .json({ message: "PRODUCT DELETED SUCCESSFULLY", removeProduct });
  } catch (error) {
    return res.status(500).json({ message: "SERVER ERROR" });
  }
};

module.exports = {
  viewAllProduct,
  viewOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  ProductsLifeStyle
};
