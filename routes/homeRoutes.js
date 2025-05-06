const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { pageName: "home", title: "Home" });
});

module.exports = router;
