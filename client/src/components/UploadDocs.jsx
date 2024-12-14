import React, { useState } from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

function UploadDocs({ onUploadComplete }) {

    const [activeUploadDocs, setActiveUploadDocs] = useState();

    const [docName, setDocname] = useState('');
    const [docDesc, setDocDesc] = useState('');
    const [docType, setDocType] = useState('');
    const [docFile, setDocFile] = useState('');

    const handleOpenModel = async () => {
        setActiveUploadDocs(true);
    }

    const handleCloseModel = async () => {
        setActiveUploadDocs(false);
    }

    const handleUploadDocument = async (e) => {
        try {
            e.preventDefault();

            const formData = new FormData();
            formData.append('docName', docName);
            formData.append('docDesc', docDesc);
            formData.append('docType', docType);
            formData.append('document', docFile);



            await axios.post('http://localhost:3000/api/documents/upload/upload-document', formData,
                {
                    withCredentials: true,
                });

            onUploadComplete();

        } catch (error) {
            console.error('Error during document upload', error);
        }
    }

    return (
        <>
            {/* Container Box with Upload Icon and Text */}
            < div className="rounded-lg flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                onClick={handleOpenModel} // Open modal on click
            >
                <p className="mt-4 text-white font-extrabold text-center text-2xl">Create your own NFT!</p>
                <div className='mt-5'>
                    <button className='p-2 bg-zinc-100 hover:bg-blue-600 transition-transform duration-1 hover:text-white font-semibold text-black rounded-md'>Upload Now
                        <UploadFileIcon style={{ color: '#000', margin: "0.3rem", fontSize: '1rem' }} />
                    </button>
                </div>
            </div >

            {/* Modal for Upload Details */}
            {
                activeUploadDocs && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
                        <div className="bg-[#141721] p-10 rounded-lg shadow-lg w-full max-w-lg relative">
                            {/* Close Button */}
                            <button
                                className="absolute top-3 right-2 hover:text-[#f3cc4c] transition-colors"
                                onClick={handleCloseModel} // Close modal on click
                            >
                                <CloseIcon />
                            </button>

                            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-purple-600 font-poppins bg-clip-text text-transparent mb-6 text-center">
                                Upload Document Details
                            </h2>

                            <form onSubmit={handleUploadDocument}>
                                {/* Input Fields */}
                                <div className="mb-4">
                                    <label htmlFor="docName" className="block text-[#ffffff] mb-2 font-bold">Document Name</label>
                                    <input
                                        id="docName"
                                        name='docName'
                                        onChange={(e) => setDocname(e.target.value)}
                                        type="text"
                                        className="w-full p-3 rounded bg-[#000000] text-[#ffffff] focus:border-[#8FFD2D] transition-colors"
                                        placeholder="Enter Document Name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="docDesc" className="block text-[#ffffff] mb-2 font-bold">Document Description (Optional)</label>
                                    <textarea
                                        id="docDesc"
                                        name='docDesc'
                                        onChange={(e) => setDocDesc(e.target.value)}
                                        rows="3"
                                        className="w-full p-3 rounded bg-[#000000] text-[#ffffff] transition-colors"
                                        placeholder="Enter a short description"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="documentFile" className="block text-[#ffffff] mb-2 font-bold">Upload Document</label>
                                    <input
                                        id="docFile"
                                        name='docFile'
                                        type="file"
                                        onChange={(e) => setDocFile(e.target.files[0])}
                                        className="w-full p-3 rounded bg-[#000000] text-[#ffffff] transition-colors"
                                        accept=".pdf, .doc, .docx, .png, .jpg, .jpeg" // LATER Change this also👿
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="documentType" className="block text-[#f9f9f9] mb-2 font-bold">Select Document Type</label>
                                    <select
                                        id="docType"
                                        name='docType'
                                        onChange={(e) => setDocType(e.target.value)}
                                        className="w-full p-3 rounded bg-[#000000] text-[#ededed] transition-colors"
                                    >
                                        👿 NEED TO FIX THE LEGAL OPTION 👿
                                        <option className="bg-black text-[#aa73fb] font-semibold">Legal</option>
                                        <option className="bg-black text-[#aa73fb] font-semibold">Personal</option>
                                        <option className="bg-black text-[#aa73fb] font-semibold">Official</option>
                                        <option className="bg-black text-[#aa73fb] font-semibold">Educational</option>
                                    </select>
                                </div>

                                {/* Upload Button */}
                                <div className="mt-8 flex justify-center">
                                    <button

                                        className="bg-gradient-to-r from-yellow-500 to-purple-600 text-white py-3 w-full shadow-lg rounded-full hover:bg-[#eeee47] transition-all duration-600 font-bold"
                                        type='submit'
                                    >
                                        Upload Your Document
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default UploadDocs
