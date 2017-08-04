const express = require("express");
const router = express.Router();
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;
const mongoose = require("mongoose");
const Movie = require("../models/movies");
const Grade = require("../models/grades");
const Elo = require("elo-js");
const elo = new Elo();
const mongooseSimpleRandom = require("mongoose-simple-random");

/* GET versus page */

function ensureDecade(req, res, next) {
  const decade = Number(req.params.decade);
  if (decade === 90 || decade === 80 || decade === 2000) {
    next();
  } else {
    res.redirect("/categories");
  }
}

router.get("/versus/:decade", ensureLoggedIn(), ensureDecade, (req, res) => {
  /*Movie.find({}, (err, movies) => {
    console.log("DEBUG movies", movies)
    if (err) { return next(err) }*/

  const decade = Number(req.params.decade);

  Movie.findRandom({ decade }, {}, { limit: 2 }, function(err, results) {
    if (err) {
      console.log("Something went wrong");
    }
    res.render("versus", {
      movie1: results[0],
      movie2: results[1],
      styles: ["versus.css"]
    });
  });
});

/* Send the data at each choice */

router.post(
  "/versus/:decade",
  ensureLoggedIn(),
  ensureDecade,
  async (req, res, next) => {
    const { movie1Id, movie2Id, winningMovie } = req.body;
    console.log("VOTING", movie1Id, movie2Id, winningMovie, req.user);

    const decade = req.params.decade;

    let userID = req.user._id;
    const movies = [movie1Id, movie2Id];
    let grades = [
      await Grade.findOne({
        userID,
        movieID: movies[0]
      }),
      await Grade.findOne({
        userID,
        movieID: movies[1]
      })
    ];
    grades = grades.map((grade, i) => {
      if (grade) return grade;
      return new Grade({
        userID,
        movieID: movies[i]
      });
    });

    const losingMovie = +!winningMovie;
    grades[winningMovie].score = elo.ifWins(
      grades[winningMovie].score,
      grades[losingMovie].score
    );
    grades[losingMovie].score = elo.ifLoses(
      grades[losingMovie].score,
      grades[winningMovie].score
    );

    grades.forEach(grade => grade.save());

    res.redirect("/versus/" + decade);
  }
);

module.exports = router;
