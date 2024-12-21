import { ethers } from 'ethers';
import React, { useState } from 'react'
import { Wallet, ContentCopy } from '@mui/icons-material';
import { useWallet } from '../context/WalletContext'
import { toast } from 'react-toastify'

function ConnectWallet() {

    const { connectWallet } = useWallet();
    const { account } = useWallet();
    const [showAccount, setShowAccount] = useState(false);
    const [showTag, setShowTag] = useState(false);

    const handleConnectWallet = async () => {
        if (window.ethereum) {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);
                connectWallet(accounts[0]); // Save wallet address in context and local storage
            } catch (error) {
                console.error("Error connecting to wallet", error);
            }
        } else {
            alert("Please install MetaMask!");
        }
    };

    const ShowHide = async () => {
        setShowAccount((prev) => !prev);
    }

    const handleCopyAccountAddress = async () => {
        await navigator.clipboard.writeText(account);
        setShowTag(true);
        setShowAccount((prev) => !prev);
        setTimeout(() => {
            setShowTag(false);
            setShowAccount((prev) => !prev);
        }, 1000);
    }

    return (
        <div>
            {!account ? (
                <button onClick={handleConnectWallet}>
                    <Wallet className="hover:text-pink-500 cursor-pointer text-white" />
                </button>
            ) : (
                <>
                    <div className='flex justify-center'>
                        <button onClick={ShowHide}>
                            <Wallet className="cursor-pointer pr-1 text-pink-500" />
                        </button>
                        {showAccount && (
                            <>
                                <p className="text-white pr-3 pl-1 font-bold">{account.slice(0, 6)}...{account.slice(-4)}</p>
                                <button onClick={handleCopyAccountAddress}>
                                    <ContentCopy className='hover:text-pink-500 text-sm' />
                                </button>

                            </>
                        )}

                        {showTag && (
                            <div className='p-3 bg-zinc-900 rounded-md border-s-white'>
                                <p className='text-pink-500 font-semibold'>Address Copied</p>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default ConnectWallet
