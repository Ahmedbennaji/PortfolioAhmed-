const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get posts
router.get('/', (req, res) => {
    res.send('hello');
});
// Add posts 

router.post('/', (req, res) => {
    
});


// Delete posts

module.exports = router;