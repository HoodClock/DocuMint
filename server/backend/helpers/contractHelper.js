const { JsonRpcProvider, Contract } = require("ethers");
const { contractAddress, contractABI } = require("../../Blockchain/config");


const porvider = new JsonRpcProvider('http://127.0.0.1:8545');
const contract = new Contract(contractAddress, contractABI, porvider);

module.exports = contract;