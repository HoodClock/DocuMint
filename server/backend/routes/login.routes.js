const express = require('express')
const router = express.Router();
const auth_middleWare = require('../middleware/auth.middleware');
const LoginController = require('../controllers/signup.controller');

router.post('/auth-user', auth_middleWare, LoginController.login);

module.exports = router;