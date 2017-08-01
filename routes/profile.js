const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const passport = require("passport");

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login')
  }
}

/* GET profile page */

router.get('/profile', ensureAuthenticated, (req, res, next) => {
  res.render('profile');
});

module.exports = router;
