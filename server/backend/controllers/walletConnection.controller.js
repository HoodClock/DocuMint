const { encrypt, decrypt } = require('../utils/encryptionDecryption')

// ALL THE REQUESTS CONTROLLER
exports.setWalletCookie = async (req, res) => {
    try {
        const { walletAddress } = req.body;

        console.log('Request Body:', req.body);

        console.log('WALLET ADDRESS', walletAddress);

        console.log('Encryption Key:', process.env.ENCRYPTION_KEY);

        if (!walletAddress) return res.status(400).send('Wallet address is required');

        // now encrypt wallet address
        const encryptedWallet = encrypt(walletAddress);

        console.log('Encrypted Wallet Address:', encryptedWallet);

        // Set wallet address in a secure HTTP-only cookie
        res.cookie('walletAddress', encryptedWallet, {
            httpOnly: true,
            sameSite: 'lax'
        });

        res.status(200).send('Wallet address set in cookie');

    } catch (error) {
        console.error('Error in setWalletCookie:', error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

exports.fetchWalletAddress = async (req, res) => {
    try {
        const encryptedWallet = req.cookies.walletAddress;

        if (!encryptedWallet) return res.status(401).json({ message: "wallet Address not found" });

        const walletAddress = decrypt(encryptedWallet);

        res.status(200).send({ walletAddress });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error Occured", error });
    }
}

exports.clearWalletCookie = async (req, res) => {
    try {
        res.clearCookie('walletAddress');
        res.status(200).send('Wallet address cookie cleared');
    } catch (error) {
        res.status(500).json({ message: 'Error clearing cookie', error });
    }
};