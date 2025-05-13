const express = require("express");
const router = express.Router();

const { eventsData } = require( "../Data.js");

router.get("/", (req, res) => {
  res.render("home", { pageName: "home", title: "Home", events: eventsData });
});

module.exports = router;
