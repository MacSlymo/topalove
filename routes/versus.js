const express = require("express");
const router = express.Router();
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;
const mongoose = require("mongoose");
const jquery = require("jquery");
const Movie = require("../models/movies");
const Grade = require("../models/grades");
const mongooseSimpleRandom = require("mongoose-simple-random");

/* GET versus page */

router.get('/versus90', ensureLoggedIn(), (req, res, next) => {
  /*Movie.find({}, (err, movies) => {
    console.log("DEBUG movies", movies)
    if (err) { return next(err) }*/

    Movie.findRandom({decade: 90}, {}, {limit: 2}, function(err, results) {
      if (!err) {
        console.log("Something went wrong")
        }
        res.render('versus90', {
          movie1: results[0],
          movie2: results[1],
          styles: ["versus.css"]
        });
    });

});

router.get('/versus00', ensureLoggedIn(), (req, res, next) => {
  /*Movie.find({}, (err, movies) => {
  console.log("DEBUG movies", movies)
  if (err) { return next(err) }*/

  Movie.findRandom({decade: 2000}, {}, {limit: 2}, function(err, results) {
    if (!err) {
      console.log("Something went wrong")
    }
    res.render('versus00', {
      movie1: results[0],
      movie2: results[1],
      styles: ["versus.css"]
    });
  });
});

/* Send the data at each choice */

router.post("/versus00", ensureLoggedIn(), (req, res, next) => {
  console.log(
    "DEBUG",
    req.body.movie1Id,
    req.body.movie2Id,
    req.session.passport.user
  );

  let userId = req.session.passport.user;
  let movie1Id = req.body.movie1Id;
  let movie2Id = req.body.movie2Id;
  let winningMovie = req.body.winningMovie;

  // TEST
  // Grade.create(
  //   {
  //     userID: userId,
  //     movieID: movie1Id,
  //     score: 420
  //   },
  //   function(err, small) {
  //     if (err) return handleError(err);
  //     // saved!
  //   }
  // );
  // Grade.create(
  //   {
  //     userID: userId,
  //     movieID: movie2Id,
  //     score: 420
  //   },
  //   function(err, small) {
  //     if (err) return handleError(err);
  //     // saved!
  //   }
  // );

  Grade.findOne(
    { userID: userId, movieID: movie1Id },
    { _id: 0, score: 1 },
    (err1, score1) => {
      Grade.findOne(
        { userID: userId, movieID: movie2Id },
        { _id: 0, score: 1 },
        (err2, score2) => {
          console.log("DEBUG grade1", score1);
          console.log("DEBUG grade2", score2);

          var score1, score2, newScore1, newScore2;
          // TODO: set the right score1 and score2
          // if ((score1 === undefined || null) && (score2 === undefined) || null){
          //   (score1 = 1000), (score2 = 1000);
          // } else if (score1 === undefined || null) {
          //   score1 = 1000;
          // } else if (score2 === undefined || null) {
          //   score2 = 1000;
          // }

          // TODO: set the right newScore1 and newScore2

          // WARNING: if it's new, create a new grade, otherwise update

          // if (winningMovie === 1) {
          //   grade1 = grade1 + 10;
          //   grade2 = grade2 - 10;
          // } else {
          //   grade1 = grade1 - 10;
          //   grade2 = grade2 + 10;
          // }
          if (winningMovie === 1) {
            Grade.findOneAndUpdate(
              { userID: userId, movieID: movie1Id },
              { $inc: { grade: 10 } },
              { returnNewDocument: true }
            );
            Grade.findOneAndUpdate(
              { userID: userId, movieID: movie2Id },
              { $inc: { grade: -10 } },
              { returnNewDocument: true }
            );
          } else {
            Grade.findOneAndUpdate(
              { userID: userId, movieID: movie1Id },
              { $inc: { grade: -10 } },
              { returnNewDocument: true }
            );
            Grade.findOneAndUpdate(
              { userID: userId, movieID: movie2Id },
              { $inc: { grade: 10 } },
              { returnNewDocument: true }
            );
          }
          Grade.findOne(
            { userID: userId, movieID: movie1Id },
            { _id: 0, grade: 1 },
            (err1, grade1updated) => {
              console.log(grade1updated);
            }
          );
          Grade.findOne(
            { userID: userId, movieID: movie2Id },
            { _id: 0, grade: 1 },
            (err1, grade2updated) => {
              console.log(grade2updated);
            }
          );
        }
      );

      console.log(userId, movie1Id, movie2Id, winningMovie);

      res.redirect("/versus00");
    }
  );
});

// if (Movie1Score === undefined && Movie2Score === undefined) {
//   Grade.create();
// } else if (Movie1Score === undefined) {
//   Grade.create();
// } else if (Movie2Score === undefined) {
//   Grade.create();
// }
//
// if (winningMovie === 1) {
//   Movie1Score = Movie1Score + 10;
//   Movie2Score = Movie2Score - 10;
// } else {
//   Movie1Score = Movie1Score - 10;
//   Movie2Score = Movie2Score + 10;
// }

// if (Movie1Score === undefined && Movie2Score === undefined) {
//   Grade.create();
// } else if (Movie1Score === undefined) {
//   Grade.create();
// } else if (Movie2Score === undefined) {
//   Grade.create();
// }

module.exports = router;
