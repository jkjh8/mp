const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  req.logout();
  return res.json({ success: true })
});

module.exports = router;
