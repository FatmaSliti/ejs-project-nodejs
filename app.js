const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs') //use the ejs engine for every dynamic template we're trying to render
app.set('views', 'views') //tell express where to find the dynamic views

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle:'Page Not Foundd', path: '/404'})
});

app.listen(3000);
