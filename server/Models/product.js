const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  //
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  //
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  //
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  //
  imageURL: {
    type: String,
  },
  //
  productQuantity: {
    type: Number,
    required: true,
  },
  color: [{ type: String }],
  inStock: {
    type: Boolean,
    required: true,
  },
  size: [{ label: { type: String }, value: { type: String } }],
  LifeStyle: {
    type: String,
  },
  Review: [
    {
      comment: {
        type: String,
      },
      rating: {
        type: Number,
      },
      user: {
        type: String,
      },
      productinfo: {
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
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

Product = mongoose.model("Products", productSchema);

module.exports = Product;
