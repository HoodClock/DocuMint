import React, { useState } from 'react';
import UploadDocs from './UploadDocs';
import TransformNFT from './TrasnformNFT';

function UploadCard() {
    const [step, setStep] = useState(0); // Step 0 for UploadDocs, Step 1 for TransformNFT

    // Function to advance to the next step
    const handleUploadComplete = () => {
        setStep(1); // Move to TransformNFT component after upload completes
    };

    return (
        <div style={{
            width: '22rem',
            height: '18rem',
            padding: '25px',
            display: "flex",
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5)',
            flexDirection: 'column',
            justifyContent: "center",
            background: 'linear-gradient(135deg, #1e3a8a, #3b0763, #ec4899)',
            borderRadius: '6px',
            color: 'white',
        }}>
            {/* Custom Stepper */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: step >= 0 ? '#3b0763' : '#ec4899',
                }}>1</div>

                <div style={{
                    width: '50px',
                    height: '4px',
                    backgroundColor: step >= 1 ? '#ec4899' : '#fff',
                    margin: '0 10px',
                }}></div>

                <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: step >= 1 ? '#ec4899' : '#000000',
                }}>2</div>
            </div>

            {/* Step Content */}
            <div style={{ textAlign: 'center' }}>
                {step === 0 ? (
                    <UploadDocs onUploadComplete={handleUploadComplete} />
                ) : (
                    <TransformNFT />
                )}
            </div>
        </div>
    );
}

export default UploadCard;
