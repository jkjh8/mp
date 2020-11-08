const { Mongoose } = require("mongoose");
const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema({
  complete_name: { type: String},
  name: { type: String},
  duration: { type: Number },
  type: { type: String },
  playid: { type: Number },
  size: { type: Number }
})



module.exports = playlistSchema