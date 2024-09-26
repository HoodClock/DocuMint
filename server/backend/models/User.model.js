const mongoose = require('mongoose');

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

const userModel = mongoose.model('User', userSchema);

module.exports = User;