import React from 'react'

function Features() {
    return (
        <section className="py-16 m-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
                    Why Choose DocuMint?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {[
                        {
                            title: 'Secure Storage',
                            description: 'Your documents are encrypted and stored with blockchain technology.',
                        },
                        {
                            title: 'NFT Transformation',
                            description: 'Easily turn your files into unique, tamper-proof NFTs.',
                        },
                        {
                            title: 'Full Ownership',
                            description: 'Keep complete control and ownership of your digital assets.',
                        },
                        {
                            title: 'Transparent History',
                            description: 'Access a detailed, tamper-proof transaction history anytime.',
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg hover:scale-105 transform transition duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-white text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
