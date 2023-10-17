const express = require('express');
const router = express.Router();

router.get('/news', (req, res) => {
  res.sendFile(__dirname + '/public/news.html');
});

module.exports = router;
