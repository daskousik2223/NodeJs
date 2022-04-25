const Product = require('../model/product')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
};

exports.addNewProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {

    //const prods = Product.fetchAll();
    // When reading from file
    
    Product.fetchAll(prods =>{
        res.render('shop', {
            prods: prods,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: prods.length > 0,
            activeShop: true,
            productCSS: true
          });
    });
 
};
