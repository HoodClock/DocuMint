const express = require('express')
const router = express.Router();
const uploadDocumentController = require('../controllers/uploadDocument.controller');

router.get('/fetched-documents', uploadDocumentController.getAllDocuments);


module.exports = router;