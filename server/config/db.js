const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://evanknight18:9aMr1d4npuifS3Wr@hywv0.441vutt.mongodb.net/?retryWrites=true&w=majority&appName=HYWV0', );
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
