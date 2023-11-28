
const mongoose = require('mongoose');

const adminDashboardDataSchema = new mongoose.Schema({
  userCount: {
    type: Number,
    default: 0,
  },
  orderCount: {
    type: Number,
    default: 0,
  },
  productCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('AdminDashboardData', adminDashboardDataSchema);
