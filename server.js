const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const userRoutes = require('./routes/user');
const habitRoutes = require('./routes/habit');
const habitScoreRoutes = require('./routes/habitScore');
const habitPostRoutes = require('./routes/habitPost');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/our-habits-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const newHabitPost = new HabitPost({
//     habitName: 'Learn French',
//     username: 'Jean',
//     content: 'Test post from Jean',
// });
// newHabitPost.save();
// newHabitPost.save();


// const findCondition = { 'username': 'Ryan', 'habitName': 'Learn French' };
// const HabitScore = require('./models/habitScore');
// HabitScore.findOne(findCondition).then((result) => {
//     const update = {
//         currentStreak: result.currentStreak += 3,
//         totalScore: result.totalScore += 3
//     };
//     if (update.currentStreak > result.bestStreak) {
//         update.bestStreak = update.currentStreak;
//     }
//
//     HabitScore.findOneAndUpdate(findCondition, update, { useFindAndModify: false }, (error, result) => {
//
//     });
// })
// HabitScore.findOneAndUpdate(findCondition, update, { useFindAndModify: false }, (error, result) => {
//     console.log(result);
//     console.log(error);
// });


// const HabitScore = require('./models/habitScore');
// const newHabitScore = new HabitScore({
//     habitName: 'Read',
//     username: 'Ryan',
//     currentStreak: 0,
//     bestStreak: 0,
//     totalScore: 0
// });
// newHabitScore.save();

// HTTP request logger
app.use(morgan('tiny'));

// Routes
app.use('/api', userRoutes);
app.use('/api', habitRoutes);
app.use('/api', habitScoreRoutes);
app.use('/api', habitPostRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./our-habits-client/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
