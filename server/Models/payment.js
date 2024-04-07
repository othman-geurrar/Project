const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  transactionId: {
    type: String,
    unique: true,
  },
  amount: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
    default: "MAD",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PaymentModel = mongoose.model("payment", paymentSchema);

module.exports = PaymentModel;
