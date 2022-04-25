const path = require('path');
const express = require('express');
const router = express.Router();
const rootdir = require('../util/path')

router.get('/user', (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'user.html'));
})

router.post('/adduser', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;