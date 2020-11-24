const express = require('express');
const router = express.Router();
const Habit = require('../models/habit');
const HabitScore = require('../models/habitScore');

router.get('/habit/:name', (req, res) => {
    Habit.find({ 'name': req.params.name }).then(data => {
        res.json(data);
    });
});

router.get('/habit/user/:username', (req, res) => {
    HabitScore.find({ 'username': req.params.username }).then(data => {
        const userHabits = data.map(habitScore => habitScore.habitName);
        Habit.find({ 'name': { "$in": userHabits } }).then(data => {
            res.json(data);
        })
    });
});

router.get(`/habit/user/:username/discovery`, (req, res) => {
    HabitScore.find({ 'username': req.params.username }).then(data => {
        const userHabits = data.map(habitScore => habitScore.habitName);
        Habit.find({ 'name': { "$nin": userHabits } })
            .sort('-followers')
            .limit(3)
            .exec((err, data) => {
                res.json(data);
            })
    });
});

router.get('/habit', (req, res) => {
    Habit.find({ 'name': { "$regex": req.query.search, "$options": "i" } }).then(data => {
        res.json(data);
    });
});

router.post('/habit/save/user/:username', (req, res) => {
    const data = req.body;

    const newHabit = new Habit(data);
    newHabit.save(() => {
        const newHabitScore = new HabitScore({
            habitName: newHabit.name,
            username: req.params.username
        });

        newHabitScore.save(() => {
            res.json({
                msg: 'New habit created'
            });
        });
    });
})

module.exports = router;
