const bcrypt = require("bcrypt");
const { body } = require("express-validator");
const userModel = require("../models/user");
require("dotenv").config();

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

const register = async (req, res) => {
  const { email, password,userName } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = await userModel.create({ userName,email, password: hashedPassword });
    console.log("User created successfully", user);
    res.json(user);
  } catch (error) {
    console.error("Error in user creation", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare hashed passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Store user data in session
    req.session.user = user;
    res.json("User connected successfully");
  } catch (error) {
    console.error("Error in login", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

  
  // Function to get all users
  const getUsers = async (req, res) => {
    try {
      const users = await userModel.find();
      res.send(users);
    } catch (error) {
      console.error("Error in getting users", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // Function to update a user by email
  const updateUser = async (req, res) => {
    try {
      const user = await userModel.findOneAndUpdate(
        { userName: req.params.userName },
        req.body,
        { new: true }
      );
      if (user) {
        res.status(200).send("User updated successfully");
      } else {
        res.status(404).json("User not found");
      }
    } catch (error) {
      console.error("Error in updating user", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // Function to delete a user by userName
  const deleteUser = async (req, res) => {
    try {
      const deletedUser = await userModel.findOneAndDelete({ id: req.params.id });
      if (deletedUser) {
        return res.status(200).json({ msg: "User deleted successfully" });

      }
      return res.status(404).json({ msg: "No user found with the given userName" });

    } catch (error) {
      console.error("Error in deleting user", error);
      return res.status(500).json("Internal Server Error");
    }
  };
  
  module.exports = { register, login, getUsers, updateUser, deleteUser, registerUserValidationRules, loginUserValidationRules };