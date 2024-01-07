const mongoose = require("mongoose");

const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true 
    },
  answeredQuestions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question' }],
  correctAnswers: {
    type: Number, 
    default: 0 },
  incorrectAnswers: {
    type: Number,
    default: 0 }
});

const UserProgress = mongoose.model('UserProgress', userProgressSchema);

module.exports = UserProgress;
