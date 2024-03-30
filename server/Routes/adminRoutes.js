const adminRouter = require("express").Router();
const { registerAdmin , loginAdmin } = require("../Controllers/adminController");


adminRouter
.post("/register", registerAdmin)
.post("/login" , loginAdmin);

module.exports = adminRouter;