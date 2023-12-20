
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  typeService: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
