import React from 'react'

function TrasnformNFT() {
    return (
        <div className="transform-nft-container">
            <h2>Transform Document into NFT</h2>

            <div className="flex justify-center gap-4 p-5">
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-cyan-500 transition duration-300">
                    Convert to NFT
                </button>
                <button className="px-4 py-2 bg-gradient-to-r border text-white rounded-lg hover:bg-gradient-to-r  hover:bg-blue-500 border-blue-500 transition duration-300">Save for Later</button>
            </div>
        </div>
    )
}

export default TrasnformNFT
