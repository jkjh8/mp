const express = require('express');
const homedir = require('os').homedir();
const path = require('path');

const router = express.Router();

const mediaPath = path.resolve(homedir, './media')

router.post('/', (req, res, next) => {
  let uploadFile = Object.values(req.files)[0]
  uploadFile.mv( `${mediaPath}/${uploadFile.name}`,
    function (err) {
      if (err) {
        return res.status(500).send(err);
      }
      
      return res.json({ success: true })
    }
  )
})


module.exports = router;