const express = require('express');
const multer  = require('multer');
const upload = multer().single('upfile');
const router = express.Router();

router.post('/', upload, (req, res, next) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

module.exports = router;
