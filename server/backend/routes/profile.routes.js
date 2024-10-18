const express = require('express');
const router = express.Router();
const auth_middleware = require('../middleware/auth.middleware');

router.get('/user-persona', auth_middleware, (req, res) => {
    res.status(200).json({ message: 'Authenticated' });
});

module.exports = router;