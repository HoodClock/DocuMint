import React, { useEffect, useState } from 'react'
import { GridView, Notifications, ExitToApp, History, Settings, Logout, Info, AccountCircle, AttachFile } from '@mui/icons-material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from '@mui/icons-material/Close';
import NftCollection from '../components/NftCollections'
import TxHistory from '../components/TxHistory'
import Documentation from '../components/Documentation'
import SideBar from '../components/SideBar';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

    const [activeTab, setActiveTab] = useState('NFT');
    const [activeUploadDocs, setActiveUploadDocs] = useState();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const verifyUser = async () => {
            try {
                await axios.get('http://localhost:3000/api/user/visiting/dashboard', { withCredentials: true });
            } catch (error) {
                navigate('/login');
            }
        }

        verifyUser();

    }, [navigate]);

    const handleOpenModel = async () => {
        setActiveUploadDocs(true);
    }

    const handleCloseModel = async () => {
        setActiveUploadDocs(false);
    }

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
            await axios.get('http://localhost:3000/api/user/profile/user-persona', { withCredentials: true });

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
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                        Welcome, User!
                    </h1>
                    <div className="flex space-x-4 items-center relative">
                        {/* Notification Icon */}
                        <Notifications className="hover:text-yellow-400 cursor-pointer text-white" />

                        {/* Profile Icon and Dropdown */}
                        <div
                            className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center cursor-pointer relative border-2 border-white"
                            onClick={() => setDropdownVisible(!dropdownVisible)}
                        >
                            <img src="./Images/LOGO.png" alt="User" className="w-full h-full object-cover" />
                        </div>

                        {/* Dropdown Box */}
                        {dropdownVisible && (
                            <div className="absolute top-20 right-0 bg-gray-800 text-white shadow-lg rounded-md p-4 w-64 z-50">
                                {/* User Info */}
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-green-400">
                                        <img src="./Images/LOGO.png" alt="User" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold text-green-400">Username</p>
                                        <p className="text-sm text-gray-400">user@example.com</p>
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

                    {/* Container Box with Upload Icon and Text */}
                    <div
                        className="bg-[#000000] p-10 rounded-lg flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                        onClick={handleOpenModel} // Open modal on click
                    >
                        <UploadFileIcon style={{ color: '#DBFD2D', fontSize: '5rem' }} />
                        <p className="mt-4 text-white font-bold text-center text-lg">Click to upload your document!</p>
                    </div>

                    {/* Modal for Upload Details */}
                    {activeUploadDocs && (
                        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
                            <div className="bg-[#141721] p-10 rounded-lg shadow-lg w-full max-w-lg relative">
                                {/* Close Button */}
                                <button
                                    className="absolute top-2 right-2 text-[#DBFD2D] hover:text-[#8FFD2D] transition-colors"
                                    onClick={handleCloseModel} // Close modal on click
                                >
                                    <CloseIcon />
                                </button>

                                <h2 className="text-2xl font-bold text-[#DBFD2D] mb-6 text-center">Upload Document Details</h2>

                                {/* Input Fields */}
                                <div className="mb-4">
                                    <label htmlFor="docName" className="block text-[#ffffff] mb-2 font-bold">Document Name</label>
                                    <input
                                        id="docName"
                                        type="text"
                                        className="w-full p-3 rounded bg-[#000000] text-[#ffffff] focus:border-[#8FFD2D] transition-colors"
                                        placeholder="Enter Document Name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="docDesc" className="block text-[#ffffff] mb-2 font-bold">Document Description (Optional)</label>
                                    <textarea
                                        id="docDesc"
                                        rows="3"
                                        className="w-full p-3 rounded bg-[#000000] text-[#ffffff] transition-colors"
                                        placeholder="Enter a short description"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="documentType" className="block text-[#f9f9f9] mb-2 font-bold">Select Document Type</label>
                                    <select
                                        id="documentType"
                                        className="w-full p-3 rounded bg-[#000000] text-[#ededed] transition-colors"
                                    >
                                        <option className="bg-black text-[#DBFD2D]">Legal</option>
                                        <option className="bg-black text-[#DBFD2D]">Personal</option>
                                        <option className="bg-black text-[#DBFD2D]">Official</option>
                                        <option className="bg-black text-[#DBFD2D]">Educational</option>
                                    </select>
                                </div>

                                {/* Transform Button */}
                                <div className="mt-8 flex justify-center">
                                    <button
                                        className="bg-[#DBFD2D] text-black py-3 w-full shadow-lg rounded-full hover:bg-[#eeee47] transition-all duration-600 font-bold"
                                        onClick={() => alert('Transform to NFT')} // Placeholder for transform action
                                    >
                                        Transform to NFT
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Right: Recent Activity Box */}
                    <section className="bg-[#000000] p-6 rounded-lg mb-10 shadow-lg border-b-[#141721] flex-grow">
                        <h2 className="text-2xl font-bold text-white mb-4 tracking-wide">Recent Activity</h2>

                        <table className="min-w-full rounded-lg">
                            <thead>
                                <tr>
                                    <th className="text-left p-4 text-gray-300">Document Name</th>
                                    <th className="text-left p-4 text-gray-300">Created On</th>
                                    <th className="text-left p-4 text-gray-300">Status</th>
                                </tr>
                                <tr>
                                    <td colSpan="3" className="border-b-2 border-zinc-100" />
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="p-4 text-gray-200 flex items-center">
                                        <AttachFile className="w-6 h-6" titleAccess="Attachment" />
                                        Document1.pdf
                                    </td>
                                    <td className="p-4 text-gray-400">User1<br />2024-09-28</td>
                                    <td className="p-4 text-yellow-400">Uploaded</td>
                                </tr>
                                <tr className="border-b border-gray-700">
                                    <td className="p-4 text-gray-200 flex items-center">
                                        <AttachFile className="w-6 h-6" titleAccess="Attachment" />
                                        Document2.docx
                                    </td>
                                    <td className="p-4 text-gray-400">User2<br />2024-09-27</td>
                                    <td className="p-4 text-green-400">Verified</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>

                {/* Tabs for Navigation */}
                <div className='border-b-2 border-zinc-800'>
                    <h1 className=' font-sans text-zinc-100 mb-3 text-3xl font-extrabold'>DocuMints..</h1>
                    <div className='flex items-center gap-9'>
                        <h2 onClick={() => setActiveTab("NFT")} className='font-sans font-bold text-xl p-2 hover: cursor-pointer hover:text-[#DBFD2D]'>User NFT's</h2>
                        <h2 onClick={() => setActiveTab("Tx")} className='font-sans font-bold text-xl p-2 hover: cursor-pointer hover:text-[#DBFD2D]'>Transactions</h2>
                        <h2 onClick={() => setActiveTab("Docs")} className='font-sans font-bold text-xl p-2 hover: cursor-pointer hover:text-[#DBFD2D]'>How it works</h2>
                    </div>
                </div>
                {/* Showcasing different Components on above choices */}
                <div className='m-2'>{activeTab === 'NFT' ? <NftCollection /> : activeTab === 'Tx' ? <TxHistory /> : <Documentation />}</div>
            </main>
        </div>
    )
}

export default Dashboard
