const mongoose = require('mongoose');

const partenaireSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "partenaire"
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    services: {
        type: [String],
        required: true
    },
    openingHours: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    logo: {
        type: String
    },
    description: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    },
    reviews: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        text: String,
        rating: Number,
        date: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model('Partenaire', partenaireSchema);
