const express = require('express')
const router = express.Router();
const walletConnectionController = require('../../controllers/walletConnection.controller');
const auth_middleware = require('../../middleware/auth.middleware');

router.get('/fetch-wallet-address', auth_middleware, walletConnectionController.fetchWalletAddress);

module.exports = router;