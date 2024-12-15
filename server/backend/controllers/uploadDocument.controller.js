const documentModel = require('../models/Document.model');
const userModel = require('../models/User.model');
const pinataSDK = require('@pinata/sdk');
const { Readable } = require('stream');

// Upload Docs POST ✅
// Get ALL Docs of the User✅

exports.upload = async (req, res) => {
    try {

        // access the file credentials 
        const { docName, docDesc, docType } = req.body;

        // access the file that was upload
        const file = req.file;

        if (!docName || !docDesc || !docType || !file) {
            return res.status(401).json({ message: "Document Credentials are missing." });
        }

        // initialize Pinata
        const pinata = new pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

        // convert the buffer to readable  stream
        const readAbleStream = new Readable();
        readAbleStream.push(file.buffer);
        readAbleStream.push(null) // to end the stream

        // set the options with filename for pinata
        const option = {
            pinataMetadata: {
                name: docName
            },
            pinataOptions: {
                cidVersion: 0
            }
        }

        // Upload file to Pinata
        const result = await pinata.pinFileToIPFS(readAbleStream, option);

        // Save the new document in collection of Document in MongoDB
        const newDocument = await documentModel.create({
            title: docName,
            file: result.IpfsHash,
            description: docDesc,
            docType: docType,
            IPFSHash: result.IpfsHash,
            owner: req.user._id
        });

        await userModel.findByIdAndUpdate(req.user._id, { $push: { documents: newDocument._id } });

        return res.status(201).json({ message: "Document uploaded successfully", document: newDocument });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error  while uploading a document", error });
    }
}

exports.getAllDocuments = async (req, res) => {

    try {

        const documents = await documentModel.find({ owner: req.user._id });

        res.status(200).json({ success: true, data: documents });

    } catch (error) {

        res.status(500).json({ success: false, error: error.message });

    }

}