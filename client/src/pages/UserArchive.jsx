import React, { useState } from 'react'

function UserArchive() {
    const [expandedRow, setExpandedRow] = useState(null);

    const handleRowClick = (index) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    const documents = [
        // Sample data for structure only, replace with actual data from your state or props
        { id: 1, name: 'Document 1', createdOn: '2024-11-10', nftStatus: 'Not Minted', type: 'ID Card', description: 'Detailed description here...' },
        { id: 2, name: 'Document 2', createdOn: '2024-10-15', nftStatus: 'Minted', type: 'Certificate', description: 'Detailed description here...' },
        // Add more documents as needed
    ];

    return (
        <div className="min-h-screen p-6 bg-gradient-to-br from-blue-900 to-purple-800">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-8">Document Archive</h2>
            <div className="overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-blue-800 to-indigo-900">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-b border-indigo-700 text-indigo-300">
                            <th className="p-4 text-left text-white font-bold">Name</th>
                            <th className="p-4 text-left text-white font-bold">Created On</th>
                            <th className="p-4 text-left text-white font-bold">NFT Status</th>
                            <th className="p-4 text-left text-white font-bold">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map((doc, index) => (
                            <React.Fragment key={doc.id}>
                                <tr
                                    className="border-b border-indigo-700 hover:bg-gradient-to-r from-purple-700 to-indigo-700 transition-colors duration-300 cursor-pointer"
                                    onClick={() => handleRowClick(index)}
                                >
                                    <td className="p-4 text-white">{doc.name}</td>
                                    <td className="p-4 text-white">{doc.createdOn}</td>
                                    <td className="p-4 text-white">{doc.nftStatus}</td>
                                    <td className="p-4 text-white">{doc.type}</td>
                                </tr>
                                {expandedRow === index && (
                                    <tr className="bg-indigo-900 transition-all duration-1000">
                                        <td colSpan="5" className="p-6">
                                            <p className="text-indigo-300 mb-4">Description: {doc.description}</p>
                                            {doc.nftStatus === 'Not Minted' && (
                                                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-cyan-500 transition duration-300">
                                                    Convert to NFT
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserArchive
