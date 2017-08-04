const express = require("express");
const router = express.Router();
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;
const mongoose = require("mongoose");
const Movie = require("../models/movies");
const Grade = require("../models/grades");

// const decade = 80 || 90 || 2000;

// let currentUserID = req.user._id;
// let itemList = db.grades
//   .find({ userID: ObjectId(currentUserID) })
//   .sort({ score: -1 });

/* GET toplist page. */

router.get("/toplist", ensureLoggedIn(), function(req, res, next) {
  let currentUserID = req.user._id;
  let itemList = Grade.find({ userID: currentUserID })
    .populate("movieID")
    .sort({
      score: -1
    })
    .exec((err, grades) => {
      console.log("EXEC grades", grades);
      res.render("toplist", {
        styles: ["toplist.css"],
        grades
      });
    });
});

/* GET watchlist page. */

router.get("/watchlist", function(req, res, next) {
  res.render("watchlist", {
    styles: ["watchlist.css"]
  });
});

module.exports = router;
