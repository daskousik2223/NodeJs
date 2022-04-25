const path = require('path');
const express = require('express');
const router = express.Router();
const rootdir = require('../util/path');

const products =[];

router.get('/add-product',(req, res, next) => {
    //Using ../ or .. is a way to get the parent directory but there is another way
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    //res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
    //Using template engine Pug
    res.render('add-product', { pageTitle: 'Add Product Page', path: '/add-product'});
});

//app.use can be used that work for both GET and POST. But for only GET the method is app.get and similarly app.post
router.post('/product',(req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;