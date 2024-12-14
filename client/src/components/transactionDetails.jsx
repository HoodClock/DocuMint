import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CloseIcon from '@mui/icons-material/Close';
import { LocalGasStation } from '@mui/icons-material';

function TransactionDetails({ transaction, onClose }) {
    const [showTag, setShowTag] = useState(false);
    const gasUsed = parseFloat(transaction.gasUsed || 0);
    const value = parseFloat(transaction.value || 0);
    const blockNumber = transaction.blockNumber || 0;

    const handleCopy = () => {
        navigator.clipboard.writeText(transaction.transactionHash);
        setShowTag(true);
        setTimeout(() => setShowTag(false), 1000);
    };

    return (
        <div className="p-6 bg-[#1a1d24] rounded-lg shadow-lg relative">
            <button onClick={onClose} className="absolute top-2 right-2 text-white hover:text-red-500 transition">
                <CloseIcon />
            </button>
            <h2 className="text-xl font-bold text-white text-center mb-6">Transaction Details</h2>
            <div className="flex justify-around items-center">
                <div style={{ position: 'relative', width: 130, height: 130, filter: 'drop-shadow(0 0 15px #FF6347)' }}>
                    <CircularProgressbar
                        value={gasUsed}
                        text={`${gasUsed}`} // Keep text empty to make room for the icon
                        styles={buildStyles({
                            pathColor: '#FF6347',
                            trailColor: '#FF6347',
                            textColor: '#FF6347',
                        })}
                    />
                    <LocalGasStation
                        style={{
                            position: 'absolute',
                            top: '73%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: 32,
                            color: '#FF6347',
                        }}
                    />
                </div>
                <div style={{ width: 130, height: 130, filter: 'drop-shadow(0 0 15px #fff)' }}>
                    <CircularProgressbar
                        value={value}
                        text={`${value.toFixed(2)} ETH`}
                        styles={buildStyles({ pathColor: '#28287C', trailColor: '#fff', textColor: '#fff' })}
                    />
                </div>
                <div style={{ width: 130, height: 130, filter: 'drop-shadow(0 0 15px #00FFFF)' }}>
                    <CircularProgressbar
                        value={blockNumber % 100}
                        text={`Block ${blockNumber}`}
                        styles={buildStyles({ pathColor: '#00FFFF', trailColor: '#00FFFF', textColor: '#00FFFF' })}
                    />
                </div>
            </div>
            <div className="mt-6 text-white text-center space-y-2">
                <h3 className="text-lg font-semibold text-indigo-400">{transaction.transactionType || 'N/A'}</h3>
                <p className="text-gray-400">Date: <span className="text-white">{new Date(transaction.transactionDate).toLocaleString() || 'N/A'}</span></p>
                <p>
                    <span className="font-semibold text-zinc-400">Hash: </span>
                    <span onClick={handleCopy} className="cursor-pointer text-[#FF6347] hover:text-orange-200 transition duration-300">
                        {transaction.transactionHash || 'N/A'}
                    </span>
                    {showTag && <span className="ml-2 text-green-500">Hash Copied!</span>}
                </p>
                <p className="text-gray-400">From: <span className="text-[#FFFFFF]">{transaction.from || 'N/A'}</span></p>
                <p className="text-gray-400">To: <span className="text-[#00FFFF]">{transaction.to || 'N/A'}</span></p>
            </div>
        </div>
    );
}

export default TransactionDetails;
