const express = require('express')
const router = express.Router();
const auth_middleWare = require('../../middleware/auth.middleware')
const txController = require('../../controllers/tx.controller')

router.get('/get-trasnsaction', auth_middleWare, txController.getAllTransaction);

module.exports = router;