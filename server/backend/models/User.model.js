const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ProfilePicture: {
        type: String,
        required: false
    },
    walletAddress: {
        type: String,
        required: true
    },
    documents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document'
    }],
    nfts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NFT'
    }],
    transactionHistroy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TransactionHistory'
    }]
})


async function hashingPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

async function matchPassword(password, user) {
    if (!user) return false
    return await bcrypt.compare(password, user.password);
}

const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    hashingPassword,
    matchPassword
};