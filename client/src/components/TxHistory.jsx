import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TxHistoryList() {
  const [transactions, setTransactions] = useState([]);

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

  return (
    <div className="bg-[#111318] p-6 rounded-lg shadow-lg mb-10">
      <h2 className="text-2xl font-bold text-white mb-4">Transaction History</h2>
      <div className="space-y-4">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#1a1d24] p-4 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300"
          >
            <div className="flex items-center">
              <div className={`h-10 w-10 rounded-full ${getTypeColor(tx.transactionType)} flex items-center justify-center text-white`}>
                {tx.transactionType[0]} {/* First letter of type */}
              </div>
              <div className="ml-4">
                <p className="text-white font-medium">Type: {tx.transactionType}</p>
                <p className="text-gray-400 text-sm">Date: {new Date(tx.transactionDate).toLocaleString()}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-pink-400 font-semibold">Amount: {tx.amount || 'N/A'}</p>
              <p className="text-gray-400 text-sm">Status: {tx.status || 'N/A'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TxHistoryList;
