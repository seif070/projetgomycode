const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');
const servicesRouter=require('./routes/servicesRoutes');
const authRouter = require('./routes/authuser');
const router = require('./routes/servicesRoutes');
const reservationRoutes = require('./routes/reservationRoutes');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connexion à la base de données
connectDB();

// Middleware pour gérer les requêtes cross-origin
app.use(cors());

// Middleware pour parser le corps des requêtes en JSON
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
app.use('/services',router);
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
