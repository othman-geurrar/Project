const mongoose = require("mongoose");

const Event_Schema = new mongoose.Schema({
  EventID: { type: String, required: true, unique: true },
  EventName: { type: String, required: true, unique: true },
  Description: { type: String, required: true },
  EventDate: { type: Date, required: true , default: new Date},
  Organizer: { type: String, required: true },
  Location: { type: String, required: true },
  RegistrationDeadline: { type: Date },
  EventType: { type: String},
  ImageURL: { type: String },
});

const Event_Model = mongoose.model("Events", Event_Schema);

module.exports = Event_Model;
