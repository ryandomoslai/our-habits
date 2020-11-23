const express = require('express');
const router = express.Router();
const Habit = require('../models/habit');

router.get('/habit/:name', (req, res) => {
    Habit.find({ 'name': req.params.name }).then(data => {
        res.json(data);
    });
});

module.exports = router;
