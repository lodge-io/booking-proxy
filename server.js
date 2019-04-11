const express = require('express');
const app = express();
const axios = require('axios');
const port = 8001;

const bookingPath = 'http://localhost:3000/listings/';

app.use(express.static('dist'));

app.get('/listings/:listingId', (req, res) => {
  console.log(req.params.listingId);
  axios.get(bookingPath + req.params.listingId)
    .then(data => {
      res.send(data.data);
    });
});

app.listen(port, () => {
  console.log(`listening at ${port}`);
});