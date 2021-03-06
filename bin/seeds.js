require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("../models/movies");
const MovieList = require("./data/movielist");
const Grade = require("../models/grades");

mongoose.connect(process.env.MONGODB_URI);

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
