// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectToDatabase = require('./Database');
const MenuRoutes = require('../model/menu');
const LoginRoutes = require('../model/login');
const UserInfoRoutes = require('../model/userInfo');


// Load configuration based on environment
const config = require('./config'); // Assuming config.js is in the same directory

connectToDatabase(config.database.uri);

const cors = require('cors');
app.use(cors(config.cors));
app.use(bodyParser.json());
app.use(express.json());
app.use('/api', MenuRoutes);
app.use('/api', LoginRoutes);
app.use('/api', UserInfoRoutes);


const PORT = process.env.PORT || config.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});