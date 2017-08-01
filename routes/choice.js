const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

/* GET choose page. */

router.get('/choice', ensureLoggedIn("/login"), function(req, res, next) {
  res.render('choice', {
    styles: ['home.css']
  });
});

module.exports = router;
