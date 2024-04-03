const express = require("express");
const paymentRouter = express.Router();
const {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
} = require('../Controllers/paymentControlle');

// Route to create a new payment transaction
paymentRouter.post("/addPayment", createPayment);

// Route to retrieve all payment transactions
paymentRouter.get("/getAll", getAllPayments);

// Route to retrieve a specific payment transaction by ID
paymentRouter.get("/getPayment/:transactionId", getPaymentById);

// Route to update a payment transaction
paymentRouter.put("/update/:transactionId", updatePayment);

// Route to delete a payment transaction
paymentRouter.delete("/delete/:transactionId", deletePayment);

module.exports = paymentRouter;
