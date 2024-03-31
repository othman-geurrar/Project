// routes/admin.js
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const Admin = require("../Models/adminSchema");

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

const registerAdmin = async (req, res) => {
  const errors = validationResult(req);
if (!errors.isEmpty()) {
  const errorMessages = errors.array().map(error => error.msg);
  return res.status(400).json({ errors: errorMessages });
}


  const newAdmin = req.body;
  const adminPassword = bcrypt.hashSync(newAdmin.password, 10);
  newAdmin.password = adminPassword;

  try {
    const admin = await Admin.create(newAdmin);
    res.status(201).json({
      message: "Admin Created Successfully",
      admin,
    });
  } catch (error) {
    res.status(400).send({ message: "Admin already exists" });
  }
};

const loginAdmin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  

  const { email, password } = req.body;

  Admin.findOne({ email }).then((admin) => {
    if (admin) {
      const validPassword = bcrypt.compareSync(password, admin.password);
      if (validPassword) {
        res.status(200).send({ message: `Welcome ${admin.name}` });
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    } else {
      res.status(400).json({ message: "Invalid email" });
    }
  });
};

module.exports = {
  registerAdmin,
  registerAdminValidationRules,
  loginAdmin,
  loginAdminValidationRules,
};
