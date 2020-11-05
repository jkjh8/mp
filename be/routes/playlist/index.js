const express = require('express');
const db_playlist = require('../../models/Playlist.js')
const router = express.Router();

router.get('/', async function(req, res, next) {
  const playlist = await db_playlist.find({}).select({ _id: 0 })
  res.json(playlist)  
});

router.post('/', function(req, res, next) {
  db_filelist.deleteMany({}, (err, docu) => {
    if (err) return console.error(err)
    db_filelist.insertMany(req.playlist, (err, docu) => {
      if (err) return console.error(err)
      return res.json(docu)
    })
  }) (req, res, next)
  return res.json({ success: false })
})

module.exports = router;