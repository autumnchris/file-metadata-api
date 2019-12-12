const express = require('express');
const multer  = require('multer');

const upload = multer().single('upfile');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`));

app.post('/api/fileanalyse', upload, (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

app.use((req, res) => {
  res.status(404).sendFile(`${__dirname}/public/404.html`);
});

app.listen(port, console.log(`Server is listening at port ${port}.`));
