import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import axios from 'axios';

function Profile() {

    const [userData, setUserData] = useState(null);
    const [lastNft, setLastNft] = useState(null);


    useEffect(() => {
        const profileRequest = async () => {
            const response = await axios.get('http://localhost:3000/api/user/profile/user-persona', { withCredentials: true });
            setUserData(response.data);
        }

        profileRequest();

        const getLastNft = async () => {
            const response = await axios.get('http://localhost:3000/api/nfts/latestNft/last-nft-fetching', { withCredentials: true })
            setLastNft(response.data.latestNft);
        }

        getLastNft();

    }, []);

    return (
        <div className="flex min-h-screen bg-[#111318] text-white">
            {/* Sidebar */}
            <SideBar />

            {/* Main content */}
            <div className="flex flex-col items-center justify-center w-full p-8">
                <h1 className="text-4xl font-bold text-center mb-8 font-poppins bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent">
                    Persona
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                    {/* First Card - User Info */}
                    <div className="user-select-none mx-auto bg-[#231e39] text-[#b3b8cd] rounded-lg w-80 text-center shadow-lg p-4">
                        {/* Profile Image */}
                        <img
                            src="/Images/LOGO.png"
                            className="h-50 w-50 rounded-full mx-auto p-2 object-cover"
                            alt="Profile"
                        />

                        {/* User Name */}
                        <div className="text-xl font-bold mt-4">{userData?.username || "Loading..."}</div>

                        {/* Buttons */}
                        <div className="mt-4">
                            <h2 className='font-bold hover:text-[#5bcfcd] hover: cursor-pointer'>{userData?.email || "Loading..."}</h2>
                        </div>
                    </div>

                    {/* Second Card - DocuMint Stats */}
                    <div className="bg-[#231e39] rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:bg-[#231e39] w-96">
                        <h3 className="text-2xl font-semibold mb-4">DocuMint Stats</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {/* NFT Owned */}
                            <div className="bg-gray-700 rounded-lg p-4 flex items-center transition-transform hover:bg-[#304fc9]">
                                <div className="bg-blue-500 p-3 rounded-full mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12h2M12 12v2m0-2V9m0 0h-2m2 0H9m3 3h2m-2 0v2m0-2v-2" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg font-bold">NFTs Owned: <span className="font-bold text-green-300">{userData?.nfts.length}</span></p>
                                </div>
                            </div>

                            {/* Documents Uploaded */}
                            <div className="bg-gray-700 rounded-lg p-4 flex items-center transition-transform hover:bg-[#255c5b] ">
                                <div className="bg-green-500 p-3 rounded-full mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8M8 8v8M4 8v8M20 8v8" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg font-bold">Documents Uploaded: <span className="font-bold text-green-300 ">{userData?.documents.length}</span></p>
                                </div>
                            </div>

                            {/* Last NFT Created */}
                            <div className="bg-gray-700 rounded-lg p-4 flex items-center transition-transform hover:bg-[#7e41c9]">
                                <div className="bg-purple-500 p-3 rounded-full mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12h2M12 12v2m0-2V9m0 0h-2m2 0H9m3 3h2m-2 0v2m0-2v-2" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg font-bold">
                                        Last NFT Created:{" "}
                                        <span className="font-bold text-gray-300">
                                            {lastNft?.mintDate && new Date(lastNft.mintDate).toLocaleDateString("en-GB")}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile
