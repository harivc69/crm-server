const mongoose = require('mongoose');
const url = 'mongodb+srv://arul-db-user:Password123456@cluster0.qipjc4f.mongodb.net/'; 
const dbName = 'CRM';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`${url}/${dbName}`);
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

module.exports = connectToDatabase;
