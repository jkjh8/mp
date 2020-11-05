var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.use('/api/loginProcess', require('./login'))
router.use('/api/playlist', require('./playlist'))
router.use('/api/filelist', require('./filelist'))
router.use('/api/rffiles', require('./rffiles'))
router.use('/api/player', require('./player'))
router.use('/api/setup', require('./setup'))
router.use('/api/preview', require('./preview'))
module.exports = router;
