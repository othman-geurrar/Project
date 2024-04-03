const adminRouter = require("express").Router();
const {
  registerAdmin,
  registerAdminValidationRules,
  loginAdmin,
  loginAdminValidationRules,
  getAllAdmins,
  updateAdminValidationRules,
  updateAdminByEmail,
  deleteAdmin
} = require("../Controllers/adminController");

adminRouter
  .post("/register", registerAdminValidationRules, registerAdmin)
  .post("/login", loginAdminValidationRules, loginAdmin)
  .get("/getAdmins", getAllAdmins)
  .patch("/update/:id", updateAdminValidationRules, updateAdminByEmail)
  .delete("/delete/:id", deleteAdmin);

module.exports = adminRouter;
