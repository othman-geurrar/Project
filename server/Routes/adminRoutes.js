const adminRouter = require("express").Router();
const isAdminAuthenticated = require('../Middleware/adminLogin')
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
  .get("/getAdmins", getAllAdmins)
  .patch("/update/:id", updateAdminValidationRules, isAdminAuthenticated, updateAdminByEmail)
  .delete("/delete/:id",isAdminAuthenticated, deleteAdmin);

module.exports = adminRouter;
