const express = require("express");
const router = express.Router();
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

/* GET versus page */

router.get("/versus", ensureLoggedIn(), (req, res, next) => {
  res.render("versus", {
    styles: ["versus.css"]
  });
});

module.exports = router;
