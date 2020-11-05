const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

const userSchema = new mongoose.Schema({
  id: { type: String, requird: true, unique: true},
  name: { type: String, default: ''},
  email: { type: String, default: ''},
  password: { type: String, required: true, bcrypt: true}
})
userSchema.plugin(require('mongoose-bcrypt')), { rounds: 10 }
const User = mongoose.model('User', userSchema)

module.exports = User