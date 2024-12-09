import React, { useState, useEffect } from 'react'
import axios from 'axios'

function RecentActivity() {

    const [data, setData] = useState();

    useEffect(() => {
        try {

            const getDocuments = async () => {
                const response = await axios.get('http://localhost:3000/api/documents/allDocuments/fetched-documents', { withCredentials: true });
                let DocsCollectionLength = response.data.data.length - 2
                setData(response.data.data.slice(DocsCollectionLength));
            }

            getDocuments();


        } catch (error) {
            console.error("Axios Error while Fetching Documents", error);
        }
    }, []);

    return (
        <>
            {/* Right: Recent Activity Box */}
            <section
                className="p-6 rounded-lg mb-10 shadow-lg flex-grow"
                style={{
                    background: 'linear-gradient(135deg, #1e3a8a, #3b0763, #ec4899)',
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5)',
                    color: 'white',
                }}
            >
                <h2
                    className="text-2xl font-extrabold mb-4 tracking-wide"
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        letterSpacing: '0.1rem',
                        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)',
                    }}
                >
                    Recent Activity
                </h2>

                <table className="min-w-full rounded-lg">
                    <thead>
                        <tr>
                            <th
                                className="text-left p-4"
                                style={{ color: '#e0e0e0', fontWeight: '600' }}
                            >
                                Document Name
                            </th>
                            <th
                                className="text-left p-4"
                                style={{ color: '#e0e0e0', fontWeight: '600' }}
                            >
                                Created On
                            </th>
                            <th
                                className="text-left p-4"
                                style={{ color: '#e0e0e0', fontWeight: '600' }}
                            >
                                Type
                            </th>
                        </tr>
                        <tr>
                            <td colSpan="3"
                                className="border-b"
                                style={{ borderBottom: '2px solid #4a5568' }}
                            />
                        </tr>
                    </thead>
                    {data?.length > 0 ? (
                        data.map((documentData) => (
                            <tbody key={documentData._id}>
                                <tr
                                    className="border-b"
                                    style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}
                                >
                                    <td className="p-4 text-gray-200 flex items-center">
                                        {documentData.title}
                                    </td>
                                    <td className="p-4 text-gray-400">
                                        {new Date(documentData.createdAt).toLocaleDateString('en-GB')}
                                    </td>
                                    <td
                                        className="p-4"
                                        style={{ color: '#facc15', fontWeight: 'bold' }}
                                    >
                                        {documentData.docType}
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    ) : (
                        <div className="flex justify-center items-center p-4">
                            <div
                                className="text-gray-500 text-lg"
                                style={{ color: '#e2e8f0' }}
                            >
                                <i
                                    className="fas fa-box-open text-3xl mr-2"
                                    style={{ color: '#d1d5db' }}
                                ></i>
                                No documents found
                            </div>
                        </div>
                    )}
                </table>
            </section>
        </>
    )
}

export default RecentActivity
