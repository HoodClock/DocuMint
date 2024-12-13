const mongoose = require('mongoose');

const transactionHistorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    nft: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NFT',
        required: true
    },
    transactionType: {
        type: String,
        required: true
    },
    transactionDate: {
        type: Date,
        default: Date.now
    },
    transactionHash: {
        type: String,
        required: true
    },
    from: { type: String },
    to: { type: String },
    gasUsed: { type: String },
    value: { type: String },
    blockNumber: { type: Number },
}, { timestamps: true });

const TransactionHistory = mongoose.model('TransactionHistory', transactionHistorySchema);

module.exports = TransactionHistory;
