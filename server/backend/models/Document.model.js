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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
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

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
