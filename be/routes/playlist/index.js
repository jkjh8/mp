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

  console.log(id)
  try {
    await db_Playlist[id].deleteMany()
  } catch (err) {
    console.log(err)
  }
  const rtlist = await db_Playlist[id].insertMany(list)

  return res.json(rtlist)
})

router.post('/update', async function(req, res, next) {
  const id = req.body.id
  const list = req.body.list

  console.log(id)
  const rtlist = await db_Playlist[id].insertMany(list)

  return res.json(rtlist)
})

router.post('/remove', async function(req, res, next) {
  const id = req.body.id
  const playid = req.body.playid
  const r = await db_Playlist[id].deleteOne({ playid: playid })
  return res.json(r)
})

module.exports = router;