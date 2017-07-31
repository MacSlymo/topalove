const express = require('express');
const router = express.Router();

/* GET categories page */

router.get('/categories', function(req, res, next) {
  res.render('categories', {
    styles: ['categories.css']
  });
});

module.exports = router;
