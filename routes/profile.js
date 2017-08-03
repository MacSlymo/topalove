const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

/* GET profile page */

router.get('/profile', ensureLoggedIn("/login"), (req, res, next) => {
  res.render('profile');
});

module.exports = router;
