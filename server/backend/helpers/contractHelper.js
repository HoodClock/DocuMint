const { JsonRpcProvider, Contract } = require("ethers");
const { contractAddress, contractABI } = require("../../Blockchain/config");
const ethers = require('ethers')

const provider = new JsonRpcProvider('http://127.0.0.1:8545');

const get_Contract_with_User = async (req, res, account_Wallet_Address, metaData, user) => {
    try {

        if (!user || !account_Wallet_Address) {
            return res.status(404).json({ message: "User or Wallet Address not found" });
        }

        const signer = await provider.getSigner(account_Wallet_Address);

        // making the contract instance
        const contract = new Contract(contractAddress, contractABI, signer);

        // now for the trasnsaction
        const transaction = await contract.mintDocument(account_Wallet_Address, metaData, {
            value: ethers.parseEther("0.01"),
        });

        return transaction;

    } catch (error) {
        console.log("Helper Contract Error: ", error);
        return res.status(500).json({ message: "Error setting up Contrat", error });
    }
}

module.exports = { provider, get_Contract_with_User };