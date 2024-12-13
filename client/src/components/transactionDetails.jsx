import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function TransactionDetails({ transaction }) {
    const gasUsed = parseFloat(transaction.gasUsed || 0);
    const value = parseFloat(transaction.value || 0);
    const blockNumber = transaction.blockNumber || 0;

    const handleCopy = () => {
        let hash = transaction.transactionHash;
        navigator.clipboard.writeText(hash);
        alert('Transaction Hash is copied');
    };

    return (
        <div className="p-6 bg-[#1a1d24] rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-white text-center mb-6">
                Transaction Details
            </h2>

            <div className="flex justify-around items-center">
                {/* Gas Used Graph */}
                <div style={{ width: 130, height: 130, filter: "drop-shadow(0 0 15px #FF6347)" }}>
                    <CircularProgressbar
                        value={gasUsed}
                        text={`Gas ${gasUsed}`}
                        styles={buildStyles({
                            pathColor: "#FF6347", // Tomato red
                            trailColor: "#FF6347", // Dark background
                            textColor: "#FF6347",
                        })}
                    />
                </div>

                {/* Value Graph */}
                <div style={{ width: 130, height: 130, filter: "drop-shadow(0 0 15px #fff)" }}>
                    <CircularProgressbar
                        value={value}
                        text={`${value.toFixed(2)} ETH`}
                        styles={buildStyles({
                            pathColor: "#28287C",
                            trailColor: "#fff",
                            textColor: "#fff",
                        })}
                    />
                </div>

                {/* Block Number Graph */}
                <div style={{ width: 130, height: 130, filter: "drop-shadow(0 0 15px #00FFFF)" }}>
                    <CircularProgressbar
                        value={blockNumber % 100} // Normalize for visual purposes
                        text={`Block ${blockNumber}`}
                        styles={buildStyles({
                            pathColor: "#00FFFF", // Neon cyan
                            trailColor: "#00FFFF", // Dark background
                            textColor: "#00FFFF", // Neon cyan text
                        })}
                    />
                </div>
            </div>

            {/* Transaction Info */}
            <div className="mt-6 text-white text-center space-y-2">
                <h3 className="text-lg font-semibold text-indigo-400">{transaction?.transactionType || "N/A"}</h3>
                <p className="text-gray-400">Date: <span className="text-white">{new Date(transaction?.transactionDate).toLocaleString() || "N/A"}</span></p>
                <p onClick={handleCopy} className="">
                    <span className="font-semibold text-zinc-400">Hash: </span><span className="cursor-pointer hover:text-[#FF6347] transition duration-300">{transaction?.transactionHash || "N/A"}</span>
                </p>
                <p className="text-gray-400">From: <span className="text-white">{transaction?.from || "N/A"}</span></p>
                <p className="text-gray-400">To: <span className="text-white">{transaction?.to || "N/A"}</span></p>
            </div>
        </div>
    );
}

export default TransactionDetails;
