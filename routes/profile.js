var express = require('express');
var router = express.Router();

/* GET versus page */
router.get('/profile', function(req, res, next) {
  res.render('profile');
});

module.exports = router;