const express = require("express");
const EventRouter = express.Router();
const {
  viewAllEvents,
  viewEvent,
  addEvent,
  updateEvent,
  deleteEvent,
} = require("../Controllers/eventController");

EventRouter.get("/getAll", viewAllEvents)
  .get("/getEvent/:id", viewEvent)
  .post("/addEvent", addEvent)
  .put("/update/:id", updateEvent)
  .delete("/delete/:id", deleteEvent);

module.exports = EventRouter;
