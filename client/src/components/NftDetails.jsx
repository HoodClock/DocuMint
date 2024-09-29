import React from 'react'

function NftDetails({ nft, onClose }) {
    if (!nft) return null
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <div className="bg-[#111318] text-white p-6 rounded-lg shadow-lg w-1/3 max-h-[80vh] overflow-y-auto">
                <img src={nft.imageURL} alt={nft.documentType} className="w-full h-96 mb-4 rounded-lg" />
                <h2 className="text-2xl font-extrabold mb-2 text-center">{nft.documentType}</h2>
                <p className="text-lg mb-1">Mint Date: {nft.mintDate}</p>
                <p className="text-lg mb-1">Status: <span className={nft.status === 'Minted' ? 'text-green-400' : 'text-yellow-400'}>{nft.status}</span></p>
                <p className="text-lg mb-1">IPFS Hash: {nft.ipfsHash}</p>
                <div className='flex justify-between items-center gap-5'>
                    <a
                        href={`https://gateway.pinata.cloud/ipfs/${nft.ipfsHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#DBFD2D] text-black py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 mt-4"
                    >
                        View on IPFS
                    </a>

                    <button
                        className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-red-600 transition-all duration-200"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>


    )
}

export default NftDetails
