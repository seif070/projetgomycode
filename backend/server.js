const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');
const authRouter = require('./routes/authuser');
const servicesRoutes = require('./routes/servicesRoutes');
const serviceUserRoutes = require('./routes/serviceUserRoutes'); 
const reservationRoutes = require('./routes/reservationRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5002;

connectDB();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRouter);
app.use('/services', servicesRoutes);
app.use('/service-users', serviceUserRoutes); 
app.use('/reservation', reservationRoutes);

// Middleware pour capturer les erreurs non traitées
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Démarrer le serveur
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
