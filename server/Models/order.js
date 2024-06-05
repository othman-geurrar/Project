const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderProduct = new Schema({
  productId: {
    type: String,
    ref: "Product",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    min: 1,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
});

const orderSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  user: {
    userId: String,
    name: String,
    image: String,
  },

  orderStatus: {
    type: String,
    default: "pending",
    required: true,
  },
  products: [orderProduct],
  productQCommander: { type: Number },
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
