const express = require('express')
const router = express.Router();
const logoutController = require('../controllers/signup.controller');
const auth_middleWare = require('../middleware/auth.middleware');

router.get('/Signing-out', auth_middleWare, logoutController.logout);

module.exports = router;