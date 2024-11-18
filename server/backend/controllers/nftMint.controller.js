const documentModel = require('../models/Document.model');
const userModel = require('../models/User.model');
const { contract } = require('../helpers/contractHelper');

// Create the NFT❌
// Get All the NFT❌
// Get the sepecific NFT❌



exports.mintNFT = async (req, res) => {

    const userId = req.params.userId;

    const user = await userModel.findById(userId);

    // NEED TO GET THE DOCUMENT ID WHICH IS JUST UPLOADED YET.

    const document = await documentModel.findById(req.body.documentId);

    if (!document) {
        return res.status(404).json({ message: "Document not found" });
    }

    const metaData = document.IPFSHash;

    const transaction = await contract.mintDocument(user.walletAddress, metaData);
    await transaction.wait();

    document.status = 'Minted';
    document.nftMinted = true;
    await document.save();


    user.nfts.push({ document: document._id, nftStatus: 'Minted' });
    await user.save();

    res.status(200).json({ message: "NFT minted Successfully" });
} 