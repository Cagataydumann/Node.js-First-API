const mongoose = require('mongoose'); //db set, propertyleri tanımladık db de, ve nesne oluşturduk sonra kullanabilmek için export edildi.

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  customerID: {
    type: String,
    required: true,
    unique: true
  },
  identityNumber: {
    type: String,
    required: true
  }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

