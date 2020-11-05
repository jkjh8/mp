const express = require('express');
const fs = require('fs')
const homedir = require('os').homedir();
const path = require('path')
const mediainfo = require('node-mediainfo');
const db_filelist = require('../../models/Filelist.js')
const router = express.Router();

const mediaFolder = path.join(homedir, '/media')

router.get('/', async function(req, res, next) {
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
  db_filelist.deleteMany({}, (err, docu) => {
    if (err) return console.error(err)
    db_filelist.insertMany(fileinfoArray, (err, docu) => {
      if (err) return console.error(err)
      return res.json(docu)
    })
  }) (req, res, next)
  return res.json({ success: false })
});

router.post('/', function(req, res, next) {

})

module.exports = router;