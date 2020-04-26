const express = require('express');
const router = express.Router();

router.post('/login', (req, res, next) => {
  res.json({
    ...req.body,
    error: 0
  });
});

module.exports = router;
