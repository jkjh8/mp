const express = require('express');
const router = express.Router();
const dgram = require('dgram')
const host = 'localhost'
const port = 12302

const udpSender = dgram.createSocket('udp4')

router.get('/play/:filename', async function(req, res, next) {
  const msg = new Buffer.from(`play,${req.params.filename}`)
  await udpSender.send(msg, 0, msg.length, port, host, (err) => {
    if (err) return res.json({ success: true, error: err})
  })
  return res.json({ success: true})
});

router.get('/playid/', async function(req, res, next) {
  console.log(req.query.id, req.query.playid)

  // const msg = new Buffer.from(`playid,${req.params.playid}`)
  // await udpSender.send(msg, 0, msg.length, port, host, (err) => {
  //   if (err) return res.json({ success: true, error: err})
  // })
  return res.json({ success: true})
});

router.get('/stop', async function(req, res, next) {
  const msg = new Buffer.from(`stop`)
  await udpSender.send(msg, 0, msg.length, port, host, (err) => {
    if (err) return res.json({ success: true, error: err})
  })
  return res.json({ success: true})
});





// router.post('/', function(req, res, next) {

// })

module.exports = router;