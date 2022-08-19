const db = require('../../config/mongoose.js')
const Record = require('../../models/record.js')

db.once('open', () => {
  console.log('seeds data created / db connected')
  Record.create({
    original_url: 'https://daodu.tech/archive_article',
    shortened_url: 'https://your-project-name.herokuapp.com/6y7UP'
  })
})