import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What is DocuMint?',
            answer: 'DocuMint is a platform that converts your documents into NFTs, ensuring secure and tamper-proof storage.',
        },
        {
            question: 'How does DocuMint ensure security?',
            answer: 'We use blockchain technology and encryption to protect your data from unauthorized access.',
        },
        {
            question: 'What types of documents can I convert?',
            answer: 'You can convert identification cards, certificates, and other important documents into NFTs.',
        },
        {
            question: 'Do I own the NFTs created on DocuMint?',
            answer: 'Yes, you have full ownership and control over the NFTs you create.',
        },
    ];

    return (
        <section className="py-12 bg-black text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text text-center bg-gradient-to-r from-blue-600 to-pink-500 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="p-4 border-b border-gray-700 cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold">{faq.question}</h3>
                                <div className="text-white">
                                    {activeIndex === index ? (
                                        <RemoveIcon fontSize="large" />
                                    ) : (
                                        <AddIcon fontSize="large" />
                                    )}
                                </div>
                            </div>
                            {activeIndex === index && (
                                <p className="mt-4 p-4 rounded-md text-zinc-900 font-bold text-xl bg-gradient-to-r from-blue-400 to-pink-500">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
