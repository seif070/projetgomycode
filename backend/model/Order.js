const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }],
  status: {
    type: String,
    enum: ['Pending', 'Processed', 'Shipped'],
    default: 'Pending',
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
