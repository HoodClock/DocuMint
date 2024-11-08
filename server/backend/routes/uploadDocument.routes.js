const express = require('express')
const uploadController = require('../controllers/uploadDocument.controller')
const auth_middleware = require('../middleware/auth.middleware');
const multer_upload_middleware = require('../middleware/multerUploads.middleware');
const router = express.Router();

router.post('/upload-document', auth_middleware, multer_upload_middleware.single('document'), uploadController.upload);

module.exports = router;