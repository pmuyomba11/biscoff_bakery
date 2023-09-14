const express = require('express');
require('dotenv').config();
const colors = require('colors');
const products = require('./models/bakedgoods');
const morgan = require('morgan');
const PORT = process.env.PORT;
//Initialization....
const app = express();


//Middleware...
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));

//Routes..
//Index Route
app.get('/products', (req, res) => {
    res.render('index.ejs', {
        allProducts: products
    });
})
//New Route
app.get('/products/new', (req, res) => {
    res.render('new.ejs')
})

//Create route
app.post('/products', (req, res) => {
    products.push(req.body);
    res.redirect('/products')
})
//Show Route
app.get('/products/:id', (req, res) => {
    res.render('show.ejs', {
        product: products[req.params.id]
    })
})
//Listener...
app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server running on PORT: ${PORT}...`.inverse.blue);
    console.log('====================================');
})