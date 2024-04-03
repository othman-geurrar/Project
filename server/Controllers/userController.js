const bcrypt = require("bcrypt");
const { body,validationResult } = require("express-validator");
const UserModel = require("../models/user");
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
    const { email, password, username } = req.body;
  
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Generate a unique ID for the new user
      const userCount = await UserModel.countDocuments();
      const UserID = `User${1000 + userCount}`;
  console.log(req.body)
      // Create the user
      const newUser = await UserModel.create({
        id: UserID,
        UserName : username,
        email,
        password: hashedPassword
      });
  
      console.log("User created successfully", newUser);
      res.send(`Welcome ${newUser.UserName}`);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send({ message: "User already exists" });
      } else {
        console.error("Error in user creation", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  };
  

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const User = await UserModel.findOne({ email });

    if (!User) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare hashed passwords
    const isPasswordValid = await bcrypt.compare(password, User.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Store user data in session
    req.session.User = User;
    res.json(`welcome back ${User.UserName}` );
  } catch (error) {
    console.error("Error in login", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

  
  // Function to get all users
  const getUsers = async (req, res) => {
    try {
      const Users = await UserModel.find();
      res.send(Users);
    } catch (error) {
      console.error("Error in getting users", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // Function to update a user by email
   const updateUserValidationRules = [
    body('newEmail').isEmail().withMessage('Invalid email format'),
  ];
  
  const updateUser = async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { newUserName, newEmail, newPassword } = req.body;
  
      // Construct the update operation object with only the intended fields
      const updateFields = {};
      if (newUserName) updateFields.userName = newUserName;
      if (newEmail) updateFields.email = newEmail;
      if (newPassword) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        updateFields.password = hashedPassword;
      }
  
      // Use the constructed updateFields object for the update operation
      const User = await UserModel.findOneAndUpdate(
        { UserName: req.params.UserName },
        updateFields,
        { new: true }
      );
  
      if (User) {
        res.status(200).send('User updated successfully');
      } else {
        res.status(404).json('User not found');
      }
    } catch (error) {
      console.error('Error in updating user', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  
  
  // Function to delete a user by userName
  const deleteUser = async (req, res) => {
    try {
      const deletedUser = await UserModel.findOneAndDelete({ id: req.params.id });
      if (deletedUser) {
        return res.status(200).json({ msg: "User deleted successfully" });

      }
      return res.status(404).json({ msg: "No user found with the given userName" });

    } catch (error) {
      console.error("Error in deleting user", error);
      return res.status(500).json("Internal Server Error");
    }
  };
  
  module.exports = { register, login, getUsers, updateUser, deleteUser, registerUserValidationRules, loginUserValidationRules,updateUserValidationRules };