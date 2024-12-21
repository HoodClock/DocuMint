import React from 'react'
import { GridView, History, Settings, Info, Inventory, RequestPage } from "@mui/icons-material"


function SideBar() {
    return (
        <>
            {/* Sidebar */}
            < aside className="w-64 bg-[#111318] p-5 flex flex-col justify-between h-screen overflow-y-auto" >
                {/* Sidebar Top */}
                < div >
                    <div className="text-3xl text-white font-bold mb-10 tracking-wider hover:text-pink-500 cursor-pointer transition-all duration-300">
                        <a href="/">
                            DocuMint
                        </a>
                        <RequestPage />
                    </div>
                    <nav>
                        <div className="flex items-center space-x-3 py-3 cursor-pointer hover:text-zinc-100 hover:font-bold transition-all duration-200">
                            <GridView className="hover:text-pink-600 transition-all duration-200 cursor-auto" />
                            <span><a href="/dashboard">Dashboard</a></span>
                        </div>
                        <div className="flex items-center space-x-3 py-3 cursor-pointer hover:text-zinc-100 hover:font-bold transition-all duration-200">
                            <Inventory className="hover:text-pink-600 transition-all duration-200 cursor-auto" />
                            <span><a href="/archive">Archive</a></span>
                        </div>
                        <div className="flex items-center space-x-3 py-3 cursor-pointer hover:text-zinc-100 hover:font-bold transition-all duration-200">
                            <History className="hover:text-pink-600 transition-all duration-200 cursor-auto" />
                            <span>Transaction History</span>
                        </div>
                    </nav>
                </div >

                {/* Sidebar Bottom */}
                < div >
                    <div className="flex items-center space-x-3 py-3 cursor-pointer hover:text-zinc-100 hover:font-bold transition-all duration-200">
                        <Settings className="hover:text-pink-600 transition-all duration-200 cursor-auto" />
                        <span>Settings</span>
                    </div>
                    <div className="flex items-center space-x-3 py-3 cursor-pointer hover:text-zinc-100 hover:font-bold transition-all duration-200">
                        <Info className="hover:text-pink-600 transition-all duration-200 cursor-auto" />
                        <span>About</span>
                    </div>
                </div >
            </aside >
        </>
    )
}

export default SideBar
