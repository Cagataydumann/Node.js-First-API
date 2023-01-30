const express = require('express');
const router = express.Router();
const Product = require('../models/products');

router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;