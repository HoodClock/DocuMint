import React from 'react';

function NftDetails({ nft, onClose }) {
    if (!nft) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <div className="bg-[#111318] text-white p-6 rounded-lg shadow-lg w-1/3 max-h-[80vh] overflow-y-auto">
                {/* NFT Thumbnail */}
                <img src={nft.nftThumbnail} className="w-full h-96 mb-4 rounded-lg" alt="NFT Thumbnail" />

                {/* Mint Date */}
                <p className="text-sm text-gray-400">
                    Mint Date: <span className="text-green-500">{new Date(nft.mintDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </p>

                {/* Status */}
                <h3 className="text-lg font-bold text-white mb-2">Status: {nft.status}</h3>

                {/* IPFS Hash */}
                <p className="text-lg mb-1">IPFS Hash: {nft.ipfsHash}</p>

                {/* Action Buttons */}
                <div className="flex justify-between items-center gap-5">
                    {/* View on IPFS Button */}
                    <a
                        href={`https://gateway.pinata.cloud/ipfs/${nft.ipfsHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#DBFD2D] text-black py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 mt-4"
                    >
                        View on IPFS
                    </a>

                    {/* Close Button */}
                    <button
                        className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-600 transition-all duration-200"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NftDetails;
