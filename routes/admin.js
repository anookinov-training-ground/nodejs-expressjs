const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// router.use('/add-product', (req, res, next) => {
//   console.log('In another middleware!');
//   // res.send('<h1>The "Add Product" Page</h1>');
//   res.send(
//     '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
//   );
// });

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // res.send(
  //   '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  // );
  // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// app.use('/product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/');
// });

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
