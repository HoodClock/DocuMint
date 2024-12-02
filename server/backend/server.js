const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const connectDB = require('./config/db')

// ALL the Routes
const signUpRouter = require("./routes/Registration/signIn.routes");
const loginRouter = require('./routes/Registration/login.routes');
const logoutRouter = require('./routes/Registration/logout.routes');
const dashboardRouter = require('./routes/Dashboard/dashboard.routes');
const profileRouter = require('./routes/Dashboard/profile.routes');
const UploadDocumentRouter = require('./routes/Documents/uploadDocument.routes');
const getAllUserDocument = require('./routes/Documents/getAllDocuments.routes');
const CreateNewNFT = require('./routes/NFTs/createNewNFT.routes');
const FetchAllNfts = require('./routes/NFTs/gettingAllNFT.routes');

// configuration of DotENV
dotenv.config();

// connecting the data base
connectDB();

const app = express();

// middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true // allows sending cookies with it
}));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ALL OF THE ENDPOINTS

// AUTH Endpoints
app.use('/api/auth/signup', signUpRouter); // POST
app.use('/api/auth/login', loginRouter); // POST
app.use('/api/auth/logout', logoutRouter); // GET
app.use('/api/user/visiting', dashboardRouter) // GET
app.use('/api/user/profile', profileRouter); // GET


// // Document Management endpoint
app.use('/api/documents/upload', UploadDocumentRouter); // POST
app.use('/api/documents/allDocuments', getAllUserDocument) // GET

// // NFT creation and management
app.use('/api/nfts/create', CreateNewNFT); // POST
app.use('/api/nfts/fetch', FetchAllNfts); // GET
// app.use('/api/nfts/:id'); // GET

// // Transaction endpoint
// app.use('/api/transactions'); // GET

// // Wallet integration 
// app.use('/api/wallet/connect'); // POST
// app.use('/api/wallet/status'); // GET



// setting up a port from env
const PORT = process.env.PORT || 5000;

// Listen to the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})