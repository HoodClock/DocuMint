const express = require('express')
const uploadController = require('../controllers/uploadDocument.controller')
const auht_middleware = require('../middleware/auth.middleware');
const router = express.Router();

router.post('upload-document', auht_middleware, uploadController.upload);

module.exports = router;