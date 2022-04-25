const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/',(req, res, next) => {
    //Code for no template engine
    //console.log('Shop.js', adminData.products);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));

    //Code for pug
    const products = adminData.products;
    console.log(products);
    res.render('shop', { prods: products, docTitle: 'Shop'});
});

module.exports = router;