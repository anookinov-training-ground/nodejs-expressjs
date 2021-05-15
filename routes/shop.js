// const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
// const adminData = require('./admin');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.post('/create-order', shopController.postOrder);

router.get('/orders', shopController.getOrders);

// router.get('/checkout', shopController.getCheckout);

// app.use((req, res, next) => {
//   console.log('In the middleware!');
//   next(); // Allows the request to continue to the next middleware in line
// });

// app.use('/', (req, res, next) => {
//   console.log('This always runs!');
//   next();
// });

// app.use('/', (req, res, next) => {
//   console.log('In another middleware!');
//   res.send('<h1>Hello from Express!</h1>');
// });

module.exports = router;
