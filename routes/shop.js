// const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
// const adminData = require('./admin');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

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
