const express = require('express');
const router = express.Router();
const nftMintController = require('../../controllers/nftMint.controller');
const auth = require('../../middleware/auth.middleware');

router.post('/minting-new-nft/:userId', auth, nftMintController.mintNFT);

module.exports = router;