const userRouter = require("express").Router();
require("../strategies/google");
const passport = require("passport");
const isUserAuthenticated = require("../Middleware/userLogin");
const isAdminAuthenticated = require("../Middleware/adminLogin");
// const isAuthenticated = require("../Middleware/checkLogin");
const {userAuth}= require("../Middleware/authMiddleware");




const {
  registerUser,
  registerUserValidationRules,
  loginUserValidationRules,
  getUsers,
  updateUserByid,
  updateAdminValidationRules,
  deleteUser,
} = require("../Controllers/userController");

userRouter.post("/register",registerUserValidationRules, registerUser);
userRouter.post("/login", loginUserValidationRules, userAuth);
userRouter.get("/getUsers", isAdminAuthenticated,getUsers);
userRouter.patch("/update/:id",updateAdminValidationRules,isAdminAuthenticated,updateUserByid);
userRouter.delete("/delete/:id",isAdminAuthenticated, deleteUser);
userRouter.get("/", (req, res) => {
  res.send('<a href="/auth/google">google</a>');
});
userRouter.get("/profile", isUserAuthenticated,(req, res) => { 
  res.send(`Welcome ${req.user.UserName}`);
});

userRouter.get("/google",passport.authenticate('google',{scope:["email", "profile"]}))

userRouter.get("/google/callback", passport.authenticate('google', { 
  successRedirect: "/users/profile",
  failureRedirect: "/users/auth/failure"
}));


userRouter.get("/auth/failure", (req, res) => {
  res.send("failure");
});

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