const PaymentModel = require("../Models/payment");

// Controller function to handle payment creation
const createPayment = async (req, res) => {
  try {
    const paymentCount = await PaymentModel.countDocuments();

    // Generate a transaction ID based on the count
    const transactionId = `Transaction${1000 + paymentCount}`;

    const { amount, currency } = req.body;

    const payment = await PaymentModel.create({
      transactionId,
      amount,
      currency,
    });

    res.status(201).json({
      payment,
    });
  } catch (error) {
    console.error("Error creating payment:", error);
  }
};
// Controller function to retrieve all payment transactions

const getAllPayments = async (req, res) => {
  try {
    const payments = await PaymentModel.find();

    res.status(200).json({ payments });
  } catch (error) {
    console.error("Error retrieving payments:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve payments" });
  }
};
// Controller function to retrieve a specific payment transaction by ID

const getPaymentById = async (req, res) => {
  try {
    const transactionId = req.params;

    const payment = await PaymentModel.findOne(transactionId);

    if (!payment) {
      return res
        .status(404)
        .json({ success: false, message: "Payment transaction not found" });
    }

    res.status(200).json(payment);
  } catch (error) {
    console.error("Error retrieving payment by ID:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve payment transaction",
    });
  }
};
// Controller function to update a payment transaction

const updatePayment = async (req, res) => {
  try {
    const amount = req.body;

    const payment = await PaymentModel.findOneAndUpdate(
      { transactionId: req.params.transactionId },
      amount
    );

    if (!payment) {
      return res
        .status(404)
        .json({ success: false, message: "Payment transaction not found" });
    }

    res.status(200).json({
      message: "Payment successfuly apdated",
    });
  } catch (error) {
    console.error("Error updating payment:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update payment transaction",
    });
  }
};

// Controller function to delete a payment transaction
const deletePayment = async (req, res) => {
  try {
    const payment = await PaymentModel.findOneAndDelete({
      transactionId: req.params.transactionId,
    });

    if (!payment) {
      return res
        .status(404)
        .json({ success: false, message: "Payment transaction not found" });
    }

    res.status(200).json({
      message: "Payment transaction deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting payment:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete payment transaction",
    });
  }
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};
