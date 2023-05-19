import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const db = await mongoose.connect('mongodb://localhost/moveItdb');
    console.log('database is connected to', db.connection.db.databaseName)
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

export default connectDB;