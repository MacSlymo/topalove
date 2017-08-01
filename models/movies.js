const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const MOVIETYPES    = require('./movie-type');
const GRADES = require('./grades');

const MovieSchema = new Schema({
  title         : String,
  category      : { type: String, enum: MOVIETYPES},
  cover         : String,
  notation      : { type: String, enum: GRADES}
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
