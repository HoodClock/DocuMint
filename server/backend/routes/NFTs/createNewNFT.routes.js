const express = require('express');
const router = express.Router();
const nftMintController = require('../../controllers/nftMint.controller');

router.post('/minting-new-nft/:userId', nftMintController.mintNFT);

module.exports = router;