const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const HabitScoreSchema = new Schema({
    habitName: String,
    username: String,
    currentStreak: Number,
    bestStreak: Number,
    totalScore: Number
});

const HabitScore = mongoose.model('HabitScore', HabitScoreSchema);

module.exports = HabitScore;
