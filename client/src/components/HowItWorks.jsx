import React from 'react';
import { AddCircle, Lock, CheckCircle, } from '@mui/icons-material';
import TransformIcon from '@mui/icons-material/Transform';

function HowItWorks() {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                    How DocuMint Works
                </h2>
                <div className="flex justify-center items-center">
                    {/* Step 1 */}
                    <div className="relative z-10 transform transition-all duration-500 hover:scale-110">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full flex justify-center items-center shadow-lg cursor-pointer">
                            <AddCircle className="text-4xl text-white" />
                        </div>
                        <p className="mt-4 text-lg text-white font-semibold">Upload Document</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative z-10 transform transition-all duration-500 hover:scale-110 mx-24">
                        <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex justify-center items-center shadow-lg cursor-pointer">
                            <Lock className="text-4xl text-white" />
                        </div>
                        <p className="mt-4 text-lg text-white font-semibold">Encryption</p>
                    </div>



                    {/* Step 3 */}
                    <div className="relative z-10 transform transition-all duration-500 hover:scale-110 mx-24">
                        <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex justify-center items-center shadow-lg cursor-pointer">
                            <TransformIcon className="text-4xl text-white" />
                        </div>
                        <p className="mt-4 text-lg text-white font-semibold">Convert to NFT</p>
                    </div>


                    {/* Step 4 */}
                    <div className="relative z-10 transform transition-all duration-500 hover:scale-110 mx-24">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex justify-center items-center shadow-lg cursor-pointer">
                            <CheckCircle className="text-4xl text-white" />
                        </div>
                        <p className="mt-4 text-lg text-white font-semibold">Complete Ownership</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
