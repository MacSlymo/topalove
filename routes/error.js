const express = require('express');
const router = express.Router();

/* GET error page. */

router.get('/error', (req, res, next) => {
  res.render('error');
});

module.exports = router;
