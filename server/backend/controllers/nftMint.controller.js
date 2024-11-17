const documentModel = require('../models/Document.model');
const userModel = require('../models/User.model');
const { contract } = require('../helpers/contractHelper');

exports.mintNFT = async (req, res) => {
    const userId = req.user._id;

    const document = await documentModel.findById(req.body.documentId);

    if (!document) {
        return res.status(404).json({ message: "Document not found" });
    }

    const metaData = document.IPFSHash;

    const user = await userModel.findById(userId);


    const transaction = await contract.mintDocument(user.walletAddress, metaData);
    await transaction.wait();

    document.status = 'Minted';
    document.nftMinted = true;
    await document.save();


    user.nfts.push({ document: document._id, nftStatus: 'Minted' });
    await user.save();

    res.status(200).json({ message: "NFT minted Successfully" });
} 