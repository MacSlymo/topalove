const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const MOVIETYPES    = require('./movie-type');
const NOTATION = require('./notation');

const MovieSchema = new Schema({
  title         : { type: String }
  category      : { type: String, enum: MOVIETYPES},
  cover         : { type: Image}
  notation      : { type: String, enum: NOTATION}
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;