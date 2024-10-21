const express = require('express');
const router = express.Router();
const auth_middleWare = require('../middleware/auth.middleware');

router.get('/dashboard', auth_middleWare, (req, res) => {
    if (req.user) {
        res.status(200).json(req.user);
    } else {
        res.status(401).json({ message: "User is not Authenticated" });
    }
});

module.exports = router;