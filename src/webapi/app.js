const express = require('express');
const productRoutes = require('./routes/products');
const containerDependencies = require('../di/container');

const app = express();
app.use(express.json());

app.get('/', (req, resp) => resp.json({message: 'It works!'}))
app.use('/products', productRoutes(containerDependencies));

module.exports = { app }