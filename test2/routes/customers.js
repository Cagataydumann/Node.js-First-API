const express = require('express');
const router = express.Router();
const Customer = require('../models/customers'); //customer modelinden nesne yaptık, CRUD yerleştik.

router.post('/', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).send(customer); //created
  } catch (error) {
    res.status(400).send(error); //bad request
  }

});

router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.send(customers);
  } catch (error) {
    res.status(500).send(error); //int server error
  }
});

router.put('/:id', async (req, res) => {
    try {
      const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      res.send(customer);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const customer = await Customer.findByIdAndRemove(req.params.id);
      res.send(customer);
    } catch (error) {
      res.status(400).send(error);
    }
  });
    
module.exports = router;