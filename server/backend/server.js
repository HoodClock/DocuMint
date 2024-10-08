const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const connectDB = require('./config/db')
const app = express();

// ALL the Routes
const signUpRouter = require("./routes/signIn.routes");
const loginRouter = require('./routes/login.routes');
const logoutRouter = require('./routes/logout.routes');

// configuration of DotENV
dotenv.config();

// connecting the data base
connectDB();

// setting up a port from env
const PORT = process.env.PORT || 5000;

// CORS configuration 
const corsOption = {
    origin: 'http://localhost:5173',
    credentials: true
}

// middlewares
app.use(cors(corsOption));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ALL OF THE ENDPOINTS

// AUTH Endpoints
app.use('/api/auth/signup', signUpRouter); // POST
app.use('/api/auth/login', loginRouter); // POST
app.use('/api/auth/logout', logoutRouter); // GET
// app.use('/api/user/profile'); // GET

// // Document Management endpoint
// app.use('/api/documents/upload'); // POST

// // NFT creation and management
// app.use('/api/nfts/create'); // POST
// app.use('/api/nfts'); // GET
// app.use('/api/nfts/:id'); // GET

// // Transaction endpoint
// app.use('/api/transactions'); // GET

// // Wallet integration 
// app.use('/api/wallet/connect'); // POST
// app.use('/api/wallet/status'); // GET


// Listen to the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})