const express = require('express');
const router = express.Router();
const walletConnectionController = require('../../controllers/walletConnection.controller');

router.post('/set-cookie', walletConnectionController.setWalletCookie);

module.exports = router;