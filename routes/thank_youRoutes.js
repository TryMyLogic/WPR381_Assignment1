const express = require("express");
const router = express.Router();

// The redirect is no longer used to handle the "thank you" page. As such, the getter has been removed.
// Instead, "/thank_you" url no longer exists and its contents now directly rendered via res.render() 
// in a forms post after the form is submitted.

module.exports = router;
