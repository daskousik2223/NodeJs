const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/',(req, res, next) => {
    //Using ../ or .. is a way to get the parent directory but there is another way
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;