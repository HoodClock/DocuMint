const jwt = require('jsonwebtoken');
const userModel = require('../models/User.model')

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: "No token has been provided" });
        }

        const decoded = jwt.verify(token, process.env.JWTSECRETKEY);

        const user = await userModel.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user;
        next();

    } catch (error) {
        res.status(401).json({ message: "Token is not provided" });
    }
}

module.exports = auth;