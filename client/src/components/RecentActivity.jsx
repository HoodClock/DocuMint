import React, { useState, useEffect } from 'react'
import axios from 'axios'

function RecentActivity() {

    const [data, setData] = useState();

    useEffect(() => {
        try {

            const getDocuments = async () => {
                const response = await axios.get('http://localhost:3000/api/documents/allDocuments/fetched-documents');
                setData(response.data.data);
            }

            getDocuments();


        } catch (error) {
            console.error("Axios Error while Fetching Documents", error);
        }
    }, []);

    return (
        <>
            {/* Right: Recent Activity Box */}
            < section className="bg-[#000000] p-6 rounded-lg mb-10 shadow-lg border-b-[#141721] flex-grow" >
                <h2 className="text-2xl font-bold text-white mb-4 tracking-wide">Recent Activity</h2>

                <table className="min-w-full rounded-lg">
                    <thead>
                        <tr>
                            <th className="text-left p-4 text-gray-300">Document Name</th>
                            <th className="text-left p-4 text-gray-300">Created On</th>
                            <th className="text-left p-4 text-gray-300">Type</th>
                        </tr>
                        <tr>
                            <td colSpan="3" className="border-b-2 border-zinc-100" />
                        </tr>
                    </thead>
                    {data?.map((documentData) => (
                        <tbody key={documentData._id}>
                            <tr className="border-b border-gray-700">
                                <td className="p-4 text-gray-200 flex items-center">
                                    {documentData.title}
                                </td>
                                <td className="p-4 text-gray-400">
                                    {new Date(documentData.createdAt).toLocaleDateString('en-GB')}
                                </td>
                                <td className="p-4 text-yellow-400">{documentData.docType}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </section >
        </>
    )
}

export default RecentActivity
