const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
  },
  color: {
    type: String,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  LifeStyle:{
    type: String,
    required: true,
  },
  Review:[
    {
      comment: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      user: {
        type: String,
        required: true,
      },
      productinfo:{
        size: String,
        color: String,
        name: String,
      },
      image: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

Product = mongoose.model("Products", productSchema);

module.exports = Product;
