import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import axios from 'axios';

function Profile() {

    const [userData, setUserData] = useState(null);
    const [lastNft, setLastNft] = useState(null);
    const [userQuest, setUserQuest] = useState(null);


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

        const getAllQuests = async () => {
            const response = await axios.get('http://localhost:3000/api/quests/user/', { withCredentials: true })
            setUserQuest(response.data.quest);
        }

        getAllQuests();

    }, []);

    return (
        <div className="bg-gray-900 text-white h-screen p-6 overflow-y-auto">
            <div>
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {/* Profile Card */}
                    <div className="bg-gray-800 rounded-lg p-6 relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-gray-800">
                            <img src={userData?.profilePicture} alt="User Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-16 flex flex-col items-center">
                            <h2 className="text-lg font-bold">{userData?.username || "Loading..."}</h2>
                        </div>
                    </div>

                    {/* Points and Transactions */}
                    <div className="bg-gray-800 rounded-lg p-4 col-span-1 md:col-span-2">
                        <h3 className="text-lg font-bold">Your Points</h3>
                        <div className="text-4xl font-extrabold mt-2">3456</div>
                        <p className="text-sm text-gray-400">Recent Transactions</p>
                        <ul className="mt-4 space-y-2">
                            <li>Completed a task: "Dashboard design" - 20 points</li>
                            <li>Completed a task: "Profile" - 20 points</li>
                        </ul>
                    </div>

                    {/* Level */}
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-lg font-bold">My Level</h3>
                        <div className="text-3xl font-extrabold mt-2">80</div>
                        <p className="text-sm text-gray-400">2030 to next level (74%)</p>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {/* Next Quests */}
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-lg font-bold">Next Quests</h3>
                        <ul className="mt-4 space-y-2">
                            <li>Complete a task - 20 points</li>
                            <li>Complete a subtask - 5 points</li>
                            <li>Create a task - 10 points</li>
                        </ul>
                    </div>

                    {/* Daily Rewards */}
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-lg font-bold">Daily Reward</h3>
                        <div className="flex items-center mt-4">
                            <div className="bg-blue-600 w-16 h-16 rounded-lg mr-4"></div>
                            <p>Morning Coffee</p>
                        </div>
                        <button className="mt-4 bg-yellow-500 px-4 py-2 rounded-lg text-sm">Collect</button>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Stats */}
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-lg font-bold">Global Stats</h3>
                        <p className="text-sm mt-2">345 Tasks completed</p>
                    </div>

                    {/* Tokens */}
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-lg font-bold">Your Tokens</h3>
                        <p className="text-sm mt-2">34 tokens available</p>
                        <button className="mt-4 bg-green-600 px-4 py-2 rounded-lg text-sm">Spend Tokens</button>
                    </div>

                    {/* Energy */}
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h3 className="text-lg font-bold">Energy</h3>
                        <p className="text-sm mt-2">10 energy points left</p>
                        <button className="mt-4 bg-purple-600 px-4 py-2 rounded-lg text-sm">Browse People</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
