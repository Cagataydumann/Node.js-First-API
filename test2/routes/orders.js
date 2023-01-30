const express = require('express');
const router = express.Router();
const Order = require('../models/orders');

router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
    try {
      const orders = await Order.find({});
      res.send(orders);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      res.send(order);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const order = await Order.findByIdAndRemove(req.params.id);
      res.send(order);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  module.exports = router;