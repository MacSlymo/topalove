const mongoose = require("mongoose");
const Movie = require("../models/movies");
<<<<<<< HEAD
const MovieList = require("./data/movieList.js")

=======
const Grade = require("../models/grades");
const data2000 = require("./data/2000.js");
>>>>>>> 096b03c9ff4f70d0f0b6f957a94adee3895b58bf

mongoose.connect("mongodb://localhost/topalove");

Movie.remove({}, function(err) {
  if (err) {
    console.log("Error Movie.collection.insert: ", err);
  } else {
<<<<<<< HEAD
    console.log('collection removed');

    Movie.collection.insert(MovieList, (err, movies) => {
=======
    console.log("collection removed");

    Movie.collection.insert(data2000, (err, movies) => {
>>>>>>> 096b03c9ff4f70d0f0b6f957a94adee3895b58bf
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
