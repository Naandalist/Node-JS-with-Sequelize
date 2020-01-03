require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

//Database
const db = require("./config/database");

// Test DB
db.authenticate()
  .then(() => {
    console.log("database connect...");
  })
  .catch(err => {
    console.log("ERROR...", err);
  });

const app = express();

app.get("/", (req, res) => {
  res.send("INDEX");
});

//Gig routes
app.use("/gigs", require("./routes/gig"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
