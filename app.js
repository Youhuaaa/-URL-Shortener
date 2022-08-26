// require express
const express = require('express')
const PORT = process.env.PORT || 3000
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
const generateUrl = require('./public/javascripts/shorten.js')

// db connection
require('./config/mongoose.js')

// require mongoose model Record
const Record = require('./models/record.js')

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/record', (req, res) => {
  let url = req.body.url
  Record.find()
    .lean()
    .then(urlList => {
      existedUrl = urlList.find(element => element.original_url === url)
      if (existedUrl) {
        return res.render('index', { url: existedUrl.original_url, shortened_url: existedUrl.shortened_url })
      }
      let shortenedURL = generateUrl()
      while (urlList.some(element => element.shortened_url === shortenedURL)) {
        shortenedURL = generateUrl()
      }

      return Record.create({
        original_url: url,
        shortened_url: shortenedURL
      })
        .then(res.render('index', { url: url, shortened_url: shortenedURL }))
        .catch(error => console.log(error))

    })

})


app.get('/:shortUrl', (req, res) => {
  let shortUrl = 'polar-brook-24262.herokuapp.com/' + req.params.shortUrl
  console.log(shortUrl)
  Record.findOne({ shortened_url: shortUrl })
    .lean()
    .then(relink => {
      if (relink) {
        console.log(relink)
        res.status(301).redirect(relink.original_url)
      }
    })
    .catch(() => { res.sendStatus(404) })
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})
