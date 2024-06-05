const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

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
  newPrice: {
    type: Number,
  },
  oldPrice: {
    type: Number,
  },
  description: [{
    type: String
  }],
  //
  imageURL: {
    type: [String],
  },
 
  //
  LifeStyleName: {
    type: String,
  },
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
  stars:{
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

productSchema.plugin(mongoosePaginate);

Product = mongoose.model("Products", productSchema);

module.exports = Product;
