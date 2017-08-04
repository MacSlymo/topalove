const express = require("express");
const router = express.Router();

/* GET toplist page. */

router.get("/toplist", function(req, res, next) {
  res.render("toplist", {
    styles: ["toplist.css"]
  });
});

/* GET watchlist page. */

router.get("/watchlist", function(req, res, next) {
  res.render("watchlist", {
    styles: ["watchlist.css"]
  });
});

module.exports = router;
