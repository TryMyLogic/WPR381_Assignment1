const express = require("express");
const router = express.Router();
let messages = [];

router.get("/contact", (req, res) => {
  res.render("contact", { pageName: "contact", title: "Contact us" });
});

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  messages.push({ name, email, message });
  res.redirect("/thank_you");
});

module.exports = router;
