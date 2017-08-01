const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/topalove")
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

const User = require('../models/users');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login')
  }
}


/* GET signup page */
router.get('/signup', (req, res, next) => {
  res.render('signup', {
    styles: ['log.css']
  });
});

router.post('/signup', passport.authenticate("local-signup", {
    successRedirect: "/choice",
    failureRedirect: "/signup"
}));

/* GET login page. */
router.get('/login', (req, res, next) => {
  res.render('login', {
    styles: ['log.css']
  });
});

router.post('/login', passport.authenticate("local-login", {
  successRedirect: "/choice",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallBack: true
}));

/* Logout page. */

router.post('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
