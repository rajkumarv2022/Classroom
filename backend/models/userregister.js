const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  is_teach: Number,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
