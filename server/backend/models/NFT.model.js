const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    document: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document',
        required: true
    },
    nftThumbnail: {
        type: String,
        required: true
    },
    ipfsHash: {
        type: String,
        required: true
    },
    mintDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String, // Minted, Transferred, Burned
        default: "Minted"
    }
}, { timestamps: true });

const NFT = mongoose.model('NFT', nftSchema);

module.exports = NFT;
