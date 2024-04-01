const userRouter = require("express").Router();

const {
  login,
  register,
  registerUserValidationRules,
  loginUserValidationRules,
  getUsers,
  updateUser,
  deleteUser,
  updateUserValidationRules
} = require("../Controllers/userController");

userRouter.post("/register", registerUserValidationRules, register);
userRouter.post("/login", loginUserValidationRules, login);
userRouter.get("/getUsers", getUsers);
userRouter.patch("/update/:userName",updateUserValidationRules, updateUser);
userRouter.delete("/delete/:UserName", deleteUser);

module.exports = userRouter;
