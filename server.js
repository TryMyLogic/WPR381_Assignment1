// npm run devStart
const express = require("express");
const app = express();
const port = 8000;
const host = 'localhost';

// Public folder stores static content. 
// The below middleware makes the files in the public directory accessible from the root /
app.use(express.static("public"));

// Parse data via url. 
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const homeRoutes = require("./routes/homeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const eventsRoutes = require("./routes/eventsRoutes");
const contactRoutes = require("./routes/contactRoutes");
const thank_youRoutes = require("./routes/thank_youRoutes");
const utilityRoutes = require("./routes/utilityRoutes");

app.use("/", homeRoutes);
app.use("/", aboutRoutes);
app.use("/", eventsRoutes);
app.use("/", contactRoutes);
app.use("/", thank_youRoutes);
app.use("/", utilityRoutes);

app.listen(port, () =>  console.log(`Server running at http://${host}:${port}`));
