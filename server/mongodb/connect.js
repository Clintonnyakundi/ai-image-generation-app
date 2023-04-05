import mongoose from 'mongoose';

// create a connection to MongoDB
const connectDB = (url) => {
  mongoose.set('strictQuery', true);


  mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
};

export default connectDB;