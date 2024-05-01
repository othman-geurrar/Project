const mongoose = require("mongoose");

const Event_Schema = new mongoose.Schema({
  EventID: { type: String, required: true, unique: true },
  EventName: { type: String, unique: true },
  Description: { type: String, },
  EventDate: { type: Date, default: new Date() },
  Organizer: { type: String, },
  Location: { type: String,  },
  RegistrationDeadline: { type: Date },
  EventType: { type: String },
  ImageURL: { type: String },
});

const Event_Model = mongoose.model("Events", Event_Schema);

module.exports = Event_Model;
