const express = require('express');
const router = express.Router();

/* GET versus page */
router.get('/versus', (req, res, next) => {
  res.render('versus');
});

module.exports = router;
