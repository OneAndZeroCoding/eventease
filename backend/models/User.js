const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true         //remove extra spaces
  },
  email: {
    type: String,
    required: true,
    unique: true,     
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now    // Automatically set when user is created
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;