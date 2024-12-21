import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";

// To create Context
const WalletContext = createContext();

// Context Provider
export function WalletProvider({ children }) {
    const [account, setAccount] = useState(null);


    // Restore account from local storage on page load
    useEffect(() => {
        const storedAccount = localStorage.getItem("connectedWallet");
        if (storedAccount) {
            setAccount(storedAccount);
        }
    }, []);


    const connectWallet = (newAccount) => {
        setAccount(newAccount);
        localStorage.setItem("connectedWallet", newAccount); // Save to local storage
    };

    const disconnectWallet = () => {
        setAccount(null);
        localStorage.removeItem("connectedWallet"); // Remove from local storage
    };

    return (
        <WalletContext.Provider value={{ account, connectWallet, disconnectWallet }}>
            {children}
        </WalletContext.Provider>
    );
}

// Custom hook for using Context
export function useWallet() {
    return useContext(WalletContext);
}
