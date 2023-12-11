const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    nameService: {
        type: String,
        required: true
    },
    descriptionService: {
        type: String,
        required: true
    },
    priceService: {
        type: Number,
        required: true
    },
    durationService: {
        type: Number,
        required: true
    },
    categoryService: {
        type: String,
        required: true
    }
  
});

module.exports = mongoose.model('Service', serviceSchema);
