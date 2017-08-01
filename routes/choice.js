const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const passport = require("passport");

/* GET categories page */
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login')
  }
}

/* GET choose page. */

router.get('/choice', ensureAuthenticated, function(req, res, next) {
  res.render('choice', {
    styles: ['home.css']
  });
});

module.exports = router;
