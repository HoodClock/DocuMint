// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DocumentToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("DocumentToken", "DOC") {
        _mint(msg.sender, initialSupply);
    }
}
