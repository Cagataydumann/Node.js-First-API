// import express from 'express';  
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
const express = require('express'); //express ve db yi ekledik, routeları buraya ekledik, routeları tanımladık, portu belirledik ve ana sayfaya yazı yazdırdık.
const mongoose = require('mongoose');
const customersRoute = require('./routes/customers');
const ordersRoute = require('./routes/orders');
const productsRoute = require('./routes/products');

const app = express();

app.use(express.json());
app.use('/customers', customersRoute);
app.use('/orders', ordersRoute);
app.use('/products', productsRoute);

mongoose.connect(
  'mongodb://localhost/myDB',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to MongoDB!')
);

app.get('/', (req, res) => res.send('Hello from home.'));
const port = process.env.PORT || 3000; //sunucunun portunu ayarladık.
app.listen(port, () => console.log(`Listening on port ${port}...`));