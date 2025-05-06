const express = require("express");
const router = express.Router();

router.get("/thank_you", (req, res) => {
  res.render("thank_you", { pageName: "thank_you", title: "Thank You" });
});

module.exports = router;
