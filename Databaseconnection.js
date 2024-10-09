const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const mongoURI = process.env.DB_URL;

async function Databaseconnection() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

module.exports = Databaseconnection;
