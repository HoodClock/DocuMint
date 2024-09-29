import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Import the date adapter

Chart.register(...registerables);

// Sample transaction data with different dates
const transactions = [
  { user: 'User1', nft: 'NFT1', transactionType: 'Minted', transactionDate: new Date('2024-09-01'), transactionHash: 'hash1' },
  { user: 'User2', nft: 'NFT2', transactionType: 'Transferred', transactionDate: new Date('2024-09-02'), transactionHash: 'hash2' },
  { user: 'User3', nft: 'NFT3', transactionType: 'Burned', transactionDate: new Date('2024-09-03'), transactionHash: 'hash3' },
  { user: 'User4', nft: 'NFT4', transactionType: 'Minted', transactionDate: new Date('2024-09-04'), transactionHash: 'hash4' },
  { user: 'User5', nft: 'NFT5', transactionType: 'Transferred', transactionDate: new Date('2024-09-05'), transactionHash: 'hash5' },
];

function TxHistory() {
  // Dataset
  const data = {
    datasets: [
      {
        label: 'All Transactions',
        data: transactions.map(tx => ({
          x: new Date(tx.transactionDate).getTime(), // Convert to timestamp for x-axis
          y: tx.transactionType === 'Minted' ? 1 : tx.transactionType === 'Transferred' ? 2 : 3, // Assign y value based on type
        })),
        backgroundColor: (context) => {
          const dataPoint = context.dataset.data[context.dataIndex];
          if (dataPoint) {
            const type = dataPoint.y;
            return type === 1 ? 'green' : type === 2 ? 'blue' : 'red'; // Color based on type
          }
          return 'gray'; // Default color if undefined
        },
        borderColor: 'rgba(255, 255, 255, 0.6)', // Line color
        borderWidth: 2, // Line width
        showLine: true, // Show lines
        fill: false, // Don't fill under the line
        pointRadius: 6, // Increase dot size
      },
    ],
  };

  // TX-Options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow flexible sizing
    scales: {
      x: {
        type: 'time',
        title: {
          display: true,
          text: 'Transaction Date',
        },
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.2)', // Light grid color
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => {
            switch (value) {
              case 1:
                return 'Minted';
              case 2:
                return 'Transferred';
              case 3:
                return 'Burned';
              default:
                return '';
            }
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Light grid color
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Adjust line smoothness
      },
    },
  };

  return (
    <div className="bg-[#111318] p-6 rounded-lg shadow-lg mb-10" style={{ height: '400px' }}>
      <h2 className="text-2xl font-bold text-white mb-4">Transaction Graph</h2>
      <Scatter data={data} options={options} />
    </div>
  );
}

export default TxHistory;
