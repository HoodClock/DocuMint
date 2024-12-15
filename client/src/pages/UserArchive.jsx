import React, { useState } from "react";
import useFetchedDocuments from "../context/fetchDocumentsContext";
import Header from "../components/header";
import { ArrowDropDown, Close, DarkMode, Download, LightMode, Preview } from "@mui/icons-material";
import axios from 'axios'
import { jwtDecode } from "jwt-decode";
import { useWallet } from '../context/WalletContext'

const UserArchive = () => {
    const { documents, loading } = useFetchedDocuments();
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [expandedDocId, setExpandedDocId] = useState(null);
    const { account, setAccount } = useWallet();


    const toggleTheme = () => setIsDarkMode(!isDarkMode);
    const handleExpand = (id) => setExpandedDocId(expandedDocId === id ? null : id);


    if (loading) return <div className="text-center">Loading Documents...</div>;


    const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];

    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;


    const handle_Trasnform_NFT = async () => {
        try {

            if (!account) {
                alert("Please Connect you wallet first");
                return;
            }

            await axios.post(`http://localhost:3000/api/nfts/create/minting-new-nft/${userId}`, { account });

        } catch (error) {
            console.log("Axios Error: ", error);
        }
    }


    return (
        <div
            className={`min-h-screen p-4 ${isDarkMode ? "bg-[#0d1117] text-white" : "bg-zinc-100 text-black"}`}
        >
            <Header />
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-extrabold mt-10">Your Archive</h1>
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded-lg text-white"
                >
                    {isDarkMode ? <LightMode style={{ fontSize: "2.5rem" }} /> : <DarkMode style={{ color: "Black", fontSize: "2.5rem" }} />}
                </button>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto overflow-y-auto max-h-[70vh] shadow-2xl rounded-lg bg-transparent">
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr className="bg-gradient-to-tr from-purple-400 to-blue-600 bg-opacity-50 text-left text-white uppercase text-sm">
                            <th className="px-6 py-3 border-b border-purple-500">Document Name</th>
                            <th className="px-6 py-3 border-b border-purple-500">Type</th>
                            <th className="px-6 py-3 border-b border-purple-500">Status</th>
                            <th className="px-6 py-3 border-b border-purple-500">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map((doc) => (
                            <React.Fragment key={doc._id}>
                                <tr className={` ${isDarkMode ? "hover:bg-zinc-700" : "hover:bg-purple-500"} hover:bg-opacity-20 transition-colors duration-500 ease-in-out`}>
                                    <td className="px-6 py-4 font-medium">{doc.title}</td>
                                    <td className={`px-6 py-4 ${isDarkMode ? "text-purple-300" : "text-purple-700"} `}>{doc.docType}</td>
                                    <td className={`px-6 py-4 font-semibold ${doc.status === "Minted" ? "text-green-500" : "text-yellow-500"}`}>
                                        {doc.status}
                                    </td>
                                    <td className="px-6 py-4 flex space-x-4">
                                        <button
                                            onClick={() => handleExpand(doc._id)}
                                            className="text-pink-300 hover:underline"
                                        >
                                            {expandedDocId === doc._id ? <Close /> : <ArrowDropDown />}
                                        </button>
                                        <a
                                            href={doc.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-300 hover:underline"
                                        >
                                            <Preview />
                                        </a>
                                        <a
                                            href={doc.file}
                                            download={doc.title}
                                            className="text-purple-300 hover:underline"
                                        >
                                            <Download />
                                        </a>
                                        {doc.status === "Uploaded" && (
                                            <button
                                                className="text-white bg-gradient-to-r from-[#ec4899] to-[#1e3a8a] hover:from-[#1e3a8a] hover:to-[#ec4899] transition-transform duration-200 px-3 py-1 rounded-lg"
                                                onClick={handle_Trasnform_NFT}
                                            >
                                                Mint Now
                                            </button>
                                        )}
                                    </td>
                                </tr>
                                {expandedDocId === doc._id && (
                                    <tr>
                                        <td
                                            colSpan="4"
                                            className={` ${isDarkMode ? "bg-zinc-700" : "bg-purple-700"} bg-opacity-50 px-6 py-4 text-white`}
                                        >
                                            <div className="">
                                                <p><strong>IPFS Hash:</strong> {doc.IPFSHash}</p>
                                                <p><strong>Description:</strong> {doc.description}</p>
                                                <p><strong>Created:</strong> {new Date(doc.createdAt).toLocaleDateString()}</p>
                                            </div>
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
};

export default UserArchive;
