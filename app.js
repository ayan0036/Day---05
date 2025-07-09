 const express = require('express');
const app = express();  

app.get('/Express', (req, res) => {
  res.send('Express Server Me Aapka Swagat Hai');
});

app.get('/about', (req, res) => {
  res.send(' Ye About Page Hai');
});

app.get('/contact', (req, res) => {
  res.send('Contact:8421857457');
});

app.listen(3000, () => {
  console.log('Server chal raha hai at http://localhost:3000');
});
