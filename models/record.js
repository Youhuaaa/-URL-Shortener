const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  original_url: {
    type: String,
    required: true
  },
  shortened_url: {
    type: String,
  }
})

module.exports = mongoose.model('Record', recordSchema)