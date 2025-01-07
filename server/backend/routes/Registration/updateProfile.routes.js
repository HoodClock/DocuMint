const express = require('express');
const router = express.Router();
const auth_middleware = require('../../middleware/auth.middleware');
const Credentials_Controller = require('../../controllers/signup.controller');

router.put("/UpdateUserProfileCredentials", auth_middleware, Credentials_Controller.updateUserCredentials);

module.exports = router;