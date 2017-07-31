const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/topalove")

const User = require('../models/user');

/* GET login page. */
router.get('/login', (req, res, next) => {
  res.render('login');
});

/* GET signup page */
router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', (req, res, next) => {
  const nameInput = req.body.name;
  const emailInput = req.body.email;
  const passwordInput = req.body.password;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashedPassword = bcrypt.hashSync(passwordInput, salt);


  const userSubmission = {
    name: nameInput,
    email: emailInput,
    password: hashedPassword
  };

  const theUser = new User(userSubmission);
  theUser.save((err) => {
    if (err) {
    console.log(err);
  } else {
    console.log('meow');
    res.redirect('/');
  }

  });
});

module.exports = router;
