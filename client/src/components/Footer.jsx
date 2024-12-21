import React from 'react'
import { RiLinkedinBoxFill, RiGithubFill, RiDiscordFill, RiRedditFill, RiYoutubeFill } from "@remixicon/react";
import AllRightReservedAnimation from '../assets/animations/AllRightsReservedAnimation.json'
import Lottie from 'lottie-react';

function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-10 mt-16">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">About DocuMint</h3>
                        <p className="text-gray-300">
                            DocuMint simplifies your document-to-NFT conversion with security and ease, offering an innovative way to protect your digital assets.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#features" className="hover:text-pink-400">Features</a></li>
                            <li><a href="#pricing" className="hover:text-pink-400">Pricing</a></li>
                            <li><a href="#support" className="hover:text-pink-400">Support</a></li>
                            <li><a href="#contact" className="hover:text-pink-400">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-4 text-purple-400">Find DocuMint On</h3>
                        <div className="flex justify-center md:justify-start gap-4">
                            <RiLinkedinBoxFill size={28} className="text-purple-400 hover:text-blue-500" />
                            <RiGithubFill size={28} className="text-purple-400 hover:text-gray-500" />
                            <RiDiscordFill size={28} className="text-purple-400 hover:text-purple-600" />
                            <RiRedditFill size={28} className="text-purple-400 hover:text-orange-500" />
                            <RiYoutubeFill size={28} className="text-purple-400 hover:text-red-600" />
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-center flex items-center justify-center">
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} DocuMint. All Rights Reserved.</p>
                    <Lottie animationData={AllRightReservedAnimation} loop={true} style={{ width: '60px', height: '60px' }} />
                </div>
            </div>
        </footer>
    )
}

export default Footer
