const express = require('express');
const multer  = require('multer');
const fileMetadataController = require('../controllers/file-metadata-controller');
const upload = multer().single('upfile');
const router = express.Router();

router.post('/', upload, fileMetadataController.getFileMetadata);

module.exports = router;
