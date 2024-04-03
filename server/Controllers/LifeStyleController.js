const LifeStyle_Model = require("../Models/LifeStyle");
exports.viewAllLifeStyles = (req, res) => {
  LifeStyle_Model.find()
    .then((LifeStyle) => {
      const count = LifeStyle.length;
      if (count <= 0) res.status(200).json({ message: "No Event here" });
      else
        res.status(200).json({ message: `There is ${count} event`, LifeStyle });
    })
    .catch((err) => res.status(500).send(err));
};
exports.viewLifeStyle = (req, res) => {
  LifeStyle_Model
  .findOne({ LifeStyleID: req.params.id })
    .then((LifeStyle) => {
      if (LifeStyle) res.status(200).json(LifeStyle);
      else res.status(404).json({ message: "LifeStyle not found" });
    })
    .catch((err) => res.status(500).json(err));
};
exports.addLifeStyle = (req, res) => {
  // Find the count of existing admins
  LifeStyle_Model.countDocuments()
    .then((LifeStyleCount) => {
      const LifeStyleID = `Admin${1000 + LifeStyleCount}`;
      // Add the generated ID to the newAdmin object
      req.body.LifeStyleID = LifeStyleID;
      return LifeStyle_Model.create(req.body);
    })
    .then((LifeStyle) =>
      res.status(201).json({
        message: "The LifeStyle has created successfully",
        LifeStyle,
      })
    )
    .catch((err) => res.status(500).json(err));
};
exports.updateLifeStyle = (req, res) => {
  LifeStyle_Model.findOneAndUpdate(
    { LifeStyleID: req.params.id },
    { $set: req.body },
    { new: true }
  )
    .then((LifeStyle) => {
      if (LifeStyle)
        res.status(200).json({
          message: "The LifeStyle has updated successfully",
          LifeStyle,
        });
      else res.status(404).json({ message: "LifeStyle not found" });
    })
    .catch((err) => res.status(500).json(err));
};
exports.deleteLifeStyle = (req, res) => {
  LifeStyle_Model.findOneAndDelete({ LifeStyleID: req.params.id })
    .then((LifeStyle) => {
      if (LifeStyle)
        res.status(200).json({
          message: "The LifeStyle has deleted successfully",
          LifeStyle,
        });
      else res.status(404).json({ message: "LifeStyle not found" });
    })
    .catch((err) => res.status(500).json(err));
};
