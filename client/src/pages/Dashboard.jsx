import React, { useState } from 'react'
import NftCollection from '../components/NftCollections'
import TxHistory from '../components/TxHistory'
import Documentation from '../components/Documentation'
import Quests from '../components/Quests'
import SideBar from '../components/SideBar';
import UploadCard from '../components/UploadCard'
import RecentActivity from '../components/RecentActivity'
import { motion } from 'framer-motion'
import UserWallet from '../components/userWallet';
import Header from '../components/header';
import useVerifyUser from '../context/verifyUserContext';

function Dashboard() {

    const [activeTab, setActiveTab] = useState('NFT');
    const userData = useVerifyUser();

    return (
        <div className="flex h-screen overflow-hidden bg-[#1C1E2A] text-white font-roboto">

            {/* Side Bar */}
            <SideBar />

            {/* Main Content Area */}
            <main className="flex-grow p-10 bg-[#111318] overflow-y-auto relative">

                {/* Top bar */}
                <Header />



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
                            onClick={() => setActiveTab("Quest")}
                            className={`font-sans font-bold text-xl p-2 cursor-pointer ${activeTab === "Quest" ? "text-[#FD4C8D]" : "hover:text-[#FD4C8D] text-zinc-100"
                                }`}
                        >
                            Your Quests
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
                        {activeTab === 'NFT' ? <NftCollection /> : activeTab === 'Tx' ? <TxHistory /> : activeTab === 'Quest' ? <Quests /> : <Documentation />}
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