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


//Listener...
app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server running on PORT: ${PORT}...`.inverse.blue);
    console.log('====================================');
})