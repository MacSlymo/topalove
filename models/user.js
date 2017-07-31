const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  email      : {
    unique: true,
    required: true,
    type: String
  },
  name   : {
    unique: true,
    required: true,
    type: String,
  },
  password   : {
    required: true,
    type: String,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
