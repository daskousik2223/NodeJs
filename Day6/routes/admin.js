const path = require('path');

const express = require('express');

const prodController = require('../controllers/products')

const router = express.Router();

// /admin/add-product => GET
router.get('/admin/add-product', prodController.getAddProduct);

// /admin/add-product => POST
router.post('/admin/add-product', prodController.addNewProduct);

module.exports = router;
