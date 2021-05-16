const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn =
  //   req.get('Cookie').split(';')[0].trim().split('=')[1] === 'true';
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  // req.isLoggedIn = true;
  // res.setHeader('Set-Cookie', 'loggedIn=true; Max-Age=10; Secure; HttpOnly');
  User.findById('60a090962b4bb1424cba6fea')
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((err) => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect('/');
  });
};
