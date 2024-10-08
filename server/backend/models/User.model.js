const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword = async function (user_password) {
    return await bcrypt.compare(user_password, this.password);
};

module.exports = mongoose.model('User', userSchema);