const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  nom: String,
  email: String,
  telephone: String,
  typeService: String,
  confirmed: {
    type: Boolean,
    default: false,
  },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
