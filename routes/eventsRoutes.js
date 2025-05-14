const express = require("express");
const router = express.Router();
const { eventsData } = require("../Data.js");

router.get("/events", (req, res) => {
  res.render("events", {
    pageName: "events",
    title: "Upcoming Events",
    events: eventsData,
  });
});

module.exports = router;
