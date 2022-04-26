const Product = require('../model/product')

exports.getProducts = (req, res, next) => {

    //const prods = Product.fetchAll();
    // When reading from file
    
    Product.fetchAll(prods =>{
        res.render('shop/product-list', {
            prods: prods,
            pageTitle: 'All Products',
            path: '/products',
          });
    });
 
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(prods =>{
        res.render('shop/index', {
            prods: prods,
            pageTitle: 'Shop',
            path: '/',
          });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Cart',
        path: '/cart'
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders'
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout Page'
    });
};
