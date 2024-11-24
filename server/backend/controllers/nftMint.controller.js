const documentModel = require('../models/Document.model');
const userModel = require('../models/User.model');
const { get_Contract_with_User } = require('../helpers/contractHelper');

// Create the NFT❌
// Get All the NFT❌
// Get the sepecific NFT❌

exports.mintNFT = async (req, res) => {

    try {
        const userId = req.params.userId;

        console.log("USER ID", userId);

        const user = await userModel.findById(userId);

        console.log("User", user);

        // NEED TO GET THE DOCUMENT ID WHICH IS JUST UPLOADED YET.

        const lastDocument = await documentModel.findOne().sort({ createdAt: -1 });

        console.log("LAST DOCUMENT", lastDocument);


        if (!lastDocument) {
            return res.status(404).json({ message: "Document not found" });
        }

        const metaData = lastDocument.IPFSHash;

        const transaction = await get_Contract_with_User(req, res, user.walletAddress, metaData, user);
        await transaction.wait();

        lastDocument.status = 'Minted';
        lastDocument.nftMinted = true;
        await lastDocument.save();


        user.nfts.push({ document: lastDocument._id, nftStatus: 'Minted' });
        await user.save();

        res.status(200).json({ message: "NFT minted Successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Internal Error Occuring", error });
    }
} 