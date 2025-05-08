const express = require("express");
const router = express.Router();
const { aboutData } = require("../Data.js");

//you're gonna probably have to import the contacts here. I added the team's info to the array that you must integrate with the print on the webpage.
router.get("/about", (req, res) => {
  res.render("about", { pageName: "about", title: "About us" });
});

module.exports = router;
