const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://youhua:25jason0517@record.jnyovkt.mongodb.net/record?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('db connected error')
})

db.once('open', () => {
  console.log('db connected')
})

module.exports = db