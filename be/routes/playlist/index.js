const express = require('express');
const mongoose = require('mongoose')
const playlistSchema = require('../../models/Playlist.js')
const db_filelist = require('../../models/Filelist.js')

const router = express.Router();

const db_Playlist = new Array
for(let i = 0; i < 9; i++) {
  db_Playlist.push(mongoose.model('playlist_' + i, playlistSchema))
}
// const db_Playlist = mongoose.model('Playlist', playlistSchema)


router.get('/:id', async function(req, res, next) {
  const id = req.params.id
  let playlist = await db_Playlist[id].find({}).select({ _id: 0 })
  playlist.forEach(async (file) =>{
    const fileexist = await db_filelist.find({ name: file.name })
    if (fileexist.length === 0) {
      console.log(file)
      await db_Playlist[id].deleteMany({ name: file.name })
    }
  })
  playlist = await db_Playlist[id].find({}).select({ _id: 0 })
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
  io.emit('playlist', rtlist);
  return res.json(rtlist)
})

router.post('/update', async function(req, res, next) {
  const id = req.body.id
  const list = req.body.list

  console.log(id)
  const rtlist = await db_Playlist[id].insertMany(list)
  
  io.emit('playlist', rtlist);
  return res.json(rtlist)
})

router.post('/remove', async function(req, res, next) {
  const id = req.body.id
  const playid = req.body.playid
  const r = await db_Playlist[id].deleteOne({ playid: playid })
  io.emit('playlist', r);
  return res.json(r)
})

module.exports = router;