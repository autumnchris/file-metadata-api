exports.getFileMetadata = (req, res, next) => {

  if (!req.file) {
    res.render('form', { errorMessage: 'A file must be selected to submit the form.' });
  }
  else {
    res.json({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: `${req.file.size} bytes`
    });
  }
}