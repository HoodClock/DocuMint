const express = require('express')
const router = express.Router();
const lastNFTController = require('../../controllers/nftMint.controller');

router.get('/last-nft-fetching', lastNFTController.lastNft);

module.exports = router;