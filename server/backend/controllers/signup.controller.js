const { User, hashingPassword, matchPassword } = require('../models/User.model');
const jwt = require('jsonwebtoken');


exports.signUp = async (req, res) => {

    try {
        const { username, email, password } = req.body;
    
        if (!username || !email || !password) {
            res.status(401).json({ message: "User Credentials are missing" });
        }
    
        const hashPssword = hashingPassword(password);
    
        const new_user = await User.create({
            username: username,
            email: email,
            password: hashingPassword
        });
    
        await new_user.save();
    } catch (error) {
        res.status()
    }
}