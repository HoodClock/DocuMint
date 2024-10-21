const jwt = require('jsonwebtoken');
const userModel = require('../models/User.model')

const auth = async (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "No token has been provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWTSECRETKEY);

        const user = await userModel.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;

        next();

    } catch (error) {
        res.status(401).json({ message: "Invalid Token" });
    }
}


module.exports = auth;