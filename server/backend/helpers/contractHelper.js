const { JsonRpcProvider, Contract } = require("ethers");
const { contractAddress, contractABI } = require("../../Blockchain/config");

const porvider = new JsonRpcProvider('http://127.0.0.1:8545');

const get_Contract_with_User = async (req, res, walletAddress, metaData, user) => {
    try {

        if (!user || !walletAddress) {
            return res.status(404).json({ message: "User or Wallet Address not found" });
        }

        const signer = porvider.getSigner(walletAddress);

        // making the contract instance
        const contract = new Contract(contractAddress, contractABI, signer);

        // now for the trasnsaction
        const transaction = await contract.mintDocument(walletAddress, metaData);

        console.log("Transaction", transaction.hash);

        return transaction;

    } catch (error) {
        throw new Error("Error setting up Contrat", error);
    }
}

module.exports = { get_Contract_with_User };