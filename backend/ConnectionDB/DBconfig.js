// "mongodb://localhost:27017/PCMS"
const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/PCMS');
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};


module.exports = connectDB;
