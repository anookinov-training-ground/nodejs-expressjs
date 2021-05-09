// const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');
const dotenv = require('dotenv');
dotenv.config();

const errorController = require('./controllers/error');
const db = require('./util/database');

const app = express();

// app.engine(
//   'hbs',
//   expressHbs({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
//   })
// );
app.set('view engine', 'ejs');
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug');
app.set('views', 'views');

// const adminData = require('./routes/admin');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// db.execute('SELECT * FROM products')
//   .then((result) => {
//     // console.log(result);
//     console.log(result[0], result[1]);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
// app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use(errorController.get404);

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
