import { ethers } from 'ethers';
import React, { useState } from 'react'

function ConnectWallet() {

    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        try {
            if (window.ethereum) {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);
                setAccount(accounts[0]);
            } else {
                alert("Please Install Meta Mask");
            }
        } catch (error) {
            console.log('Error connecting to wallet', error);
        }
    }

    return (
        <div className="fixed top-4 right-4">
            {!account ? (
                <button
                    className="bg-blue-500 px-6 py-2 rounded text-white hover:bg-blue-700"
                    onClick={connectWallet}
                >
                    Connect Wallet
                </button>
            ) : (
                <p className="text-white">Connected: {account.slice(0, 6)}...{account.slice(-4)}</p>
            )}
        </div>
    )
}

export default ConnectWallet
