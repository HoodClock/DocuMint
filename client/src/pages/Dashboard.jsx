import React, { useEffect, useState } from 'react'
import { Settings, ExitToApp, AccountCircle } from '@mui/icons-material';
import NftCollection from '../components/NftCollections'
import TxHistory from '../components/TxHistory'
import Documentation from '../components/Documentation'
import SideBar from '../components/SideBar';
import UploadCard from '../components/UploadCard'
import RecentActivity from '../components/RecentActivity'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ConnectWallet from '../components/ConnectWallet';

function Dashboard() {

    const [activeTab, setActiveTab] = useState('NFT');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const verifyUser = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/user/visiting/dashboard', { withCredentials: true });

                setUserData(response.data);

            } catch (error) {
                navigate('/login');
            }
        }

        verifyUser();

    }, [navigate]);



    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:3000/api/auth/logout/Signing-out/', {
                withCredentials: true
            });


            navigate('/');

        } catch (error) {
            console.log("Axios Error Occuring", error);
        }

    }

    const handleProfile = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/user/profile/user-persona', { withCredentials: true });

            setUserData(response.data);

            navigate('/profile');

        } catch (error) {
            console.log("Axios Error Occuring", error);
        }
    }

    return (
        <div className="flex min-h-screen bg-[#111318] text-white font-roboto">

            {/* Side Bar */}
            <SideBar />

            {/* Main Content Area */}
            <main className="flex-grow p-10 bg-[#111318] overflow-y-auto">

                {/* Top Bar */}
                <header className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-900 via-black to-gray-800 rounded-lg mb-6">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-purple-600 bg-clip-text text-transparent">
                        Welcome, {userData?.username || "loading"}
                    </h1>
                    <div className="flex space-x-4 items-center relative">
                        {/* Notification Icon */}
                        <ConnectWallet />

                        {/* Profile Icon and Dropdown */}
                        <div
                            className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center cursor-pointer relative"
                            onClick={() => setDropdownVisible(!dropdownVisible)}
                        >
                            <img src="./Images/LOGO.png" alt="User" className="w-full h-full object-cover" />
                        </div>

                        {/* Dropdown Box */}
                        {dropdownVisible && (
                            <div className="absolute top-20 right-0 bg-gray-800 text-white shadow-lg rounded-md p-4 w-64 z-50">
                                {/* User Info */}
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-14 h-14 rounded-full overflow-hidden">
                                        <img src="./Images/LOGO.png" alt="User" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-yellow-400">{userData?.username || "Loading..."}</p>
                                        <p className="text-sm text-gray-400">{userData?.email || "Loading..."}</p>
                                    </div>
                                </div>

                                {/* Options */}
                                <div className="flex flex-col space-y-2">
                                    <button onClick={handleProfile} className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                                        <AccountCircle className="text-blue-400" />
                                        <span className="text-white">Profile</span>
                                    </button>
                                    <button className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                                        <Settings className="text-yellow-400" />
                                        <span className="text-white">Account Settings</span>
                                    </button>
                                    <button onClick={handleLogout} className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                                        <ExitToApp className="text-red-400" />
                                        <span className="text-white">Logout</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </header>

                {/* Hero Section - Upload Document Box */}
                <div className="flex flex-wrap justify-center items-center h-screen space-x-8"> {/* Flex container for side-by-side layout */}

                    {/* Upload Section */}
                    <UploadCard />


                    {/* RECENT ACITVITY SECTION */}
                    <RecentActivity />
                </div>

                {/* Tabs for Navigation */}
                <div className='border-b-2 border-zinc-800'>
                    <h1 className=' font-sans text-zinc-100 mb-3 text-3xl font-extrabold'>DocuMints..</h1>
                    <div className='flex items-center gap-9'>
                        <h2 onClick={() => setActiveTab("NFT")} className='font-sans font-bold text-xl p-2 hover: cursor-pointer hover:text-[#DBFD2D]'>User NFT's</h2>
                        <h2 onClick={() => setActiveTab("Tx")} className='font-sans font-bold text-xl p-2 hover: cursor-pointer hover:text-[#DBFD2D]'>Transactions</h2>
                        <h2 onClick={() => setActiveTab(    "Docs")} className='font-sans font-bold text-xl p-2 hover: cursor-pointer hover:text-[#DBFD2D]'>How it works</h2>
                    </div>
                </div>
                {/* Showcasing different Components on above choices */}
                <div className='m-2'>{activeTab === 'NFT' ? <NftCollection /> : activeTab === 'Tx' ? <TxHistory /> : <Documentation />}</div>
                <div>
                    <p className='font-semibold'>@ 2024/25 Carved and Created by <span className='text-red-500'>Moiz Ali</span></p>
                </div>
            </main>
        </div>
    )
}

export default Dashboard