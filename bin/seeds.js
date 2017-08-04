const mongoose = require("mongoose");
const Movie = require("../models/movies");
const MovieList = require("./data/movieList.js");
const Grade = require("../models/grades");

mongoose.connect("mongodb://localhost/topalove");

Movie.remove({}, function(err) {
  if (err) {
    console.log("Error Movie.collection.insert: ", err);
  } else {
    console.log("collection removed");

    Movie.collection.insert(MovieList, (err, movies) => {
      console.log("collection removed");
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
