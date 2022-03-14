const express = require('express');
const multer  = require('multer');
const fileMetadataController = require('../controllers/file-metadata-controller');
const upload = multer().single('upfile');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/fileanalyse', (req, res, next) => {
  res.render('form');
});

router.post('/fileanalyse', upload, fileMetadataController.getFileMetadata);

module.exports = router;
