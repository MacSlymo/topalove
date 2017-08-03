const mongoose = require("mongoose");
const mongooseSimpleRandom = require("mongoose-simple-random");
const Schema = mongoose.Schema;
const MOVIETYPES = require("./movie-type");

const MovieSchema = new Schema({
  title: String,
  category: { type: String, enum: MOVIETYPES },
  cover: String,
  decade: { type: Number, enum: [80, 90, 2000] }
});
MovieSchema.plugin(mongooseSimpleRandom);

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
