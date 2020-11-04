const { Mongoose } = require("mongoose");

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true},
  name: { type: String, default: ''},
  email: { type: String, default: ''},
  password: { type: String }
})

const User = mongoose.model('User', userSchema)

module.exports = User