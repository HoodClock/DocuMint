const express = require('express')
const router = express.Router();
const signInController = require('../controllers/signup.controller');


router.post('/user-registeration', signInController.signUp); 