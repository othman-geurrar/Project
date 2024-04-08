const adminRouter = require("express").Router();
const isAuthenticated = require('../Middleware/checkLogin')
const {adminAuth} = require('../Middleware/authMiddleware')
const {
  registerAdmin,
  registerAdminValidationRules,
  loginAdminValidationRules,
  getAllAdmins,
  updateAdminValidationRules,
  updateAdminByEmail,
  deleteAdmin,
} = require("../Controllers/adminController");

adminRouter
  .post("/register", registerAdminValidationRules, registerAdmin)
  .post("/login", loginAdminValidationRules, adminAuth)
  .get("/getAdmins",isAuthenticated, getAllAdmins)
  .patch("/update/:id", updateAdminValidationRules, isAuthenticated, updateAdminByEmail)
  .delete("/delete/:id",isAuthenticated, deleteAdmin);

module.exports = adminRouter;
