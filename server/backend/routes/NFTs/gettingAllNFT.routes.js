const express = require('express');
const router = express.Router();
const nftMinting = require('../../controllers/nftMint.controller');

router.get("/all_nfts", nftMinting.getNfts);

module.exports = router;