const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

/* GET versus page */

router.get('/versus', ensureLoggedIn("/login"), (req, res, next) => {
  res.render('versus');
});

module.exports = router;
