
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
