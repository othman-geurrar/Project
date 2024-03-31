const adminRouter = require("express").Router();
const {
  registerAdmin,
  registerAdminValidationRules,
  loginAdmin,
  loginAdminValidationRules,
  updateAdminValidationRules,
  updateAdminByEmail,
  deleteAdmin
} = require("../Controllers/adminController");

adminRouter
  .post("/register", registerAdminValidationRules, registerAdmin)
  .post("/login", loginAdminValidationRules, loginAdmin)
  .patch("/update/:email", updateAdminValidationRules, updateAdminByEmail)
  .delete("/delete/:email", deleteAdmin);

module.exports = adminRouter;
