const PaymentModel = require("../Models/payment");
const { v4: uuidv4 } = require('uuid');

const Addpayment = async (req, res) => {
  try {
    const transactionId = uuidv4();

    const { amount, currency } = req.body;
    const payment = await PaymentModel.create({
      transactionId,
      amount,
      currency,
    });

    res.status(200).json({ payment });
  } catch (error) {
    console.error("Error creating payment:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create payment",
    });
  }
};

const getAllPayments = async (req, res) => {
  try {
    const payments = await PaymentModel.find();
    res.status(200).json({ payments });
  } catch (error) {
    console.error("Error retrieving payments:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve payments",
    });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const payment = await PaymentModel.findOne({ transactionId: req.params.transactionId})

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

const deletePayment = async (req, res) => {
  try {
    const payment = await PaymentModel.findOneAndDelete({transactionId} = req.params);
    if (payment) {
      return res.status(200).json({ msg: "payment deleted successfully" });

    }
    return res.status(404).json({ msg: "No payment found with the given id" });

  } catch (error) {
    console.error("Error in deleting payment", error);
    return res.status(500).json("Internal Server Error");
  }
};

 

module.exports = {
  Addpayment,
  getAllPayments,
  getPaymentById,
  deletePayment,
};