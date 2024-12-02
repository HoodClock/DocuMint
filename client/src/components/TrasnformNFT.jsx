import React from 'react'
import axios from 'axios'
import { jwtDecode } from "jwt-decode";
import { useWallet } from '../context/WalletContext'

function TrasnformNFT() {

    const {account, setAccount} = useWallet();

    console.log(account);
    const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];

    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    const handle_Trasnform_NFT = async () => {
        try {

            if (!account) {
                alert("Please Connect you wallet first");
                return;
            }

            await axios.post(`http://localhost:3000/api/nfts/create/minting-new-nft/${userId}`, { account });

        } catch (error) {
            console.log("Axios Error: ", error);
        }
    }

    return (
        <div className="transform-nft-container">
            <h2>Transform Document into NFT</h2>

            <div className="flex justify-center gap-4 p-5">
                <button onClick={handle_Trasnform_NFT} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-cyan-500 transition duration-300">
                    Convert to NFT
                </button>
                <button className="px-4 py-2 bg-gradient-to-r border text-white rounded-lg hover:bg-gradient-to-r  hover:bg-blue-500 border-blue-500 transition duration-300">Save for Later</button>
            </div>
        </div>
    )
}

export default TrasnformNFT
