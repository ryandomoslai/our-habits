const express = require('express');
const router = express.Router();
const HabitScore = require('../models/habitScore');

router.get('/habit-scores/user/:username', (req, res) => {
    HabitScore.find({ 'username': req.params.username }).then(data => {
        res.json(data);
    });
});

router.post('/habit-scores/start/:habitName', (req, res) => {
    const data = req.body;

    const newHabitScore = new HabitScore({
        habitName: req.params.habitName,
        username: data.username
    });
    newHabitScore.save().then(result => {
        res.json(result);
    });
})

module.exports = router;
