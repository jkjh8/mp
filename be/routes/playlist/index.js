const express = require('express');
const mongoose = require('mongoose')
const playlistSchema = require('../../models/Playlist.js')
const router = express.Router();

const db_Playlist = new Array
for(let i = 0; i < 9; i++) {
  db_Playlist.push(mongoose.model('playlist_' + i, playlistSchema))
}
// const db_Playlist = mongoose.model('Playlist', playlistSchema)


router.get('/:id', async function(req, res, next) {
  const id = req.params.id
  const playlist = await db_Playlist[id].find({}).select({ _id: 0 })
  // global.io.emit('playlist',playlist)
  res.json(playlist)  
});

router.post('/', async function(req, res, next) {
  const id = req.body.id
  const list = req.body.list

  await db_Playlist[id].deleteMany({})
  const rtlist = await db_Playlist[id].insertMany(list)

  return res.json(rtlist)


  // db_filelist.deleteMany({}, (err, docu) => {
  //   if (err) return console.error(err)
  //   db_Playlist.insertMany(req.playlist, (err, docu) => {
  //     if (err) return console.error(err)
  //     return res.json(docu)
  //   })
  // }) (req, res, next)
  // return res.json({ success: false })
})

module.exports = router;