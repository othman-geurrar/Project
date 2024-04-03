const express = require("express");
const EventRouter = express.Router();
const {
  viewAllEvents,
  viewEvent,
  addEvent,
  updateEvent,
  deleteEvent,
  deleteAllEvents,
} = require("../Controllers/eventController");

EventRouter
  .get("/events", viewAllEvents)
  .get("/events/:id", viewEvent)
  .post("/events", addEvent)
  .put("/events/:id", updateEvent)
  .delete("/events/:id", deleteEvent)
  .delete("/events", deleteAllEvents);

module.exports = EventRouter;
