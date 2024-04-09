// routes/admin.js
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const Admin = require("../Models/admin");

// Validation middleware for registering admin
const registerAdminValidationRules = [
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

// Validation middleware for login
const loginAdminValidationRules = [
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

// Validation rules for updating admin details
const updateAdminValidationRules = [
  body('name').optional().trim().notEmpty().withMessage('Name is required'),
  body('newEmail').optional().isEmail().withMessage('Invalid email format'),
  body('newPassword').optional().isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  // Add more validation rules as needed
];


const registerAdmin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }

  const newAdmin = req.body;
  const adminPassword = bcrypt.hashSync(newAdmin.password, 10);
  newAdmin.password = adminPassword;

  try {

    // Find the count of existing admins
    const adminCount = Math.floor(Math.random() * 9000) + 1000;
    // Generate a unique ID for the new admin
    const adminID = `Admin${1000 + adminCount}`;
    // Add the generated ID to the newAdmin object
    newAdmin.id = adminID;

    const admin = await Admin.create(newAdmin);
    res.status(201).json({
      message: "Admin Created Successfully",
      admin,
    });
  } catch (error) {
    res.status(400).send({ message: "Admin already exists" });
  }
};


const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateAdminByEmail = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const { name, newEmail, newPassword } = req.body;
 
  try {
    let updateFields = {};
    if (name) updateFields.name = name;
    if (newEmail) updateFields.email = newEmail;
    if (newPassword) {
      const hashedPassword = bcrypt.hashSync(newPassword, 10);
      updateFields.password = hashedPassword;
    }

    const updatedAdmin = await Admin.findOneAndUpdate(
      { id },
      { $set: updateFields },
      { new: true }
    );

    if (!updatedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json({ message: "Admin details updated successfully", admin: updatedAdmin });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteAdmin = (req, res) => {
  const { id } = req.params;
  Admin.findOneAndDelete({ id })
  .then((admin) => {
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json({ message: "Admin deleted successfully", admin });

})};

module.exports = {
  registerAdmin,
  registerAdminValidationRules,
  loginAdminValidationRules,
  getAllAdmins,
  updateAdminValidationRules,
  updateAdminByEmail,
  deleteAdmin
};
