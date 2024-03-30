const bcrypt = require("bcrypt");
const Admin = require("../Models/adminSchema");

const registerAdmin = (req, res) => {
  newAdmin = req.body;
  const adminPassword = bcrypt.hashSync(newAdmin.password, 10);
  newAdmin.password = adminPassword;
  Admin.create(newAdmin)
    .then((admin) => {
      if (admin) {
        res.status(201).json({
          message: "Admin Created Successfully",
          admin,
        });
      }
    })
    .catch((e) => {
      res.status(400).send({ message: "Admin already exists" });
    });
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  Admin.findOne({ email }).then((admin) => {
    if (admin) {
      const validPassword = bcrypt.compareSync(password, admin.password);
      if (validPassword) {
        res.status(200).send({message : `Welcome ${admin.name}`});
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    } else {
      res.status(400).json({ message: "Invalid email" });
    }
  });
};

module.exports = { registerAdmin , loginAdmin};
