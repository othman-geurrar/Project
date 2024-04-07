const paymentRouter = require("express").Router();

const {
  Addpayment,
  getAllPayments,
  getPaymentById,
  deletePayment,
} = require('../Controllers/paymentController');

paymentRouter.post("/addPayment",Addpayment)
// Route to retrieve all payment transactions
paymentRouter.get("/getAll", getAllPayments);

// Route to retrieve a specific payment transaction by ID
paymentRouter.get("/getPayment/:transactionId", getPaymentById);

// Route to delete a payment transaction
paymentRouter.delete("/delete/:transactionId", deletePayment);


module.exports = paymentRouter;