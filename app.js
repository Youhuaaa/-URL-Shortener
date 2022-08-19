// require express
const express = require('express')
const port = 3000
const app = express()

// require handlebars
const handlebars = require('express-handlebars')
app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// db connection
require('./config/mongoose.js')

// require mongoose model Record
const Record = require('./models/record.js')

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})