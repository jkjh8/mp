const express = require('express');
const router = express.Router();
const dgram = require('dgram')
const host = 'localhost'
const port = 12302

const udpSender = dgram.createSocket('udp4')

router.get('/p/:filename', async function(req, res, next) {
  const msg = new Buffer.from(`play,${req.params.filename}`)
  await udpSender.send(msg, 0, msg.length, port, host, (err) => {
    if (err) return res.json({ success: true, error: err})
  })
  return res.json({ success: true})
});

router.get('/pi/', async function(req, res, next) {
  const msg = new Buffer.from(`pi,${req.params.id},${req.params.playid}`)
  await udpSender.send(msg, 0, msg.length, port, host, (err) => {
    if (err) return res.json({ success: true, error: err})
  })
  return res.json({ success: true})
});

router.get('/pl/:id', async function(req, res, next) {
  const msg = new Buffer.from(`pl,${req.params.id}`)
  await udpSender.send(msg, 0, msg.length, port, host, (err) => {
    if (err) return res.json({ success: true, error: err})
  })
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