const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    unique: true,
    required: true,
    type: String
  },
  email: {
    unique: true,
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
  //watchList: [{ type: Schema.Types.ObjectId, ref: "Movie" }]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
