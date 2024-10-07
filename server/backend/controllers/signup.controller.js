const userModel = require('../models/User.model');
const jwt = require('jsonwebtoken');

// Create Account✅
// Login
// Delete

exports.signUp = async (req, res) => {
    try {
        const { username, email, password, walletAddress } = req.body;

        if (!username || !email || !password || !walletAddress) {
            res.status(401).json({ message: "User Credentials are missing" });
        }

        const new_user = await userModel.create({
            username,
            email,
            password,
            walletAddress
        });

        const token = jwt.sign({ id: new_user._id }, process.env.JWTSECRETKEY);
        res.cookie('token', token);

        await new_user.save();

        res.status(200).json({ message: "User Created Succefully" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
}