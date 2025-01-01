import React from 'react'

function CTA() {
    return (
        <section className="py-12 bg-gradient-to-r text-white text-center mt-32">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text text-center bg-gradient-to-r from-blue-600 to-pink-500 mb-4">Ready to Secure Your Documents?</h2>
                <p className="text-lg mb-6">
                    Join DocuMint today and transform your documents into NFTs effortlessly!
                </p>
                <button className="relative overflow-hidden text-black bg-zinc-100 py-3 font-bold px-6 rounded-md text-xl group">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></span>
                    <span className="relative z-10 group-hover:text-black">
                        <a href="/dashboard">
                            Get Started Now
                        </a>
                    </span>
                </button>
            </div>
        </section>
    )
}

export default CTA
