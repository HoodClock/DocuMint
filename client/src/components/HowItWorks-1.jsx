export function HowItWorks() {
  const steps = [
    {
      animation: UploadDocument,
      stepTag: '1',
      title: 'Upload Document',
      description: 'Easily upload your document to start the minting process.',
    },
    {
      animation: SecuredDocument,
      stepTag: '2',
      title: 'Secure Document',
      description: 'Your document is encrypted and securely stored.',
    },
    {
      animation: MintNFT,
      stepTag: '3',
      title: 'Mint NFT',
      description: 'Convert your document into a unique NFT effortlessly.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-8">
      <h2 className="text-4xl font-extrabold text-white">How It Works</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className='m-2 text-xl bg-blue-600 flex justify-center items-center font-extrabold rounded-full w-12 h-12'>
              <h1 className='text-white font-extrabold'>{step.stepTag}</h1>
            </div>
            <div className="w-44 h-44">
              <Lottie animationData={step.animation} loop autoplay />
            </div>

            <h3 className="mt-4 text-xl font-bold text-zinc-100">{step.title}</h3>
            <p className="mt-2 text-zinc-200 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
