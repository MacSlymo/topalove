var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // req.app.locals.bodyClass = "index2";
  // res.render('index', {
  //   bodyClass: 'index'
  // });
  res.render('index', {
    styles: ['home.css']
  });
});

module.exports = router;
