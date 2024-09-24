import React from 'react'
import UploadForm from '../components/UploadForm'
import ConnectWallet from '../components/ConnectWallet'

function ConvertDocument() {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-[#171420]'>
            <ConnectWallet />
            <UploadForm />
        </div>

    )
}

export default ConvertDocument
