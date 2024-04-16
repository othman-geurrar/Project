const express = require("express");

const isAdminAuthenticated = require("../Middleware/adminLogin");
const isAuthenticated = require("../Middleware/checkLogin");

const EventRouter = express.Router();
const {
  viewAllEvents,
  viewEvent,
  addEvent,
  updateEvent,
  deleteEvent,
} = require("../Controllers/eventController");

EventRouter.get("/getAll",isAuthenticated, viewAllEvents)
  .get("/getEvent/:id", isAuthenticated,viewEvent)
  .post("/addEvent",isAdminAuthenticated, addEvent)
  .put("/update/:id",isAdminAuthenticated, updateEvent)
  .delete("/delete/:id", isAdminAuthenticated,deleteEvent);

module.exports = EventRouter;