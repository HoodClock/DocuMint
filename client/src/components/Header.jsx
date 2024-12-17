import React, { useState } from 'react'
import ConnectWallet from '../components/ConnectWallet';
import axios from 'axios'
import { Settings, ExitToApp, AccountCircle } from '@mui/icons-material';
import useVerify from '../context/verifyUserContext'; // Custom Hook
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

function Header() {

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const userData = useVerify();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:3000/api/auth/logout/Signing-out/', {
                withCredentials: true
            });

            navigate('/');
            toast.info("You Log yourself out", { autoClose: 1000 });

        } catch (error) {
            console.log("Axios Error Occuring", error);
            toast.error("Logout Failed", { autoClose: 1000 });
        }

    }

    const handleProfile = async () => {
        try {
            navigate('/profile');

        } catch (error) {
            console.log("Error Navigating to Profile Page", error);
        }
    }



    return (
        <div>
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
        </div>
    )
}

export default Header
