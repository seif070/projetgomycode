const mongoose = require('mongoose');

const connecdb = async () => {
    try {
        await mongoose.connect('mongodb+srv://jebaliseifeddine:azerty@cluster0.fb4aqzs.mongodb.net/your-database-name', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('You are connected to your MongoDB Atlas database.');
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas:', err.message);
    }
};

module.exports = connecdb;
