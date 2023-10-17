const express = require('express');
const router = express.Router();

router.get('/films', (req, res) => {
  res.sendFile(__dirname + '/public/films.html');
});

module.exports = router;
