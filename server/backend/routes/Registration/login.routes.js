const express = require('express')
const router = express.Router();
const LoginController = require('../../controllers/signup.controller');

router.post('/auth-user', LoginController.login);

module.exports = router;