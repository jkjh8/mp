const express = require('express');
const fs = require('fs')
const homedir = require('os').homedir();
const path = require('path')
const router = express.Router();

const mediaFolder = path.join(homedir, '/media')

router.get('/:filename', function(req, res, next) {
  const filepath = path.resolve(mediaFolder, req.params.filename)
  const fileSize = fs.statSync(filepath).size
  const range = req.headers.range
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1] ? parseInt(parts[1], 10): fileSize-1
    const chunksize = (end-start)+1
    const file = fs.createReadStream(filepath, {start, end})
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(filepath).pipe(res)
  }
});

module.exports = router;
