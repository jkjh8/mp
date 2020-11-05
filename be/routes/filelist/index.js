const express = require('express');
const db_filelist = require('../../models/Filelist.js')
const router = express.Router();

router.get('/', async function(req, res, next) {
  const filelist = await db_filelist.find({}).select({ _id: 0 })
  res.json(filelist)  
});

router.post('/', function(req, res, next) {

})

module.exports = router;