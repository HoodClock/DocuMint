const userModel = require('../models/User.model');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
    try {

        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(401).json({ message: "User Credentials are missing" });
        }

        const new_user = await userModel.create({
            username,
            email,
            password,
        });

        const token = jwt.sign({ id: new_user._id }, process.env.JWTSECRETKEY, {
            expiresIn: process.env.JWTEXPIRES || '365d',
        });

        res.cookie('token', token);

        res.status(200).json({ message: "User Created Succefully" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

exports.login = async (req, res) => {
    try {

        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(404).json({ message: "Missing Important Credentials" });
        }

        const existedUser = await userModel.findOne({ username });

        if (!existedUser) {
            return res.status(401).json({ message: `User with the ${username} username does not exist` });
        }

        const checkPassword = await existedUser.matchPassword(password);

        if (!checkPassword) {
            return res.status(401).json({ message: "Password is incorrect" });
        }

        const token = jwt.sign({ id: existedUser._id }, "OlaAmigos", {
            expiresIn: process.env.JWTEXPIRES,
        });

        res.cookie('token', token);

        res.status(201).json({ message: "User LoggedIn sucessfully" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server error", error });
    }
}

exports.logout = async (req, res) => {
    try {
        res.clearCookie('token');

        res.status(200).json({ message: 'Logged out Successfully' });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
}