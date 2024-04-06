const userRouter = require("express").Router();
const userAuth = require('../Middleware/authMiddleware')
const islogging = require('../Middleware/checkLogin')


const {
  
  register,
  registerUserValidationRules,
  loginUserValidationRules,
  getUsers,
  updateUserByid,
  updateAdminValidationRules,
  deleteUser,
} = require("../Controllers/userController");

userRouter.post("/register", registerUserValidationRules, register);
userRouter.post("/login", loginUserValidationRules, userAuth);
userRouter.get("/getUsers", getUsers);
userRouter.patch("/update/:id",updateAdminValidationRules,islogging,updateUserByid);
userRouter.delete("/delete/:id", deleteUser);

module.exports = userRouter;




