const express = require('express');
const router = express.Router();

const BlogPost = require('../models/blogPost');

// Routes
router.get('/', (req, res) => {
    BlogPost.find({ }).then(data => {
        res.json(data);
    }).catch(error => {
        console.log('error')
    });
});

router.get('/name', (req, res) => {
    const data = {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});

router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newBlogPost = new BlogPost(data);

    newBlogPost.save(error => {
        if (error) {
            res.status(500).json({
                msg: 'Internal server error'
            });
            return;
        }
        res.json({
            msg: 'Your data has been saved'
        });
    });
});

module.exports = router;
