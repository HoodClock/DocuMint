const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const app = express();

// connecting the data base
connectDB();

// configuration of DotENV
dotenv.config();

// setting up a port from env
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ALL OF THE ENDPOINTS

// AUTH Endpoints
app.use('/api/auth/signup'); // POST
app.use('/api/auth/login'); // POST
app.use('/api/auth/logout'); // GET
app.use('/api/user/profile'); // GET

// Document Management endpoint
app.use('/api/documents/upload'); // POST

// NFT creation and management
app.use('/api/nfts/create'); // POST
app.use('/api/nfts'); // GET
app.use('/api/nfts/:id'); // GET

// Transaction endpoint
app.use('/api/transactions'); // GET

// Wallet integration 
app.use('/api/wallet/connect'); // POST
app.use('/api/wallet/status'); // GET


// Error handling 
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("Something went worng");
})

// Listen to the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})