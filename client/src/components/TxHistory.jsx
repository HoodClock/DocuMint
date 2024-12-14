import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionDetails from './transactionDetails';

function TxHistoryList() {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState();
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/transactions/get-trasnsaction', { withCredentials: true });
        setTransactions(response.data.tx);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.transaction-card')) {
      setExpandedIndex(null);
      setSelectedTransaction(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const getTypeColor = (type) => {
    switch (type) {
      case 'Minted':
        return 'bg-green-500';
      case 'Pending':
        return 'bg-blue-500';
      case 'Burned':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const toggleExpand = (index, transaction) => {
    setExpandedIndex(index === expandedIndex ? null : index);
    setSelectedTransaction(index === expandedIndex ? null : transaction);
  };

  return (
    <div className="bg-[#111318] p-6 rounded-lg shadow-lg mb-10">
      <h2 className="text-2xl font-bold text-white mb-4">Transaction History</h2>
      <div className="space-y-4">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className={`transaction-card bg-[#1a1d24] p-4 rounded-lg shadow-md transform transition-all duration-300 cursor-pointer ${index === expandedIndex ? 'scale-105' : 'hover:scale-105'
              }`}
            onClick={() => toggleExpand(index, tx)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`h-10 w-10 rounded-full ${getTypeColor(tx.transactionType)} flex items-center justify-center text-white`}>
                  {tx.transactionType[0]}
                </div>
                <div className="ml-4">
                  <p className="text-white font-medium">Type: {tx.transactionType}</p>
                  <p className="text-gray-400 text-sm">Date: {new Date(tx.transactionDate).toLocaleString()}</p>
                </div>
              </div>
              <div className="text-right">
                <p>
                  Hash: <span className="text-pink-400 font-semibold">{tx.transactionHash.slice(0, 14) || 'N/A'}...</span>
                </p>
              </div>
            </div>
            {index === expandedIndex && (
              <div className="mt-4 p-4 bg-[#25282e] rounded-lg">
                <TransactionDetails transaction={selectedTransaction} onClose={() => toggleExpand(index, null)} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TxHistoryList;
