const { JsonRpcProvider, Contract } = require("ethers");
const { contractAddress, contractABI, tokenAddress, DocTokenABI } = require("../../Blockchain/config");
const ethers = require('ethers')

const provider = new JsonRpcProvider('http://127.0.0.1:8545');

const get_Contract_with_User = async (req, res, account_Wallet_Address, metaData, user) => {
    try {

        if (!user || !account_Wallet_Address) {
            return res.status(404).json({ message: "User or Wallet Address not found" });
        }

        const signer = await provider.getSigner(account_Wallet_Address);

        // token contract instance
        const tokenContract = new Contract(tokenAddress, DocTokenABI, signer);
        const mintingPrice = ethers.parseUnits("10", 18);

        // making the contract instance
        const contract = new Contract(contractAddress, contractABI, signer);

        // approval before minting
        const approveTx = await tokenContract.approve(contractAddress, mintingPrice);
        await approveTx.wait();

        // now for the trasnsaction
        const transaction = await contract.mintDocument(account_Wallet_Address, metaData);

        return transaction;

    } catch (error) {
        console.log("Helper Contract Error: ", error);
        return res.status(500).json({ message: "Error setting up Contrat", error });
    }
}

module.exports = { provider, get_Contract_with_User };