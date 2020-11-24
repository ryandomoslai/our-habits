const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const HabitSchema = new Schema({
    name: String,
    description: String,
    icon: {
        type: String,
        default: 'default'
    },
    followers: {
        type: Number,
        default: 1
    }
});

const Habit = mongoose.model('Habit', HabitSchema);

module.exports = Habit;
