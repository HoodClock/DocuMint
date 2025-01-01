const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    docType: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    file: {
        type: String,
        required: true
    },
    IPFSHash: {
        type: String,
    },
    status: {
        type: String, // Uploaded, Verified, Minted
        default: "Uploaded"
    },
    nftMinted: {
        type: Boolean, // Minted, not yet Minted
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Document', documentSchema);
