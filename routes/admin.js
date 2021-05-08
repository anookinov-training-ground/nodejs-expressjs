// const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const productsController = require('../controllers/products');

const router = express.Router();

// router.use('/add-product', (req, res, next) => {
//   console.log('In another middleware!');
//   // res.send('<h1>The "Add Product" Page</h1>');
//   res.send(
//     '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
//   );
// });

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// app.use('/product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/');
// });

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;
