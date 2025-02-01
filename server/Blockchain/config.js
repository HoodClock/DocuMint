const contractAddress = "0x7b458A568380f77bBCb9B8D915D9B850E5109B22"
const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
const contractABI = require('./artifacts/contracts/DocumentNFT.sol/DocumentNFT.json').abi
const DocTokenABI = require('./artifacts/contracts/DocumentToken.sol/DocumentToken.json').abi

module.exports = { contractAddress, contractABI, tokenAddress, DocTokenABI };