const documentModel = require('../models/Document.model');
const userModel = require('../models/User.model');
const nftModel = require('../models/NFT.model');
const txModel = require('../models/TransactionHistory.model');
const { provider, get_Contract_with_User } = require('../helpers/contractHelper');
const ethers = require('ethers')

// NEED INTEGRATE THE WALLET (META MASK);

// Create the NFT ✅
// Get All the NFT ✅

exports.mintNFT = async (req, res) => {

    try {
        const userId = req.params.userId;

        const account_Wallet_Address = req.body.account;

        const user = await userModel.findById(userId);

        const lastDocument = await documentModel.findOne().sort({ createdAt: -1 });

        if (!lastDocument) {
            return res.status(404).json({ message: "Document not found" });
        }

        const documentID = lastDocument._id;
        const pixelsArtThumbnail = `${process.env.DICE_BEAR_API}?seed=${documentID}`

        const metaData = lastDocument.IPFSHash;

        const transaction = await get_Contract_with_User(req, res, account_Wallet_Address, metaData, user);

        await transaction.wait();

        const receipt = await provider.getTransactionReceipt(transaction.hash);

        const documentStatus = lastDocument.status = 'Minted';
        lastDocument.nftMinted = true;
        await lastDocument.save();

        // Add the minted NFT to the user Model
        const nft = new nftModel({
            owner: userId,
            document: lastDocument._id,
            nftThumbnail: pixelsArtThumbnail,
            ipfsHash: metaData,
            status: documentStatus
        })

        await nft.save();

        // Now record the transaction to user Model through TxModel
        const tx = new txModel({
            user: userId,
            nft: nft._id,
            transactionType: "Minted",
            transactionHash: transaction.hash,
            from: transaction.from,
            to: transaction.to,
            gasUsed: receipt.gasUsed.toString(),
            value: transaction.value ? ethers.formatEther(transaction.value) : "0.0",
            blockNumber: transaction.blockNumber,
        })

        await tx.save();

        user.nfts.push(nft._id);
        user.transactionHistroy.push(tx._id);
        await user.save();

        res.status(200).json({ message: "NFT minted Successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Internal Error Occuring", error });
    }
}

exports.getNfts = async (req, res) => {
    try {
        const nfts = await nftModel.find({ owner: req.user._id });

        if (!nfts.length) {
            return res.status(404).json({ success: false, message: "No NFTs found for this user." });
        }

        res.status(200).json({ success: true, nfts });

    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}

exports.lastNft = async (req, res) => {
    try {
        const latestNft = await nftModel.findOne().sort({ mintDate: -1 });

        res.status(200).json({ success: true, latestNft });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}