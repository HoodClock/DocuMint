import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import UserDocumentStats from '../components/UserDocumentStats';
import ArticleIcon from '@mui/icons-material/Article';
import GridViewIcon from '@mui/icons-material/GridView';
import UserNftStats from '../components/UserNftStats';

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
    // /Images/profileBackground.jpg
    return (
        <div className="h-screen max-h-screen bg-cover bg-center text-white font-poppins p-6 overflow-auto bg-[url('https://images2.alphacoders.com/137/1372963.png')]">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Profile Header */}
            <div className="text-center w-full shadow-xl relative shadow-purple-500 opacity-85 h-48 rounded-xl object-cover bg-[url(/Images/profileBanner.jpg)] ">
                <div className='absolute top-1/2 left-[10%] transform translate-x-[-50%] translate-y-[-50%] m-auto hover:scale-110 hover:cursor-pointer'>
                    <h1 className='bg-purple-800 font-bold rounded-xl p-4'>
                        <a href="/dashboard">
                            Back to Dashboard
                        </a>
                    </h1>
                </div>
                <img
                    src={userData?.profilePicture}
                    alt="Avatar"
                    className="w-32 h-32 absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[-50%] m-auto border-t-[4px] border-b-[6px] border-l-[10px] border-r-[6px] border-transparent border-t-purple-400 border-b-purple-400 mx-auto -mt-12 shadow-lg shadow-purple-500"
                />
            </div>

            {/* Main Content */}
            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* About Section */}
                <div className="bg-gradient-to-r from-[#2a2f4b] to-[#392160] p-6 rounded-3xl  shadow-xl">
                    <div className='flex'>
                        <div>
                            <EmojiPeopleIcon style={{ "color": "yellow", "fontSize": "26px" }} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold mb-4 text-gray-200">About</h2>
                        </div>
                    </div>
                    <h1 className="mt-4 text-2xl font-bold text-white">{userData?.username || "User"}</h1>
                    <p className="text-sm text-gray-400">{userData?.email || "example@domain.com"}</p>
                    <p className="text-sm text-gray-300 mt-4">
                        Premium User:{" "}
                        <span className={userData?.isPremiumUser ? "text-green-400" : "text-yellow-300"}>
                            {userData?.isPremiumUser ? "You are our Premium User" : "You are not out Premium User"}
                            {userData?.isPremiumUser ?
                                <div></div>
                                :
                                <div className='flex justify-center mt-9 items-center'>
                                    <button className='w-[60%]  p-4 shadow-md rounded-md text-xl font-extrabold mt-5 bg-[#6155FD] text-white hover:shadow-xl transform hover:scale-105  hover:shadow-purple-200 transition-all'>Become One</button>
                                </div>
                            }
                        </span>
                    </p>
                </div>

                {/* Statistics Section */}
                <div className="rounded-3xl bg-gradient-to-r from-[#2a2f4b] to-[#392160] shadow-lg">
                    <div className='flex items-center justify-center gap-2 p-2'>
                        <ArticleIcon style={{ "fontSize": "26px", "color": "yellow" }} />
                        <h1 className='text-3xl font-bold'>Docs</h1>
                    </div>
                    <hr className='opacity-30' />
                    <UserDocumentStats userData={userData} target={100} />
                </div>
                {/* NFT Section */}
                <div className="rounded-3xl bg-gradient-to-r from-[#2a2f4b] to-[#392160] shadow-lg">
                    <div className='flex items-center justify-center gap-2 p-2'>
                        <GridViewIcon style={{ "fontSize": "26px", "color": "green" }} />
                        <h1 className='text-3xl font-bold'>NFTs</h1>
                    </div>
                    <hr className='opacity-30' />
                    <UserNftStats userData={userData} target={100} />
                </div>

            </div>
        </div>
    )
}

export default Profile
