const express = require('express');
const homedir = require('os').homedir();
const path = require('path')
const fs = require('fs')
const mediainfo = require('node-mediainfo');
const db_filelist = require('../../models/Filelist.js')

const router = express.Router();

const mediaFolder = path.join(homedir, '/media')

router.get('/', async function(req, res, next) {
  const filelist = await db_filelist.find({}).select({ _id: 0 })
  res.json(filelist)  
});

router.post('/del', async function(req, res, next) {
  const files = req.body
  files.forEach((file) => {
    console.log(file.complete_name)
    try{
      fs.unlinkSync(file.complete_name)
    } catch (err) {
      console.error(err)
    }
  })
  let fileinfoArray = new Array()
  const filelist = fs.readdirSync(mediaFolder)
  for (const mediafile of filelist) {
    const fileinfo = await mediainfo(path.join(mediaFolder, mediafile))
    fileinfoArray.push({
      complete_name: path.join(mediaFolder, mediafile),
      name: mediafile,
      duration: fileinfo.media.track[0].Duration,
      type: mediafile.split(/\./).pop(),
      size: fileinfo.media.track[0].FileSize
    })
  }
  await db_filelist.deleteMany({})
  const rtmsg = await db_filelist.insertMany(fileinfoArray)
  if (rtmsg) {
    return res.json(rtmsg)
  }
  return res.json({ success: false })
})

module.exports = router;