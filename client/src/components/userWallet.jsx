import React, { useState, useEffect } from "react";
import { useWallet } from "../context/WalletContext";
import { ethers } from "ethers";


function UserWallet() {
    const { account } = useWallet();
    const [etherBalance, setEtherBalance] = useState(0);


    useEffect(() => {
        const fetchEtherBalance = async () => {
            if (account && window.ethereum) {
                try {
                    const provider = new ethers.BrowserProvider(window.ethereum);
                    const balance = await provider.getBalance(account);
                    const ether = ethers.formatEther(balance);
                    setEtherBalance(parseFloat(ether).toFixed(4));
                } catch (error) {
                    console.error("Error fetching wallet balance", error);
                }
            }
        };

        fetchEtherBalance();
    }, [account]);

    return (
        <div
            className="bg-[#1E1E1E] rounded-md p-5 w-[26%] relative"
            style={{
                background: 'linear-gradient(135deg, #1e3a8a, #3b0763, #ec4899)',
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5)',
            }}
        >
            <h2 className="font-extrabold text-2xl text-center text-white mb-6">
                User Wallet Info
            </h2>
            {account && (
                <div className="text-center text-white">
                    <div className="w-32 h-32 border-t-emerald-300 border-b-lime-500 border-8 p-1 border-yellow-500 flex justify-center items-center rounded-full mb-4">
                        <h4 className="text-lg font-bold">{etherBalance} ETH</h4>
                    </div>
                    <div className="p-2">
                        <h4 className="text-sm font-bold mb-4">
                            Connected Wallet: {account.slice(0, 6)}...{account.slice(-4)}
                        </h4>
                    </div>
                </div>
            )}
            <div className="absolute bottom-4 right-4 text-sm text-white">
                <span>{account ? 'Wallet Connected' : 'Connect Your Wallet'}</span>
            </div>
        </div>
    );
}

export default UserWallet;
