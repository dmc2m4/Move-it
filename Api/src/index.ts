import mongoose from 'mongoose';
import User from './schemas/User'

async function connectDB () {
    const db = await mongoose.connect('mongodb://localhost/moveItdb');
    console.log('database is connected to', db.connection.db.databaseName)
}

connectDB();

const user = new User ({
    name: "Daniel",
    email: "daniel@gmail.com",
    password: "123456",
    img: "hola"
});

console.log(user);
