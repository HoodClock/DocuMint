const express = require('express')
const router = express.Router();
const logoutController = require('../controllers/signup.controller');
const auth_middleware = require('../middleware/auth.middleware');

router.get('/loggin-out', auth_middleware, logoutController);

module.exports = router;