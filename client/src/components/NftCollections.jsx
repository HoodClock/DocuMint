import React, { useState } from 'react';
import NftDetails from './NftDetails';
import { FilterList } from '@mui/icons-material';
import useNfts from '../context/NftsContext'; // Assuming you have created this custom hook

function NftCollections() {
  const { nfts, loading, error } = useNfts();  // Using the custom hook to fetch NFTs
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [selectedType, setSelectedType] = useState('ALL');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredNFT = selectedType === 'ALL'
    ? nfts
    : nfts.filter((nft) => nft.status === selectedType);

  return (
    <div className="bg-[#111318] p-6 rounded-lg shadow-lg mb-10 h-[calc(100vh-150px)] overflow-y-auto scrollbar-custom pt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">NFT Collection</h2>
        <div className="flex items-center space-x-2">
          <FilterList className="mr-2" />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-black text-white p-2 rounded-md border border-gray-600"
          >
            <option value="ALL">All Status</option>
            <option value="Minted">Minted</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      <div className="bg-[#22272e] rounded-lg p-6 shadow-lg overflow-hidden w-auto mb-6">
        {filteredNFT.length > 0 ? (
          <div className="flex flex-wrap w-auto">
            {filteredNFT.map((nft) => (
              <div
                key={nft._id}
                className="min-w-[250px] max-w-[250px] bg-[#111318] rounded-lg p-4 shadow-md cursor-pointer hover:bg-[#1d1f24] transition-all duration-200 mx-2 my-2"
                onClick={() => setSelectedNFT(nft)}
              >
                <div className="bg-gradient-to-r from-purple-800 to-pink-900 rounded-md h-40 mb-4 flex items-center justify-center overflow-hidden">
                  <img src={nft.nftThumbnail} className="object-cover h-full w-full" alt="NFT Thumbnail" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{nft.status}</h3>
                <p className="text-sm text-gray-400">
                  Mint Date: <span className="text-green-500">{new Date(nft.mintDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-center">No NFTs available or loading...</p>
        )}
      </div>

      {selectedNFT && <NftDetails nft={selectedNFT} onClose={() => setSelectedNFT(null)} />}
    </div>
  );
}

export default NftCollections;
