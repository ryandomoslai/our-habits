const express = require('express');
const router = express.Router();
const HabitPost = require('../models/habitPost');

router.get('/habit-posts/user/:username', (req, res) => {
    HabitPost.find({ 'username': req.params.username }).then(data => {
        res.json(data);
    });
});

module.exports = router;
