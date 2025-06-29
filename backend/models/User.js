const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
  email: { type: String, unique: true },
  name: String,
  avatar: String,
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
