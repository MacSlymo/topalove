const express = require("express");
const router = express.Router();
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;
const mongoose = require("mongoose");

/* GET versus page */

router.get("/versus", ensureLoggedIn(), (req, res, next) => {
  res.render("versus", {
    styles: ["versus.css"]
  });
});

module.exports = router;

/*
router.post("/versus", (req, res, next) => {
  let userId = req.session.currentUser._id;
  let movie1Id = req.body.movie1.id;
  let movie2Id = req.body.movie2.id;
  let winningMovieId = ;

  res.send(``);

  res.redirect("versus", {
    styles: ["versus.css"]
  });
});
*/
