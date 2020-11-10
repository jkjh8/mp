var express = require('express');
var router = express.Router();
// var path = require('path');

const isAuthenticated = () => (req, res, next) => {
  console.log(req.user)
  if (!req.user) {
    return res.sendStatus(403)
  }
  next()
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.use('/api/login', require('./login'))
router.use('/api/logout', require('./logout'))
router.use('/api/playlist', isAuthenticated(), require('./playlist'))
router.use('/api/filelist', require('./filelist'))
router.use('/api/rffiles', require('./rffiles'))
router.use('/api/player', require('./player'))
router.use('/api/setup', require('./setup'))
router.use('/api/preview', require('./preview'))
router.use('/api/uploads', require('./uploads'))
module.exports = router;
