import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const WalletContext = createContext();

export function WalletProvider({ children }) {
    const [account, setAccount] = useState(null);

    // Fetch wallet address from cookies on page load
    useEffect(() => {
        const fetchWallet = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/get-wallet-address/fetch-wallet-address', { withCredentials: true });
                if (response.data.walletAddress) {
                    setAccount(response.data.walletAddress);
                }
            } catch (error) {
                console.error("Error fetching wallet address", error);
            }
        };

        fetchWallet();
    }, []);

    const connectWallet = async (walletAddress) => {
        try {
            const resp = await axios.post('http://localhost:3000/api/wallet-connnection/set-cookie', { walletAddress }, { withCredentials: true });

            setAccount(walletAddress); // Update context
        } catch (error) {
            console.error("Error setting wallet cookie", error);
        }
    };

    const disconnectWallet = async () => {
        try {
            await axios.get('http://localhost:3000/api/wallet-connection/disconnection-wallet', { withCredentials: true });
            setAccount(null); // Clear context
        } catch (error) {
            console.error("Error disconnecting wallet", error);
        }
    };

    return (
        <WalletContext.Provider value={{ account, connectWallet, disconnectWallet }}>
            {children}
        </WalletContext.Provider>
    );
}

export function useWallet() {
    return useContext(WalletContext);
}