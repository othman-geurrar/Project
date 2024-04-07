const userRouter = require("express").Router();
require("../strategies/google")
const passport = require("passport");
const isAuthenticated = require("../Middleware/checkLogin")
const userAuth = require("../Middleware/authMiddleware");




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
userRouter.patch("/update/:id",
  updateAdminValidationRules,
  isAuthenticated,
  updateUserByid
);
userRouter.delete("/delete/:id", deleteUser);

userRouter.get("/", (req, res) => {
  res.send('<a href="/auth/google">google</a>');
});
userRouter.get("/profile", isAuthenticated,(req, res) => {
  res.send(`Welcome ${req.user.UserName}`);
});

userRouter.get("/google",passport.authenticate('google',{scope:["email", "profile"]}))


userRouter.get("/failure",(req, res) => {
  res.send("failure")
})
// Route for logging out
userRouter.get("/logout", (req, res) => {
  req.logout((err) => {
      if (err) {
          return res.status(500).send('Error logging out');
      }
      res.send("Success logging out");
  });
});



module.exports = userRouter;
