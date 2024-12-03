const express = require('express');
const router = express.Router();
const nftMinting = require('../../controllers/nftMint.controller');
const auth_middleware = require('../../middleware/auth.middleware');

router.get("/all_nfts", auth_middleware, nftMinting.getNfts);

module.exports = router;