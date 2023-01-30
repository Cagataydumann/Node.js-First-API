const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderID: {
    type: String,
    required: true,
    unique: true
  },
  productID: {
    type: String,
    required: true
  },
  orderQuantity: {
    type: Number,
    required: true
  },
  customerID: {
    type: String,
    required: true
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;