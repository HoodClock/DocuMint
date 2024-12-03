const express = require('express')
const router = express.Router();
const uploadDocumentController = require('../../controllers/uploadDocument.controller');
const auth_middleware = require('../../middleware/auth.middleware');

router.get('/fetched-documents', auth_middleware, uploadDocumentController.getAllDocuments);


module.exports = router;