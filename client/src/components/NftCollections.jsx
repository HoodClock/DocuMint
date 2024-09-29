import React, { useState } from 'react'
import NftDetails from './NftDetails';
import { FilterList } from '@mui/icons-material'

function NftCollections() {

  const [selectedNFT, setSelectedNFT] = useState(null);
  const [selectedType, setSelectedType] = useState('ALL');

  // Sample Data nft's
  const nftData = [
    { id: 1, documentType: 'Legal', mintDate: '2024-09-29', ipfsHash: 'Qm123...', status: 'Minted', imageURL: './Images/nft1.jpg' },
    { id: 2, documentType: 'Personal', mintDate: '2024-09-28', ipfsHash: 'Qm456...', status: 'Transferred', imageURL: './Images/nft2.jpg' },
    { id: 3, documentType: 'Official', mintDate: '2024-09-28', ipfsHash: 'Qm456...', status: 'Minted', imageURL: './Images/nft2.jpg' }
  ];

  const filteredNFT = selectedType === 'ALL' ? nftData : nftData.filter(nft => nft.documentType === selectedType);

  return (
    <div className="bg-[#111318] p-6 rounded-lg shadow-lg mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">NFT Collection</h2>
        <div className="flex items-center space-x-2">
          <FilterList className="mr-2" />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-black text-white p-2 rounded-md border border-gray-600"
          >
            <option value="ALL">All Types</option>
            <option value="Legal">Legal</option>
            <option value="Personal">Personal</option>
            <option value="Official">Official</option>
            <option value="Educational">Educational</option>
          </select>
        </div>
      </div>

      {/* Outer Container for NFTs */}
      <div className="bg-[#22272e] rounded-lg p-6 shadow-lg overflow-hidden w-auto mb-6"> {/* Adjusted overflow property */}

        {/* NFT Cards Container */}
        <div className="flex flex-wrap w-auto ">

          {filteredNFT.map((nft) => (
            <div
              key={nft.id}
              className="min-w-[250px] max-w-[250px] bg-[#111318] rounded-lg p-4 shadow-md cursor-pointer hover:bg-[#1d1f24] transition-all duration-200 mx-2 my-2"
              onClick={() => setSelectedNFT(nft)}
            >
              {/* Image Placeholder */}
              <div className="bg-[#DBFD2D] rounded-md h-40 mb-4 flex items-center justify-center overflow-hidden">
                <img src={nft.imageURL} className="object-cover h-full w-full" alt={nft.documentType} />
              </div>
              {/* NFT Info */}
              <h3 className="text-lg font-bold text-white mb-2">{nft.documentType}</h3>
              <p className="text-sm text-gray-400">Status: <span className='text-green-500'>{nft.status}</span></p>
            </div>
          ))}

        </div>

      </div>

      {/* Display NFTDetail when an NFT is clicked */}
      {selectedNFT && <NftDetails nft={selectedNFT} onClose={() => setSelectedNFT(null)} />}
    </div>
  )
}

export default NftCollections
