import React, { useState } from 'react'
import axios from 'axios'
import { jwtDecode } from "jwt-decode";
import { useWallet } from '../context/WalletContext'
import { toast } from 'react-toastify'
import Lottie from 'lottie-react';
import EthereumAnimation from '../assets/animations/Ethereum.json'

function TrasnformNFT() {

    const { account, setAccount } = useWallet();
    const [isLoading, setIsLoading] = useState();
    const [isbackGround, setIsBackGround] = useState(true);

    const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];

    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    const settingAnimation = {
        animation: EthereumAnimation
    }

    const handle_Trasnform_NFT = async () => {
        try {

            if (!account) {
                toast.error("Please connect your wallet first!", { autoClose: 2000 });
                return;
            }

            setIsLoading(true);
            setIsBackGround(false);

            await axios.post(`http://localhost:3000/api/nfts/create/minting-new-nft/${userId}`, { account })
                .then(() => {
                    toast.success("Document is converted successfully", { autoClose: 1000 })
                    setIsBackGround(true);
                })
                .finally(() => { setIsLoading(false) });


        } catch (error) {
            toast.error("Something went wrong! Please try again.", { autoClose: 2000 });
        }
    }

    return (
        <div className="transform-nft-container">
            <h2>Transform Document into NFT</h2>

            <div className="flex justify-center gap-4 p-5">
                <button onClick={handle_Trasnform_NFT}
                    className={` ${isbackGround ? "px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-cyan-500 transition-transform duration-2" : "bg-transparent px-4 py-2"}`}>
                    {isLoading ? (
                        <div className="w-20 h-20">
                            <Lottie animationData={settingAnimation.animation} loop autoplay />
                        </div>
                    ) : (
                        "Convert to NFT"
                    )}
                </button>
                <button className="px-4 py-2 bg-gradient-to-r border text-white rounded-lg hover:bg-gradient-to-r  hover:bg-blue-500 border-blue-500 transition duration-300">Save for Later</button>
            </div>
        </div>
    )
}

export default TrasnformNFT
