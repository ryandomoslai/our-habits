const express = require('express');
const router = express.Router();
const HabitPost = require('../models/habitPost');
const HabitScore = require('../models/habitScore');

router.get('/habit-posts/user/:username', (req, res) => {
    HabitPost.find({ 'username': req.params.username }).then(data => {
        res.json(data);
    });
});

router.get('/habit-posts/user/:username/feed', (req, res) => {
    HabitScore.find({ 'username': req.params.username }).then(data => {
        const userHabits = data.map(habitScore => habitScore.habitName);
        HabitPost.find({'habitName' : { "$in": userHabits },})
            .sort('-Date')
            .limit(50)
            .exec((err, data) => {
               res.json(data);
            });
    });
});

router.get('/habit-posts/habit/:habitName', (req, res) => {
    HabitPost.find({ 'habitName': req.params.habitName }).sort('-Date').exec((err, data) => {
        res.json(data);
    });
});

router.post('/habit-posts/create/:username', (req, res) => {
    const data = req.body;

    const newHabitPost = new HabitPost({
        username: req.params.username,
        content: data.content,
        habitName: data.habitName
    });

    newHabitPost.save().then(data => {
        res.json(data);
    });
})

module.exports = router;
