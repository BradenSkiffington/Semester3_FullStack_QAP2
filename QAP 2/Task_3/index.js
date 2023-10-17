const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JavaScript, etc.) from the 'public' directory
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/menu.html');
});

// Define routes for other pages
app.get('/news', (req, res) => {
  res.sendFile(__dirname + '/public/news.html');
});

app.get('/weather', (req, res) => {
  res.sendFile(__dirname + '/public/weather.html');
});

app.get('/films', (req, res) => {
  res.sendFile(__dirname + '/public/films.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
