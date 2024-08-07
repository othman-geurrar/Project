const Event_Model = require("../Models/event");

exports.viewAllEvents = (req, res) => {
  Event_Model.find()
    .then((events) => {
      const count = events.length;
      if (count <= 0) res.status(200).json({ message: "No Event here" });
      else res.status(200).json({ message: `There is ${count} event`, events });
    })
    .catch((err) => res.status(500).send(err));
};
exports.viewEvent = (req, res) => {
  Event_Model.findOne({ EventID: req.params.id })
    .then((event) => {
      if (event) res.status(200).json(event);
      else res.status(404).json({ message: "Event not found" });
    })
    .catch((err) => res.status(500).json(err));
};
exports.addEvent = async(req, res) => {
  // Find the count of existing admins
  const eventCount = Math.floor(Math.random() * 9000) + 1000;
    try {
      const EventID = `Event${1000 + eventCount}`;
      // Add the generated ID to the newAdmin object
      req.body.EventID = EventID;
      const event= await Event_Model.create(req.body);
    
      res.status(201).json({
        message: "The Event has created successfully",
        event,
      })
    }
    catch(err){
      res.status(401).send("Error adding Event");
    };
};
exports.updateEvent = (req, res) => {
  Event_Model.findOneAndUpdate(
    { EventID: req.params.id },
    { $set: req.body },
    { new: true }
  )
    .then((event) => {
      if (event)
        res
          .status(200)
          .json({ message: "The Event has updated successfully", event });
      else res.status(404).json({ message: "Event not found" });
    })
    .catch((err) => res.status(500).json(err));
};
exports.deleteEvent = (req, res) => {
  Event_Model.findOneAndDelete({ EventID: req.params.id })
    .then((event) => {
      if (event)
        res
          .status(200)
          .json({ message: "The Event has deleted successfully", event });
      else res.status(404).json({ message: "Event not found" });
    })
    .catch((err) => res.status(500).json(err));
};
