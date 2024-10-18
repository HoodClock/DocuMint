const express = require('express');
const router = express.Router();
const auth_middleWare = require('../middleware/auth.middleware');

router.get('/dashboard', auth_middleWare, (req, res) => {
    res.status(200).json({ message: "HEY Welcome to dashboard" });
});

module.exports = router;