const express = require('express');
const app = express();


app.use(express.static('dist'));

app.listen(8001, () => {
  console.log('listening');
});