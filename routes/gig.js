const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

//Get gig list
router.get("/", (req, res) =>
  Gig.findAll()
    .then(gigs => {
      console.log("GIGS...", gigs);
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
    })
);

//Add a gig
router.post("/add", (req, res) => {
  const data = {
    title: "Looking for a react Native Developer",
    technologies: "react, javascript, html, css",
    budget: "Rp7000000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  };
});

module.exports = router;
