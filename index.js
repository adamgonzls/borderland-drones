const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const path = require('path')
const ejsMate = require('ejs-mate')
const Lead = require('./models/lead')
const methodOverride = require('method-override')

mongoose
  .connect('mongodb://127.0.0.1:27017/borderland-drones')
  .then(() => {
    console.log('Mongo borderland drones connection open!')
  })
  .catch((err) => {
    console.log('Oh no mongo error!')
    console.log(err)
  })

app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/leads', (req, res) => {
  res.render('leads')
})

app.get('/leads/new', (req, res) => {
  res.render('leads/new')
})

app.get('/leads/:id', async (req, res) => {
  const lead = await Lead.findById(req.params.id)
  res.render('leads/details', { lead })
})

app.post('/leads', async (req, res) => {
  const newLead = new Lead(req.body)
  await newLead.save()
  res.redirect(`/leads/${newLead._id}`)
})

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`)
})
