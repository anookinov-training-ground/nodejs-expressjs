// const mongodb = require('mongodb');
const Product = require('../models/product');
// const sequelize = require('../util/database');

// const ObjectId = mongodb.ObjectId;

exports.getAddProduct = (req, res, next) => {
  // res.send(
  //   '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  // );
  // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
    // formsCSS: true,
    // productCSS: true,
    // activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  // console.log(req.body);
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(
    {
      title: title,
      price: price,
      description: description,
      imageUrl: imageUrl,
      userId: req.user
      // userId: req.user._id
    }
    // title,
    // price,
    // description,
    // imageUrl,
    // null,
    // req.user._id
  );
  product
    .save()
    // req.user
    //   .createProduct({
    //     title: title,
    //     price: price,
    //     imageUrl: imageUrl,
    //     description: description
    //   })
    // Product.create({
    //   title: title,
    //   price: price,
    //   imageUrl: imageUrl,
    //   description: description
    //   // userId: req.user.id
    // })
    .then((result) => {
      // console.log(result);
      console.log('CREATED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch((err) => {
      console.log(err);
    });
  // const product = new Product(null, title, imageUrl, description, price);
  // // product.save();
  // product
  //   .save()
  //   .then(() => {
  //     res.redirect('/');
  //   })
  //   .catch((err) => console.log(err));
  // // res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  // Product.findById(prodId, (product) => {
  //   if (!product) {
  //     return res.redirect('/');
  //   }
  //   res.render('admin/edit-product', {
  //     pageTitle: 'Edit Product',
  //     path: '/admin/edit-product',
  //     editing: editMode,
  //     product: product
  //   });
  // });
  // req.user
  //   .getProducts({ where: { id: prodId } })
  // Product.findByPk(prodId)
  // .then((products) => {
  //   const product = products[0];
  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDescription = req.body.description;
  // const updatedProduct = new Product(
  //   prodId,
  //   updatedTitle,
  //   updatedImageUrl,
  //   updatedDescription,
  //   updatedPrice
  // );
  // updatedProduct.save();
  // Product.findByPk(prodId)
  // .then((product) => {
  //   product.title = updatedTitle;
  //   product.price = updatedPrice;
  //   product.description = updatedDescription;
  //   product.imageUrl = updatedImageUrl;
  //   return product.save();
  // })

  // const product = new Product(
  //   updatedTitle,
  //   updatedPrice,
  //   updatedDescription,
  //   updatedImageUrl,
  //   prodId
  //   // new ObjectId(prodId)
  // );

  Product.findById(prodId)
    .then((product) => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDescription;
      product.imageUrl = updatedImageUrl;
      return product.save();
    })
    .then((result) => {
      console.log('UPDATED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  // Product.fetchAll((products) => {
  //   res.render('admin/products', {
  //     prods: products,
  //     pageTitle: 'Admin Products',
  //     path: '/admin/products'
  //   });
  // });
  // Product.findAll()
  // req.user
  //   .getProducts()
  // Product.fetchAll()
  Product.find()
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then((products) => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  // Product.deleteById(prodId);
  // Product.findByPk(prodId)
  // .then((product) => {
  //   return product.destroy();
  // })
  // Product.deleteById(prodId)
  Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log('DELETED PRODUCT');
      res.redirect('/admin/products');
    })
    .catch((err) => console.log(err));
};
