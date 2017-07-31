const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/topalove")
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require('../models/users');

/* GET login page. */
router.get('/login', (req, res, next) => {
  res.render('login', {
    styles: ['log.css']
  });
});

/* GET signup page */
router.get('/signup', (req, res, next) => {
  res.render('signup', {
    styles: ['log.css']
  });
});

router.post('/signup', (req, res, next) => {
  passport.authenticate("local-signup", {
    successRedirect: "/categories",
    failureRedirect: "/signup"
  });
});

/* GET login page. */
router.get('/login', (req, res, next) => {
  res.render('login');
});

router.post('/login', passport.authenticate("local-login", {
  successRedirect: "/categories",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallBack: true
}));

module.exports = router;
