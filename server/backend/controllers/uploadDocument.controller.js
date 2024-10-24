const documentModel = require('../models/Document.model');
const pinataSDK = require('@pinata/sdk');


// Upload Docs POST ❌
// Get ALL Docs of the User❌

exports.upload = async (req, res) => {
    try {

        // access the file credentials 
        const { docName, docDesc, documentType } = req.body;

        if (!docName || !docDesc || !documentType) {
            return res.status(401).json({ message: "Document Credentials are missing." });
        }

        // access the file that was upload
        const file = req.file;

        if (!file) {
            return res.status(404).json({ message: "File is not uploaded!!" });
        }

        // initialize Pinata
        const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

        // Upload file to Pinata
        const result = await pinata.pinFileToIPFS(file.buffer);

        // Save the new document in collection of Document in MongoDB
        const newDocument = await documentModel.create({
            title: docName,
            description: docDesc,
            docType: documentType,
            IPFSHash: result.IpfsHash,
            owner: req.user._id
        });

        return res.status(201).json({ message: "Document uploaded successfully", document: newDocument });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error  while uploading a document", error });
    }
}