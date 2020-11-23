const express = require('express');
const router = express.Router();
const HabitScore = require('../models/habitScore');

router.get('/habit-scores/user/:username', (req, res) => {
    HabitScore.find({ 'username': req.params.username }).then(data => {
        res.json(data);
    });
});

module.exports = router;
