const express = require('express');
const router = express.Router();

/* GET categories page */
router.get('/categories', (req, res, next) => {
  res.render('categories');
});

module.exports = router;
