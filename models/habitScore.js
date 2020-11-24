const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const HabitScoreSchema = new Schema({
    habitName: String,
    username: String,
    currentStreak: {
        type: Number,
        default: 0
    },
    bestStreak: {
        type: Number,
        default: 0
    },
    totalScore: {
        type: Number,
        default: 0
    }
});

const HabitScore = mongoose.model('HabitScore', HabitScoreSchema);

module.exports = HabitScore;
