const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  walletBalance: {
    type: Number,
    default: 100,
    min: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
