const express = require('express');
const app = express();
const path = require('path');

// Set the 'views' directory
app.set('views', path.join(__dirname, 'views'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.status(200).render('index', { pageTitle: 'Home Page' });
});

app.get('/about', (req, res) => {
  res.status(200).render('about', { pageTitle: 'About Page' });
});

app.listen(3000, () => {
  console.log('This app is running at http://localhost:3000');
});
