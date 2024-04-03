const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    transactionId: {
        type: String,
        unique: true
      },
      amount: {
        type: String,
        required: true
      },
      currency: {
        type: String,
        required: true,
        default:"MAD"
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    });



const PaymentModel = mongoose.model("payment", userSchema);

module.exports = PaymentModel;