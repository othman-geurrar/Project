const userRouter = require("express").Router();
// const googleAuth = require('../Middleware/authGoogle');
require("../Strategy/google")
const passport = require("passport");
const isAuthenticated = require("../Middleware/authGoogle")


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
      // Redirect the user to the home page or any other desired destination after logging out
      res.redirect('/users');
  });
});



module.exports = userRouter;




