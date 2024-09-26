const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    ipfsHash: {
        type: String,
        required: true
    },
    status: {
        type: String, // Uploaded, Verified, Minted
        default: "Uploaded"
    },
    nftMinted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
