require("dotenv").config();
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const Users = require("../Models/user");

const registerUserValidationRules = [
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 10 })
    .withMessage("Password must be at least 8 characters long"),
];

const loginUserValidationRules = [
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 10 })
    .withMessage("Password must be at least 8 characters long"),
];
const updateAdminValidationRules = [
  body("name").optional().trim().notEmpty().withMessage("Name is required"),
  body("newEmail").optional().isEmail().withMessage("Invalid email format"),
  body("newPassword")
    .optional()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a unique ID for the new user
    const userCount = await Users.countDocuments();
    const UserID = `User${1000 + userCount}`;

    // Create the user
    const newUser = await Users.create({
      id: UserID,
      UserName: username,
      email,
      password: hashedPassword,
    });
    res.status(200).json({ message: "User created successfully", newUser });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send({ message: "User already exists" });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
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
  const { newUserName, newEmail, newPassword } = req.body;

  try {
    let updateFields = {};
    if (newUserName) updateFields.UserName = newUserName;
    if (newEmail) updateFields.email = newEmail;
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

    res
      .status(200)
      .json({
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
  register,
  getUsers,
  updateUserByid,
  deleteUser,
  registerUserValidationRules,
  loginUserValidationRules,
  updateAdminValidationRules,
};
