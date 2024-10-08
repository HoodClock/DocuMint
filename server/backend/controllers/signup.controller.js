const userModel = require('../models/User.model');
const jwt = require('jsonwebtoken');

// Create Account✅
// Login✅
// Logout
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

        const token = jwt.sign({ id: new_user._id }, process.env.JWTSECRETKEY, {
            expiresIn: process.env.JWTEXPIRES || '1h',
        });

        console.log('first milestone')

        res.cookie('token', token, { httpOnly: true });

        console.log('second milestone')

        res.status(200).json({ message: "User Created Succefully" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

exports.login = async (req, res) => {
    try {
        console.log('second milestone')

        const { username, password } = req.body;

        if (!username || !password) {
            res.status(404).json({ message: "Missing Important Credentials" });
        }

        const existedUser = await userModel.findOne({ username });

        if (!existedUser) {
            res.status(400).json({ message: "User does not exist" });
        }

        const checkPassword = await existedUser.matchPassword(password);

        if (!checkPassword) {
            res.status(400).json({ message: "Password is incorrect" });
        }

        console.log("Milestone passed")

        const token = jwt.sign({ id: new_user._id }, process.env.JWTSECRETKEY, {
            expiresIn: process.env.JWTEXPIRES || '1h'
        })

        console.log('first milestone')

        res.cookie('token', token, { httpOnly: true, });
        console.log('second milestone')

        res.status(201).json({ message: "User LoggedIn sucessfully" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server error", error });
    }
}

exports.logout = async (req, res) => {

    const { userId } = req.params;

    const existedUser = await userModel.findById(userId);

    if (!existedUser) {
        res.status(401).json({ message: "User does not exist" });
    }


}