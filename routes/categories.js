const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

/* GET categories page */

router.get('/categories', ensureLoggedIn("/login"), (req, res, next) => {
  res.render('categories', {
    styles: ['categories.css']
  });
});

module.exports = router;
