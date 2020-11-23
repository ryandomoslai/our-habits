const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const HabitPostSchema = new Schema({
    habitName: String,
    username: String,
    content: String,
    image: {
        type: String,
        default: ''
    },
    likes: {
        type: Number,
        default: 0
    },
    Date: {
        type: String,
        default: Date.now()
    }
});

const HabitPost = mongoose.model('HabitPost', HabitPostSchema);

module.exports = HabitPost;
