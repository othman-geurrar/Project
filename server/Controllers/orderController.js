const Order = require("../Models/order");

// const addOrder = async (req, res) => {
//   const newOrder = req.body;

//   try {
//     // Find the count of existing admins
//     const orderCount = Math.floor(Math.random() * 9000) + 1000;
//     // Generate a unique ID for the new admin
//     const orderID = `${1000 + orderCount}`;
//     // Add the generated ID to the newAdmin object
//     newOrder.id = orderID;

//     const order = await Order.create(newOrder);
//     res.status(201).json({
//       message: "Order added Successfully",
//       order,
//     });
//   } catch (error) {
//     res.status(400).send({ message: "Failed creating order" });
//   }
// };

const addOrder = async (req, res) => {
  const newOrder = req.body;

  try {
    // Find the count of existing admins
    const orderCount = Math.floor(Math.random() * 9000) + 1000;
    // Generate a unique ID for the new admin
    const orderID = `${1000 + orderCount}`;
    // Add the generated ID to the newAdmin object
    newOrder.id = orderID;

    const order = await Order.create(newOrder);
    res.status(201).json({
      message: "Order added Successfully",
      order,
    });
  } catch (error) {
    res.status(400).send({ message: "Failed creating order" });
  }
};

// const getOrders = (req, res) => {
//   Order.find()
//     .populate({
//       path: "user",
//       select: "UserName profilePictureURL",
//       model: "users",
//     })
//     .populate({
//       path: "products",
//       select: "name imageURL productQuantity price id ",
//       model: "Products",
//     })
//     .then((orders) => {
//       res.status(200).json(orders);
//     })
//     .catch((e) => {
//       res
//         .status(400)
//         .send({ message: "Failed getting orders", details: e.messages });
//     });
// };

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const getOrderUserId = (req, res) => {
  const userId = req.params.id; // Assuming you pass the order ID in the URL
  Order.find({ userId })
    .then((order) => {
      res.status(200).json({order});
    })
    .catch((e) => {
      res.status(400).send({ message: "Failed getting order" });
    });
};

const getOrderById = (req, res) => {
  const orderId = req.params.id; // Assuming you pass the order ID in the URL
  Order.findOne({ id: orderId })
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((e) => {
      res.status(400).send({ message: "Failed getting order" });
    });
};

const updateOrder = async (req, res) => {
  const orderId = req.params.id; // Assuming you pass the order ID in the URL
  const updatedOrder = req.body;

  try {
    const order = await Order.findOneAndUpdate(
      { id: orderId },
      { $set: updatedOrder },
      { new: true }
    );

    if (!order) {
      return res.status(404).send({ message: "Order not found" });
    }

    res.status(200).json({
      message: "Order updated successfully",
      order,
    });
  } catch (error) {
    res.status(400).send({ message: "Failed updating order" });
  }
};

const deleteOrder = async (req, res) => {
  const orderId = req.params.id; // Assuming you pass the order ID in the URL
  try {
    const order = await Order.findOneAndDelete({ id: orderId });
    if (!order) {
      return res.status(404).send({ message: "Order not found" });
    }
    res.status(200).json({
      message: "Order deleted successfully",
      order,
    });
  } catch (error) {
    res.status(400).send({ message: "Failed deleting order" });
  }
};

module.exports = {
  addOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  getOrderUserId
};