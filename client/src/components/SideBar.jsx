import React from 'react'
import { GridView, History, Settings, Info, Inventory } from "@mui/icons-material"


function SideBar() {
    return (
        <>
            {/* Sidebar */}
            < aside className="w-64 bg-[#111318] p-5 flex flex-col justify-between" >
                {/* Sidebar Top */}
                < div >
                    <div className="text-3xl text-white font-bold mb-10 tracking-wider">
                        DocuMint
                    </div>
                    <nav>
                        <div className="flex items-center space-x-3 py-3 cursor-pointer hover:text-yellow-300 transition-all duration-200">
                            <GridView className="text-white" />
                            <span><a href="/dashboard">Dashboard</a></span>
                        </div>
                        <div className="flex items-center space-x-3 py-3 cursor-pointer hover:text-yellow-400 transition-all duration-200">
                            <Inventory className="text-white" />
                            <span><a href="/archive">Archive</a></span>
                        </div>
                        <div className="flex items-center space-x-3 py-3 cursor-pointer hover:text-yellow-400 transition-all duration-200">
                            <History className="text-white" />
                            <span>Transaction History</span>
                        </div>
                    </nav>
                </div >

                {/* Sidebar Bottom */}
                < div >
                    <div className="flex items-center space-x-3 py-3 cursor-pointer hover:text-white transition-all duration-200">
                        <Settings className="text-white" />
                        <span>Settings</span>
                    </div>
                    <div className="flex items-center space-x-3 py-3 cursor-pointer hover:text-white transition-all duration-200">
                        <Info className="text-white" />
                        <span>About</span>
                    </div>
                </div >
            </aside >
        </>
    )
}

export default SideBar
