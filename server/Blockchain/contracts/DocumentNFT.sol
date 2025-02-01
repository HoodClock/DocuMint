// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol"; // for ERC-721
import "./DocumentToken.sol";

contract DocumentNFT is ERC721 {
    mapping(uint256 => string) private _tokenMetaData;
    uint256 private _currentTokenId;
    address public tokenAddress;
    uint256 public mintingPrice;

    // the constructor for TOKEN (COIN)
    constructor(
        address _tokenAddress,
        uint256 _mintingPrice
    ) ERC721("DocumentNFT", "DOC") {
        tokenAddress = _tokenAddress;
        mintingPrice = _mintingPrice;
    }

    event DocumentMinted(
        address indexed to,
        uint256 indexed tokenId,
        string metaData
    );

    // mint an NFT
    function mintDocument(address to, string memory metadata) external payable {
        // Ensuring user approval to spend from your custom ERC-20 token
        DocumentToken token = DocumentToken(tokenAddress); // Using the custom token contract

        require(
            token.allowance(msg.sender, address(this)) >= mintingPrice,
            "Insufficient token allowance."
        );

        // Transfer token from USER => CONTRACT using the custom token contract
        require(
            token.transferFrom(msg.sender, address(this), mintingPrice),
            "Token transfer failed."
        );

        uint256 tokenId = _currentTokenId++;
        _mint(to, tokenId);
        _tokenMetaData[tokenId] = metadata;
        emit DocumentMinted(to, tokenId, metadata);
    }
}
