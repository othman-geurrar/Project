const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
  },
  orderDate: {
    type: String,
  },
  Product: [{
    productName: {
      type: String,
    },
    productId: {
      type: String,
    },
    productPrice: {
      type: String,
    },
    productQuantity: {
      type: String,
    },
  }],
  totalPrice: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
