var express = require('express');
var router = express.Router();

/* GET versus page */
router.get('/', function(req, res, next) {
  res.render('versus');
});

module.exports = router;
