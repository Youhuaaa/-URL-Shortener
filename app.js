// require express
const express = require('express')
const port = 3000
const app = express()

// require handlebars
app.use(express.static('public'))
const handlebars = require('express-handlebars')
app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// create shortened url
const generateURL = require('./public/javascripts/shortener.js')

// db connection
require('./config/mongoose.js')

// require mongoose model Record
const Record = require('./models/record.js')

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/record', (req, res) => {
  // Get shortened URL
  let shortenedURL = generateURL()

  // Create URL
  let url = req.body.url
  console.log(url)
  Record.create({
    original_url: url,
    shortened_url: shortenedURL
  })
    .then(res.render('index', { url: url, shortenedURL: shortenedURL }))
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})