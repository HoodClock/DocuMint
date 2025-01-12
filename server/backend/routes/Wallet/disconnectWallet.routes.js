const express = require('express');
const router = express.Router();
const walletConnectionController = require('../../controllers/walletConnection.controller');

router.get('/disconnection-wallet', walletConnectionController.clearWalletCookie);

module.exports = router;