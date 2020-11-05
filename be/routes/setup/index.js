const express = require('express');
const db_setup = require('../../models/Setup.js')
const router = express.Router();


router.get('/', async function(req, res, next) {
  const setup = await db_setup.findOne({ _id: '1'})
  return res.json(setup)  
});

router.post('/', function(req, res, next) {
  db_setup.save(req.setup, (err, docu) => {
    if (err) return console.error(err)
    return res.json(docu)
  }) (req, res, next)
  return res.json({ success: false })
})

module.exports = router;