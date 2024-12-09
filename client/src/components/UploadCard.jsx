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
            maxWidth: '3600px',
            margin: 'auto',
            paddingTop: '20px',
            background: 'linear-gradient(80deg, #380D67, #ec4878)', // Gradient from blue to pink
            borderRadius: '8px',
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
                    backgroundColor: step >= 0 ? '#380D67' : '#000',
                }}>1</div>

                <div style={{
                    width: '50px',
                    height: '4px',
                    backgroundColor: step >= 1 ? '#380D67' : '#fff',
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
                    backgroundColor: step >= 1 ? '#FD4C8D' : '#000',
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
