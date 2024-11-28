import React, { createContext, useState, useContext } from "react";

// To create Context
const WalletContext = createContext();

// Context Provider
export function WalletProvider({ children }) {
    const [account, setAccount] = useState(null);

    return (
        <WalletContext.Provider value={{ account, setAccount }}>
            {children}
        </WalletContext.Provider>
    );
}

// Custom hook for using Context
export function useWallet() {
    return useContext(WalletContext);
}
