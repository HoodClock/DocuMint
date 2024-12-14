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
import { motion } from 'framer-motion'
import UserWallet from '../components/userWallet';

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
        <div className="flex h-screen overflow-hidden bg-[#1C1E2A] text-white font-roboto">

            {/* Side Bar */}
            <SideBar />

            {/* Main Content Area */}
            <main className="flex-grow p-10 bg-[#111318] overflow-y-auto relative">

                {/* Top Bar */}
                <header className="flex justify-between items-center p-4 rounded-lg mb-6">
                    <h1 className="text-7xl font-extrabold bg-gradient-to-tr from-pink-500 to-blue-500 bg-clip-text text-transparent">
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
                                        <p className="text-lg font-bold text-pink-400">{userData?.username || "Loading..."}</p>
                                        <p className="text-sm text-gray-400">{userData?.email || "Loading..."}</p>
                                    </div>
                                </div>

                                {/* Options */}
                                <div className="flex flex-col space-y-2">
                                    <button onClick={handleProfile} className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                                        <AccountCircle className="text-pink-400" />
                                        <span className="text-white">Profile</span>
                                    </button>
                                    <button className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                                        <Settings className="text-pink-400" />
                                        <span className="text-white">Account Settings</span>
                                    </button>
                                    <button onClick={handleLogout} className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                                        <ExitToApp className="text-pink-400" />
                                        <span className="text-white">Logout</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </header>

                {/* Hero Section - Upload Document Box */}
                <div className="flex flex-wrap gap-2 justify-center items-center h-auto p-1 mt-10 space-x-10"> {/* Flex container for side-by-side layout */}

                    {/* Upload Section */}
                    <UploadCard />


                    {/* RECENT ACITVITY SECTION */}
                    <RecentActivity />


                    {/* User Wallet */}
                    <UserWallet />

                </div>


                {/* Tabs for Navigation */}
                <div className='border-b-2 border-zinc-800 pt-32'>
                    <h1 className=' font-sans text-zinc-100 mb-3 text-3xl font-extrabold'>DocuMints..</h1>
                    <div className='flex items-center gap-9'>
                        <h2
                            onClick={() => setActiveTab("NFT")}
                            className={`font-sans font-bold text-xl p-2 cursor-pointer ${activeTab === "NFT" ? "text-[#FD4C8D]" : "hover:text-[#FD4C8D] text-zinc-100"
                                }`}
                        >
                            User NFT's
                        </h2>
                        <h2
                            onClick={() => setActiveTab("Tx")}
                            className={`font-sans font-bold text-xl p-2 cursor-pointer ${activeTab === "Tx" ? "text-[#FD4C8D]" : "hover:text-[#FD4C8D] text-zinc-100"
                                }`}
                        >
                            Transactions
                        </h2>
                        <h2
                            onClick={() => setActiveTab("Docs")}
                            className={`font-sans font-bold text-xl p-2 cursor-pointer ${activeTab === "Docs" ? "text-[#FD4C8D]" : "hover:text-[#FD4C8D] text-zinc-100"
                                }`}
                        >
                            How it works
                        </h2>
                    </div>
                </div>
                <div className='h-50 w-50'>
                    {/* Showcasing different Components on above choices */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 1 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -1 }}
                        transition={{ duration: 1.5 }}
                        layout
                        className="relative overflow-hidden"
                    >
                        {activeTab === 'NFT' ? <NftCollection /> : activeTab === 'Tx' ? <TxHistory /> : <Documentation />}
                    </motion.div>
                </div>
                <div>
                    <p className='font-semibold'>@ 2024/25 Carved and Created by <span className='text-red-500'>Moiz Ali</span></p>
                </div>
            </main>
        </div>
    )
}

export default Dashboard