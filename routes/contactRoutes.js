const express = require("express");
const router = express.Router();
let messages = [];

router.get("/contact", (req, res) => {
  res.render("contact", { pageName: "contact", title: "Contact us" });
});

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  messages.push({ name, email, message });
  
 res.render("thank_you", {
    pageName: "thank_you",
    title: "Thank You!",
    name: name,
    email: email,
    message: message,
  });
});

module.exports = router;
