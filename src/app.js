const express = require('express')
const app = express()
const path = require('path')
const validateTimeAndDay = require('./middlewares/datetimeValidator')

app.use(express.json())

// middleware to validate time and day
app.use(validateTimeAndDay)

// Serve static files (CSS, images, etc.) from the "public" directory
app.use(express.static(path.join(__dirname, '..', 'public')))

// setting pug as the default view engine
app.set('view engine', 'pug')
// app.set('views', './views')

// instructing pug to look into views folder
app.set('views', path.join(__dirname, 'views'))

// Define a route that renders the index.pug template
app.get('/', (req, res) => {
  res.render('home.pug')
})

// define a route for about.pug
app.get('/about', (req, res) => {
  res.render('about.pug')
})

// define a route for contact.pug
app.get('/contact', (req, res) => {
  res.render('contact.pug')
})

// app.use('/', productRoute)

// app.get('/view2', function (req, res) {
//   res.render('headerview')
// })

module.exports = app
