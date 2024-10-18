const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "No token has been provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWTSECRETKEY);

        req.user = decoded;

        next();

    } catch (error) {
        res.status(401).json({ message: "Invalid Token" });
    }
}


module.exports = auth;