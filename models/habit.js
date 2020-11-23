const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const HabitSchema = new Schema({
    name: String,
    description: String,
    icon: {
        type: String,
        default: 'default'
    }
});

const Habit = mongoose.model('Habit', HabitSchema);

module.exports = Habit;
