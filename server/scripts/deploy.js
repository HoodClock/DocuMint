const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const DocumentNFT = await ethers.getContractFactory("DocumentNFT");
    const documentNFT = await DocumentNFT.deploy();

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
