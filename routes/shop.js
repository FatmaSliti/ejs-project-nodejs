const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log(`shop.js`, adminData.products)
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  //using the templating engine (pug)
  const products = adminData.products;
  res.render('shop', {prods: products, pageTitle: 'Shop', path: '/shop'}) //the render method allows us to pass in data that should be added to our view
});

module.exports = router;
