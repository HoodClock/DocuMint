const express = require('express');
const router = express.Router();
const auth_middleware = require('../../middleware/auth.middleware');

router.get('/user-persona', auth_middleware, (req, res) => {
    if (req.user) {
        res.status(200).json(req.user);
    } else {
        res.status(401).json({ message: "User is not Authenticated" });
    }
});

module.exports = router;