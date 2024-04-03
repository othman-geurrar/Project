const userRouter = require("express").Router();

const {
  login,
  register,
  registerUserValidationRules,
  loginUserValidationRules,
  getUsers,
  updateUserByid,
  updateAdminValidationRules,
  deleteUser,
} = require("../Controllers/userController");

userRouter.post("/register", registerUserValidationRules, register);
userRouter.post("/login", loginUserValidationRules, login);
userRouter.get("/getUsers", getUsers);
userRouter.patch("/update/:id",updateAdminValidationRules, updateUserByid);
userRouter.delete("/delete/:id", deleteUser);

module.exports = userRouter;




