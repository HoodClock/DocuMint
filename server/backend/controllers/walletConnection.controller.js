exports.setWalletCookie = async (req, res) => {
    try {
        const { walletAddress } = req.body;

        if (!walletAddress) return res.status(400).send('Wallet address is required');

        // Set wallet address in a secure HTTP-only cookie
        res.cookie('walletAddress', walletAddress, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // one day expiration
        });

        res.status(200).send('Wallet address set in cookie');

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

exports.fetchWalletAddress = async (req, res) => {
    try {
        const walletAddress = req.cookies.walletAddress;
        if (!walletAddress) return res.status(401).json({ message: "wallet Address not found" });

        res.status(200).send({ walletAddress });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error Occured", error });
    }
} 