import React from 'react'
import uploadAnimationHome from '../assets/animations/fileUplaodHome.json'
import NFTHomeAnimation from '../assets/animations/NFTSHomeAnimaiton.json'
import AllcryptoCurrency from '../assets/animations/homeCryptoanimation.json'
import Footer from '../components/Footer'
import Lottie from 'lottie-react';


function Home() {
    return (
        <div className="h-screen overflow-auto bg-black font-sans text-white">
            <div className="m-8">
                <header className="bg-gray-900 rounded-full shadow-md py-4">
                    <div className="container mx-auto flex items-center justify-between px-6">
                        <div className="text-2xl font-extrabold text-purple-400">DocuMint</div>
                        <nav>
                            <ul className="flex space-x-6 text-gray-400">
                                <li className="hover:text-pink-400 cursor-pointer font-extrabold">Features</li>
                                <li className="hover:text-pink-400 cursor-pointer font-extrabold">Support</li>
                                <li className="hover:text-pink-400 cursor-pointer font-extrabold">About</li>
                                <li className="hover:text-pink-400 cursor-pointer font-extrabold">How it Works</li>
                            </ul>
                        </nav>
                        <button className="bg-purple-500 text-white py-2 px-4 hover:bg-purple-700 rounded-full font-extrabold">Sign Up</button>
                    </div>
                </header>
            </div>

            <main className="container mx-auto px-6 mt-20">
                <section className="text-center">
                    <h1 className="text-6xl font-extrabold text-white">Fast Uploads, Unique NFTs</h1>
                </section>

                <section className="flex flex-wrap justify-center gap-32 mt-20">
                    <div className="bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 shadow-lg w-72 h-72 relative rounded-3xl p-6 text-center hover:scale-105 transition-transform">
                        <h2 className="text-2xl bg-white w-16 h-16 rounded-full absolute  translate-x-[-50%] translate-y-[-50%] top-0 left-1/2 font-bold text-black flex items-center justify-center">#1</h2>
                        <p className="text-lg font-semibold mt-7 text-gray-200">Upload Document <span className='font-bold'>Seamlessly</span></p>
                        <div className="w-full h-40">
                            <Lottie animationData={uploadAnimationHome} loop={true} />
                        </div>
                    </div>
                    <div className="bg-gradient-to-tr from-blue-600 via-purple-500 to-pink-500 shadow-lg w-80 h-96 relative rounded-3xl p-6 text-center hover:scale-105 transition-transform">
                        <h2 className="text-2xl bg-white w-16 h-16 rounded-full absolute translate-x-[-50%] translate-y-[-50%] top-0 left-1/2 font-bold text-black flex items-center justify-center">#2</h2>
                        <p className="mt-2 text-lg font-semibold text-gray-200">Deals in All Crypto <br /> <span className='font-bold'>Currencies</span></p>
                        <div className="w-full  mb-5">
                            <Lottie animationData={AllcryptoCurrency} loop={true} />
                        </div>
                    </div>
                    <div className="bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 shadow-lg w-72 h-72 relative rounded-3xl p-6 text-center hover:scale-105 transition-transform">
                        <h2 className="text-2xl bg-white w-16 h-16 rounded-full absolute translate-x-[-50%] translate-y-[-50%] top-0 left-1/2 font-bold text-black flex items-center justify-center">#3</h2>
                        <p className="mt-2 text-lg font-semibold text-gray-200">Secure your Documents in <br /> <span className='font-bold'>Unique NFTs</span></p>
                        <div className="w-full h-40 mb-5">
                            <Lottie animationData={NFTHomeAnimation} loop={true} />
                        </div>
                    </div>
                </section>

                <section className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-300">Mint Faster. Earn More with DocuMint</h2>
                    <button className="mt-4 bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-700">
                        <a href="/dashboard">Start Now</a>
                    </button>
                </section>
                <Footer />
            </main>
        </div>
    )
}

export default Home
