const express = require("express");
const router = express.Router();
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;
const mongoose = require("mongoose");
const jquery = require("jquery");
const Movie = require("../models/movies");
const mongooseSimpleRandom = require("mongoose-simple-random");

// const path = '../bin/data/2000.js';
// const imgs = ['[{cover}]'];
//
// let i = Math.floor(Math.random()*imgs.length);
// $('covers').append("<img src='"+path+imgs[i]+"'>");

/* GET versus page */

router.get("/versus", (req, res, next) => {
  /*Movie.find({}, (err, movies) => {
    console.log("DEBUG movies", movies)
    if (err) { return next(err) }*/

  Movie.findRandom({}, {}, { limit: 2 }, function(err, results) {
    if (!err) {
      console.log("Something went wrong");
    }
    res.render("versus", {
      movie1: results[0],
      movie2: results[1]
    });
  });
});

router.get("/versus", ensureLoggedIn(), (req, res, next) => {
  res.render("versus", {
    styles: ["versus.css"]
  });
});

router.post("/versus", (req, res, next) => {
  let userId = req.session.currentUser._id;
  /*let movie1Id = req.body.;
  let movie2Id = ;
  let winningMovieId = ;*/

  res.send(``);

  res.redirect("versus", {
    styles: ["versus.css"]
  });
});

module.exports = router;
