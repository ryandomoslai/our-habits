const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/user/:username', (req, res) => {
    User.find({ 'username': req.params.username }).then(data => {
       res.json(data);
    });
});

module.exports = router;
