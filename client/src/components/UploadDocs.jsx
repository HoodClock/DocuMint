import React, { useState } from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { toast } from 'react-toastify'
import SpringAnimation from '../assets/animations/SpringLoader.json'
import Lottie from 'lottie-react';

function UploadDocs({ onUploadComplete }) {

    const [activeUploadDocs, setActiveUploadDocs] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isbackGround, setIsBackGround] = useState(true);

    const loaderAnimation = {
        animation: SpringAnimation
    }

    const [docName, setDocname] = useState('');
    const [docDesc, setDocDesc] = useState('');
    const [docType, setDocType] = useState('');
    const [docFile, setDocFile] = useState('');

    const handleOpenModel = async () => {
        setActiveUploadDocs(true);
        setIsBackGround(true);
    }

    const handleCloseModel = async () => {
        setActiveUploadDocs(false);
        setIsBackGround(false);
    }

    const handleUploadDocument = async (e) => {
        try {
            e.preventDefault();

            const formData = new FormData();
            formData.append('docName', docName);
            formData.append('docDesc', docDesc);
            formData.append('docType', docType);
            formData.append('document', docFile);


            if (!formData) {
                toast.error('Missing Credentials', { autoClose: 1000 });
                return;
            }

            setIsLoading(true);
            setIsBackGround(false);

            await axios.post('http://localhost:3000/api/documents/upload/upload-document', formData,
                {
                    withCredentials: true,
                })
                .then(() => {
                    setIsBackGround(true);
                    toast.success('Successfully Uploaded', { autoClose: 1000 });
                    onUploadComplete();
                })
                .finally(() => setIsLoading(false));
        }
        catch {
            toast.error('Failed to Upload', { autoClose: 1000 });
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
                    <button className='p-2 bg-gradient-to-r from-cyan-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-cyan-500 transition-transform duration-2 hover:text-white font-semibold text-white rounded-md'>Upload Now
                        <UploadFileIcon style={{ color: '#000', margin: "0.3rem", fontSize: '1rem' }} />
                    </button>
                </div>
            </div >

            {/* Modal for Upload Details */}
            {
                activeUploadDocs && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
                        <div className="bg-[#1B1F3B] p-10 rounded-lg shadow-lg w-full max-w-lg relative">
                            {/* Close Button */}
                            <button
                                className="absolute top-3 right-2 hover:text-[#FFB84C] transition-colors"
                                onClick={handleCloseModel} // Close modal on click
                            >
                                <CloseIcon />
                            </button>

                            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FFB84C] via-[#A855F7] to-[#38BDF8] font-poppins bg-clip-text text-transparent mb-6 text-center">
                                Upload Document Details
                            </h2>

                            <form onSubmit={handleUploadDocument}>
                                {/* Input Fields */}
                                <div className="mb-4">
                                    <label htmlFor="docName" className="block text-[#E2E8F0] mb-2 font-bold">Document Name</label>
                                    <input
                                        id="docName"
                                        name='docName'
                                        onChange={(e) => setDocname(e.target.value)}
                                        type="text"
                                        className="w-full p-3 rounded bg-[#111827] text-[#F8FAFC] focus:border-[#A855F7] transition-colors"
                                        placeholder="Enter Document Name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="docDesc" className="block text-[#E2E8F0] mb-2 font-bold">Document Description (Optional)</label>
                                    <textarea
                                        id="docDesc"
                                        name='docDesc'
                                        onChange={(e) => setDocDesc(e.target.value)}
                                        rows="3"
                                        className="w-full p-3 rounded bg-[#111827] text-[#F8FAFC] transition-colors focus:border-[#38BDF8]"
                                        placeholder="Enter a short description"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="documentFile" className="block text-[#E2E8F0] mb-2 font-bold">Upload Document</label>
                                    <input
                                        id="docFile"
                                        name='docFile'
                                        type="file"
                                        onChange={(e) => setDocFile(e.target.files[0])}
                                        className="w-full p-3 rounded bg-[#111827] text-[#F8FAFC] transition-colors focus:border-[#EC4899]"
                                        accept=".pdf, .doc, .docx, .png, .jpg, .jpeg"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="documentType" className="block text-[#E2E8F0] mb-2 font-bold">Select Document Type</label>
                                    <select
                                        id="docType"
                                        name='docType'
                                        onChange={(e) => setDocType(e.target.value)}
                                        className="w-full p-3 rounded bg-[#111827] text-[#C084FC] transition-colors focus:border-[#A855F7]"
                                    >
                                        <option className="bg-[#1B1F3B] text-[#38BDF8] font-semibold">Legal</option>
                                        <option className="bg-[#1B1F3B] text-[#38BDF8] font-semibold">Personal</option>
                                        <option className="bg-[#1B1F3B] text-[#38BDF8] font-semibold">Official</option>
                                        <option className="bg-[#1B1F3B] text-[#38BDF8] font-semibold">Educational</option>
                                    </select>
                                </div>

                                {/* Upload Button */}
                                <div className="mt-8 flex justify-center">
                                    <button
                                        className={` ${isbackGround ? "bg-gradient-to-r from-[#EC4899] via-[#A855F7] to-[#38BDF8] text-white py-3 w-full shadow-lg rounded-full hover:from-[#FFB84C] hover:to-[#EC4899] transition-transform duration-2 font-bold" : "bg-transparent py-3 w-full"}`}
                                        type='submit'
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <div className="w-15 h-15">
                                                <Lottie animationData={loaderAnimation.animation} loop autoplay />
                                            </div>
                                        ) : (
                                            "Upload Your Document ✨"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    )
};

export default UploadDocs
