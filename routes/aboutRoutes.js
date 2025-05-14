const express = require("express");
const router = express.Router();
const { aboutData } = require("../Data.js");

router.get("/about", (req, res) => {
  res.render("about", {
    pageName: "about",
    title: "About us",
    information: aboutData,
  });
});

module.exports = router;
