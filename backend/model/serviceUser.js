const mongoose = require('mongoose');

const serviceUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const ServiceUser = mongoose.model('ServiceUser', serviceUserSchema);

module.exports = ServiceUser;
