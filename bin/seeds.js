const mongoose = require("mongoose");
const Movie = require("../models/movies");
const Grade = require("../models/grades");
const data2000 = require("./data/2000.js");

mongoose.connect("mongodb://localhost/topalove");

Movie.remove({}, function(err) {
  if (err) {
    console.log("Error Movie.collection.insert: ", err);
  } else {
    console.log("collection removed");

    Movie.collection.insert(data2000, (err, movies) => {
      if (err) {
        console.log("Error Movie.collection.insert: ", err);
      } else {
        console.log("All your movies were successfully stored.");
      }
    });
  }
});

Grade.remove({}, function(err) {
  if (err) {
    console.log("Error Movie.collection.insert: ", err);
  }
});

setTimeout(() => {
  mongoose.connection.close();
}, 2000);
