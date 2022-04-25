const Product = require('../model/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
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
    Product.fetchAll(prods =>{
        res.render('admin/products', {
            prods: prods,
            pageTitle: 'Product Admin Page',
            path: '/admin/products',
          });
    });
};