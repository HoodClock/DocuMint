// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DocumentNFT is ERC721 {
    mapping(uint256 => string) private _tokenMetaData;
    uint256 private _currentTokenId;

    event DocumentMinted(
        address indexed to,
        uint256 indexed tokenId,
        string metaData
    );

    constructor() ERC721("DocumentNFT", "DOC") {}

    // mint an NFT
    function mintDocument(address to, string memory metadata) external {
        uint256 tokenId = _currentTokenId++;
        _mint(to, tokenId);
        _tokenMetaData[tokenId] = metadata; // stores metadata
        emit DocumentMinted(to, tokenId, metadata); // emiting event
    }

    // Get_Minted_NFT
    function getTokenMetaData(
        uint256 tokenId
    ) external view returns (string memory) {
        return _tokenMetaData[tokenId]; // fetched metadata according to tokenID
    }
}
