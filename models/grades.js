//définir le code du système de notation

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gradeSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User" },
  movieID: { type: Schema.Types.ObjectId, ref: "Movie" },
  score: { type: Number, default: 1000 }
});

const Grade = mongoose.model("Grade", gradeSchema);
module.exports = Grade;
