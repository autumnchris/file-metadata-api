const express = require('express');
const multer  = require('multer');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.use(express.static(`${__dirname}/public`));

app.listen(port, console.log(`Server is listening at port ${port}.`));
