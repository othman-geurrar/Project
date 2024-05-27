require("dotenv").config();
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const Users = require("../Models/user");

const registerUserValidationRules = [
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

const loginUserValidationRules = [
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 10 })
    .withMessage("Password must be at least 8 characters long"),
];
const updateAdminValidationRules = [
  body("name").optional().trim().notEmpty().withMessage("Name is required"),
  body("email").optional().isEmail().withMessage("Invalid email format"),
  body("newPassword")
    .optional()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

const GetOneUser = (req, res) => {
  const userid = req.params.id;
  Users.findOne({ id: userid })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(404).send("not found");
    });
};
const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  const newUser = req.body;
  console.log(newUser);
  const userPassword = bcrypt.hashSync(newUser.password, 10);
  newUser.password = userPassword;
  console.log(userPassword);

  try {
    const userCount = Math.floor(Math.random() * 9000) + 1000;
    // Generate a unique ID for the new admin
    const userId = `User${1000 + userCount}`;
    // Add the generated ID to the newAdmin object
    newUser.id = userId;
    console.log(newUser);

    const user = await Users.create(newUser);
    res.status(201).json({
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    console.error("Error creating user:", error); // Log the error for debugging
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(400).json({ message: "User already exists" });
    }
    // Other errors
    res.status(500).send({ message: "Internal server error" });
  }
};

// Function to get all Users
const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.send(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateUserByid = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const {
    UserName,
    email,
    newPassword,
    FullName,
    PhoneNumber,
    city,
    zipcode,
    Street,
  } = req.body;

  try {
    let updateFields = {};
    if (UserName) updateFields.UserName = UserName;
    if (email) updateFields.email = email;
    if (FullName) updateFields.FullName = FullName;
    if (city) updateFields.city = city;
    if (zipcode) updateFields.zipcode = zipcode;
    if (PhoneNumber) updateFields.PhoneNumber = PhoneNumber;
    if (Street) updateFields.Street = Street;
    if (newPassword) {
      const hashedPassword = bcrypt.hashSync(newPassword, 10);
      updateFields.password = hashedPassword;
    }
    const updatedUser = await Users.findOneAndUpdate(
      { id },
      { $set: updateFields },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User details updated successfully",
      User: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to delete a user by userName
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await Users.findOneAndDelete({ id });
    if (deletedUser) {
      return res.status(200).json({ msg: "User deleted successfully" });
    }
    return res
      .status(404)
      .json({ msg: "No user found with the given userName" });
  } catch (error) {
    console.error("Error in deleting user", error);
    return res.status(500).json("Internal Server Error");
  }
};

module.exports = {
  registerUser,
  GetOneUser,
  getUsers,
  updateUserByid,
  deleteUser,
  registerUserValidationRules,
  loginUserValidationRules,
  updateAdminValidationRules,
};
