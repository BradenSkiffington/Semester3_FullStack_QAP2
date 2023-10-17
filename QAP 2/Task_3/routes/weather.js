const express = require('express');
const router = express.Router();

router.get('/weather', (req, res) => {
  res.sendFile(__dirname + '/public/weather.html');
});

module.exports = router;
