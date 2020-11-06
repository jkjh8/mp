const express = require('express');
const homedir = require('os').homedir();
const path = require('path');
const multer = require('multer');

const router = express.Router();

const mediaPath = path.resolve(homedir, './media')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, mediaPath)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })


router.post('/', upload.single('files'), (req, res) => {
  res.json({ success: true })
})



module.exports = router;