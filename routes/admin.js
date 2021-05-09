// const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const adminController = require('../controllers/admin');

const router = express.Router();

// router.use('/add-product', (req, res, next) => {
//   console.log('In another middleware!');
//   // res.send('<h1>The "Add Product" Page</h1>');
//   res.send(
//     '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
//   );
// });

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// app.use('/product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/');
// });

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;
