import React from 'react'

function Home() {
    return (
        <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to DocuMint</h1>
                <p className="text-lg mb-8">Securely convert your documents into NFTs.</p>
                <a href="/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
                    Get Started
                </a>
            </div>
        </div>
    )
}

export default Home
