const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
  orderStatus: {
    type: String,
    default: "pending",
    required: true,
  },
  carts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  size: [
    {
      type: String,
      required: true,
    },
  ],
  color: [
    {
      type: String,
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;