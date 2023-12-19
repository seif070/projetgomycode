
const Reservation = require('../model/Reservation');

const createReservation = async (req, res) => {
  try {
    const { userId, date } = req.body;
    const reservation = new Reservation({ userId, date });
    await reservation.save();
    res.status(201).json({ msg: 'Reservation created successfully', reservation });
  } catch (error) {
    console.error('Error creating reservation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createReservation,
  getAllReservations,
};
