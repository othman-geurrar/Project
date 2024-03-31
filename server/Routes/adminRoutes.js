const adminRouter = require("express").Router();
const { registerAdmin, registerAdminValidationRules, loginAdmin, loginAdminValidationRules } = require("../Controllers/adminController");


adminRouter
.post("/register", registerAdminValidationRules ,registerAdmin)
.post("/login" , loginAdminValidationRules ,loginAdmin);

module.exports = adminRouter;