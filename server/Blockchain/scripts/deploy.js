const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const DocumentToken = await ethers.getContractFactory("DocumentToken");
    const documentToken = await DocumentToken.deploy(ethers.parseEther("1000000")); // 1 million tokens
    console.log("DocumentToken deployed to:", documentToken.target); // Use `.target` instead of `.address` in Ethers v6

    // Now deploy the DocumentNFT contract, passing the address of the DocumentToken contract
    const DocumentNFT = await ethers.getContractFactory("DocumentNFT");
    const documentNFT = await DocumentNFT.deploy(documentToken.target, ethers.parseEther("0.01")); // Setting the minting price to 0.01
    console.log("DocumentNFT deployed to:", documentNFT.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
